import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'
import Artist from '../components/artist'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

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
    <Helmet title={`${siteTitle} - Artists`} />
    {artists.map(({ node: artist }) => (
      <Artist
        name={artist.name}
        title={artist.title}
        bio={documentToReactComponents(artist.bio.json)}
        image={<Img alt={artist.name} fluid={artist.image.fluid} />}
        instagramUrl={artist.instagram}
        facebookUrl={artist.facebook}
      />
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
          facebook
          instagram
          image {
            fluid(
              maxWidth: 350
              resizingBehavior: PAD
              background: "rgb:ffffff"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
