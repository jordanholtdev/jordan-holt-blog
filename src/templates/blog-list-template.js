import React from "react"
import Pagination from "../components/pagination"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import {
  Tag,
  Flex,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorMode,
} from "@chakra-ui/react"

import Layout from "../components/layout"

import SEO from "../components/SEO/seo"

const AllPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/articles" : `/articles/${currentPage - 1}`
  const nextPage = `/articles/${currentPage + 1}`

  const posts = data.allMdx.edges
  const totalPosts = data.allMdx.totalCount

  const { colorMode } = useColorMode()

  const bgColor = {
    light: "white",
    dark: "gray.800",
  }
  const secondarytextColor = {
    light: "gray.900",
    dark: "gray.400",
  }
  return (
    <Layout>
      <SEO title={"Blog"} description={data.site.siteMetadata.description} />
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex w="100%" justifyContent="center" alignItems="center" mt="3rem">
          <Box>
            <Box pb={4}>
              <Heading as="h1" size="2xl">
                All Articles
              </Heading>
              <Text>All articles, sorted chronologically.</Text>
              <Stat mt={4}>
                <StatLabel>Total Articles</StatLabel>
                <StatNumber>{totalPosts}</StatNumber>
              </Stat>
            </Box>
            <List as="ol" styleType="none" spacing={4} textAlign="left">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <ListItem
                    as="li"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    mt={4}
                    p={4}
                    borderWidth="1px"
                    rounded="8px"
                    textTransform="uppercase"
                    key={node.fields.slug}
                    bg={bgColor[colorMode]}
                  >
                    <Link to={node.fields.slug}>
                      <Box>
                        <Heading as="h3" size="lg">
                          {title}
                        </Heading>
                        <Text fontSize="xs" py={2} fontWeight="600">
                          {node.frontmatter.date}
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          color={secondarytextColor[colorMode]}
                          fontWeight="400"
                          lineHeight="tight"
                          fontSize="1rem"
                          textTransform="capitalize"
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </Box>
                    </Link>

                    <Link to={`/tags/${kebabCase(node.frontmatter.tags)}`}>
                      <Tag
                        mt={2}
                        size="sm"
                        colorScheme="cyan"
                        variant="outline"
                      >
                        {" "}
                        {node.frontmatter.tags}
                      </Tag>
                    </Link>
                  </ListItem>
                )
              })}

              <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
              />
            </List>
          </Box>
        </Flex>
      </Stack>
    </Layout>
  )
}

export default AllPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            tags
            description
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    image: file(name: { eq: "home-page-banner" }) {
      childCloudinaryAsset {
        fluid(maxWidth: 1200) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
