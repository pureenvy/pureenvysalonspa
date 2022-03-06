import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import HeroBanner from '../components/herobanner'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const options = {
  renderText: (text) =>
    text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
}

const Weddings = ({
  location,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulPageContent: { edges: pageContents },
    allContentfulAsset: { edges: weddingImages },
  },
}) => (
  <Layout location={location}>
    <HeroBanner
      alt={weddingImages[0].node.title}
      fluid={weddingImages[0].node.fluid}
    ></HeroBanner>
    <Helmet title={`${siteTitle} - Weddings`} />
    <Typography gutterBottom variant="h2" component="h2">
      Weddings
    </Typography>
    {pageContents.map(({ node: page }) => {
      if (page.name === 'Weddings')
        return documentToReactComponents(page.content.json, options)
      else return undefined
    })}
    <p align="center">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfT2orT1tFwVzdu3WeXQAeRVnEgh9SOOzmmlKKSK4J5AXBexA/viewform?embedded=true"
        width="640"
        height="1800"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </p>
  </Layout>
)

export default Weddings

export const pageQuery = graphql`
  query WeddingQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPageContent(sort: { fields: [name] }) {
      edges {
        node {
          id
          name
          content {
            json
          }
        }
      }
    }
    allContentfulAsset(filter: { description: { eq: "[wedding-page]" } }) {
      edges {
        node {
          id
          description
          title
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
