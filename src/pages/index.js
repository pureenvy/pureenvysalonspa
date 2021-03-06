import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SocialMedia from '../components/socialmedia'
import Featured from '../components/featured'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import HeroBanner from '../components/herobanner'
import styles from './styles.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const homepageImages = get(this, 'props.data.allContentfulAsset.edges')
    const [site] = get(this, 'props.data.allContentfulSite.edges')

    const responsive = {
      0: { items: 1 },
    }

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <HeroBanner
          alt={homepageImages[0].node.title}
          fluid={homepageImages[0].node.fluid}
        >
          {documentToReactComponents(site.node.description.json)}
        </HeroBanner>
        <Featured />
        <SocialMedia
          facebook={site.node.facebook}
          twitter={site.node.twitter}
          instagram={site.node.instagram}
          style={{ textAlign: 'center' }}
        />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulSite(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          description {
            json
          }
          title
          facebook
          instagram
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
