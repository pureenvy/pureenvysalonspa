import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { graphql } from 'gatsby'
import styles from './blog.module.css'

const Artists = ({
  location,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulArtist: { edges: artists },
  },
}) => (
  <Layout location={location}>
    <Helmet title={`${siteTitle} Artists`} />
    {artists.map(({ node: artist }) => (
      <Paper>{JSON.stringify(artist)}</Paper>
    ))}
  </Layout>
)

export default Artists

export const pageQuery = graphql`
  query ArtistQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArtist(sort: { fields: [sort] }) {
      edges {
        node {
          name
          title
          bio {
            json
          }
          image {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
