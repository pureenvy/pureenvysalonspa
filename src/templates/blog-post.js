import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      marginBottom: theme.spacing(3),
    },
  })
)

const BlogPostTemplate = (props) => {
  const post = get(props, 'data.contentfulBlogPost')
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const classes = useStyles()

  return (
    <Layout location={props.location}>
      <Helmet title={`${siteTitle} - ${post.title}`} />
      {post.heroImage && (
        <Card className={classes.card}>
          <CardMedia>
            <Img alt="" fluid={post.heroImage.fluid} />
          </CardMedia>
        </Card>
      )}
      <Typography gutterBottom variant="h4" component="h2">
        {post.title}
      </Typography>
      {documentToReactComponents(post.body.json)}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        json
      }
    }
  }
`
