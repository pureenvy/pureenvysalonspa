import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import HeroBanner from '../components/herobanner'

const Weddings = ({
    location,
    data: {
        site: {
            siteMetadata: { title: siteTitle },
        },
        allContentfulPageContent: { edges: pageContents },
        allContentfulAsset: {edges: weddingImages}
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
        <Typography>We would be honored to take care of all your beauty needs on your special day! Please fill out this form and our Wedding Coordinator will be in contact with you.</Typography>
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
    allContentfulAsset(filter: { description: { eq: "[home-page]" } }) {
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
