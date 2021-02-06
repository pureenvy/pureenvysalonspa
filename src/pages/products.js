import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import React from 'react'
import { graphql } from 'gatsby'
import Product from '../components/product'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Products = ({
  location,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulProduct: { edges: products },
  },
}) => (
  <Layout location={location}>
    <Helmet title={`${siteTitle} - Products`} />
    {products.map(({ node: product }) => (
      <Product
        name={product.name}
        url={product.url}
        description={documentToReactComponents(product.description.json)}
        logo={<Img alt={product.name} fluid={product.logo.fluid} />}
      />
    ))}
  </Layout>
)

export default Products

export const pageQuery = graphql`
  query ProductQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct(sort: { fields: [name] }) {
      edges {
        node {
          name
          url
          description {
            json
          }
          logo {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          images {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
