import { Helmet } from 'react-helmet'
import React from 'react'
import { graphql } from 'gatsby'
import styles from './blog.module.css'

const Artists = ({
    data: {
        site: {
            siteMetadata: { title: siteTitle}
        },
        allContentfulArtist: { edges: artists}
    }
}) => (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>Artists</div>
        <div className="wrapper">
            {artists.map((artist) => (<pre>{JSON.stringify(artist)}</pre>))}
        </div>
      </div>
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
