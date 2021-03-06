import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'
import Expirence from '../components/expirence'
import HeroBanner from '../components/herobanner'

const categorySort = {
  Hair: 0,
  'Lashes and Makeup': 1,
  Nails: 2,
  Waxing: 3,
  Tanning: 4,
  Esthetics: 5,
}

const Services = ({
  location,
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allContentfulService: { edges: services },
    allContentfulAsset: { edges: heroimages },
  },
}) => {
  services.sort(function (a, b) {
    var nameA = a.node.category
    var nameB = b.node.category
    if (categorySort[nameA] < categorySort[nameB]) {
      return -1
    }
    if (categorySort[nameA] > categorySort[nameB]) {
      return 1
    }
    return 0
  })

  let curCat = ''

  return (
    <Layout location={location}>
      <Helmet title={`${siteTitle} - Expirences`} />
      <HeroBanner
        alt={heroimages[0].node.title}
        fluid={heroimages[0].node.fluid}
      />
      {services.map(({ node: service }) => {
        const comp = (
          <Expirence
            name={service.name}
            price={service.price}
            doesPriceGoUp={service.doesPriceGoUp}
          />
        )

        if (curCat != service.category) {
          curCat = service.category
          return (
            <>
              <Typography gutterBottom variant="h4" component="h2">
                {curCat}
              </Typography>
              {comp}
            </>
          )
        }

        return comp
      })}
    </Layout>
  )
}

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
    allContentfulAsset(filter: { description: { eq: "[experiences-page]" } }) {
      edges {
        node {
          id
          description
          title
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
