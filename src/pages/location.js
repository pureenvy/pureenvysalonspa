import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const options = {
  renderText: (text) =>
    text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
}

const LocationAndHours = ({
  location,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulPageContent: { edges: pageContents },
  },
}) => (
  <Layout location={location}>
    <Helmet title={`${siteTitle} - Location and Hours`} />
    {pageContents.map(({ node: page }) => {
      if (page.name === 'Location and Hours')
        return documentToReactComponents(page.content.json, options)
      else return undefined
    })}
    <p>
      <iframe
        src="http://maps.google.com/maps?f=d&amp;source=s_d&amp;saddr=&amp;daddr=40.488609,-88.950339&amp;hl=en&amp;geocode=&amp;sll=40.488609,-88.950339&amp;sspn=0.012501,0.017531&amp;mra=mift&amp;mrsp=1&amp;sz=16&amp;ie=UTF8&amp;t=m&amp;z=15&amp;output=embed"
        width="100%"
        height="350"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
      ></iframe>
    </p>
  </Layout>
)

export default LocationAndHours

export const pageQuery = graphql`
  query LocationQuery {
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
