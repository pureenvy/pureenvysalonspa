import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { graphql } from 'gatsby'

const Services = ({
  location,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulService: { edges: services },
  },
}) => (
  <Layout location={location}>
    <Helmet title={`${siteTitle} Services`} />
    {services.map(({ node: service }) => (
      <Paper>{JSON.stringify(service)}</Paper>
    ))}
  </Layout>
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
