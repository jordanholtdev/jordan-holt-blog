import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO/seo"
import SearchBox from "../components/search-box"
import { Flex, Heading } from "@chakra-ui/react"

const SearchPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={"Search"}
        description={"Search for specific articles published on this site"}
        pathname={"/search/"}
      />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        m="3rem auto 4rem auto"
        maxWidth="700px"
      >
        <Heading as="h1" size="2xl" pb={4}>
          Search{" "}
        </Heading>
        <SearchBox />
      </Flex>
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
