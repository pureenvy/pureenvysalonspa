import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SocialMedia from '../components/socialmedia'
import Featured from '../components/featured'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const homepageImages = get(this, 'props.data.allContentfulAsset.edges')
    const [site] = get(this, 'props.data.allContentfulSite.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        {homepageImages.map((image) => <Img alt={image.node.title} fluid={image.node.fluid} />)}
        {documentToReactComponents(site.node.description.json)}
        <Featured />
        <SocialMedia
          facebook={site.node.facebook}
          pinterest={site.node.pinterest}
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
          pinterest
        }
      }
    }
    allContentfulAsset(filter: {description: {regex: "/(\\[homepage\\])/gm"}}) {
      edges {
        node {
          fluid(resizingBehavior: PAD, maxWidth: 1180, maxHeight: 480, background: "rgb:fafafa") {
            ...GatsbyContentfulFluid_tracedSVG
          }
          title
        }
      }
    }
  }
`
