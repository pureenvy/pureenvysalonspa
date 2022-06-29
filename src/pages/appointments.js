import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const options = {
  renderText: (text) =>
    text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
}

const Appointments = ({
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
      if (page.name === 'Schedule an Appointment')
        return documentToReactComponents(page.content.json, options)
      else return undefined
    })}
    <p align="right">
      <Button
        component="a"
        variant="contained"
        href="http://envysalonblm.mysalononline.com/Booking/?sid=0"
        target="_blank"
      >
        Continue
        <ArrowRightIcon />
      </Button>
    </p>
  </Layout>
)

export default Appointments

export const pageQuery = graphql`
  query AppointmentsQuery {
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
