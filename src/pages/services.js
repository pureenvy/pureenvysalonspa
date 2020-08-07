import { Helmet } from 'react-helmet'
import React from 'react'
import { graphql } from 'gatsby'
import styles from './blog.module.css'

const Services = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulService: { edges: services },
  },
}) => (
  <div style={{ background: '#fff' }}>
    <Helmet title={siteTitle} />
    <div className={styles.hero}>Services</div>
    <div className="wrapper">
      {services.map(({ node: service }) => (
        <pre>{JSON.stringify(service)}</pre>
      ))}
    </div>
  </div>
)

export default Services

export const pageQuery = graphql`
  query ServiceQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulService(sort: { fields: [category] }) {
      edges {
        node {
          name
          category
          price
          doesPriceGoUp
        }
      }
    }
  }
`
