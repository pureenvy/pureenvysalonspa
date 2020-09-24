import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const options = {
  renderText: (text) =>
    text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
}

const Policies = ({
  location,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulPageContent: { edges: pageContents },
  },
}) => (
  <Layout location={location}>
    <Helmet title={`${siteTitle} - Policies`} />
    {pageContents.map(({ node: page }) => {
      if (page.name === 'Policies')
        return documentToReactComponents(page.content.json, options)
      else return undefined
    })}
  </Layout>
)

export default Policies

export const pageQuery = graphql`
  query PoliciesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPageContent(sort: { fields: [name] }) {
      edges {
        node {
          id
          name
          content {
            json
          }
        }
      }
    }
  }
`
