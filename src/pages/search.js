import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import GridWrapper from "../styles/gridWrapper"
import Sidebar from "../components/sidebar"
import SearchBox from "../components/search-box"

const SearchPage = ({ data, location }) => {

    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <GridWrapper>
          <SearchBox />
          <Sidebar />
        </GridWrapper>
      </Layout>
    )
}

export default SearchPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`