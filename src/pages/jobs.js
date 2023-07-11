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

const Jobs = ({
  location,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulPageContent: { edges: pageContents },
    allContentfulAsset: { edges: jobImages },
  },
}) => (
  <Layout location={location}>
    <HeroBanner
      alt={jobImages[0].node.title}
      fluid={jobImages[0].node.fluid}
      mini
    ></HeroBanner>
    <Helmet title={`${siteTitle} - Employment Opportunities`} />
    <Typography gutterBottom variant="h2" component="h2">
      Employment Opportunities
    </Typography>
    {pageContents.map(({ node: page }) => {
      if (page.name === 'Employment Opportunities')
        return documentToReactComponents(page.content.json, options)
      else return undefined
    })}
    <p align="center">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfP1FzmAqV2RnpSp1UkDA8sc3_yTBvhcb74Ip0gw--5TE0AEw/viewform?embedded=true"
        width="640"
        height="900"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </p>
  </Layout>
)

export default Jobs

export const pageQuery = graphql`
  query JobQuery {
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
    allContentfulAsset(filter: { description: { eq: "[job-openings]" } }) {
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
