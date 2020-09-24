import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Img from 'gatsby-image'
import SocialMedia from '../components/socialmedia'
import Featured from '../components/featured'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [site] = get(this, 'props.data.allContentfulSite.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Img alt={site.node.name} fluid={site.node.heroImage.fluid} />
        {documentToReactComponents(site.node.description.json)}
        <Featured />
        <SocialMedia
          facebook={site.node.facebook}
          pinterest={site.node.pinterest}
          twitter={site.node.twitter}
          instagram={site.node.instagram}
          style={{ textAlign: 'center' }}
        />
        <h2 className="section-headline">Recent articles</h2>
        {posts.map(({ node }) => {
          return <ArticlePreview article={node} />
        })}
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: CROP
              background: "rgb:ffffff"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            json
          }
        }
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
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:fafafa"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
