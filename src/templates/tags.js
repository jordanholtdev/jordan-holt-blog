import React from "react"
import PropTypes from "prop-types"

import {
  Box,
  Button,
  Heading,
  Text,
  Tag,
  List,
  ListItem,
  Flex,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react"

// Components

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `Article${totalCount === 1 ? "" : "s"} tagged with `

  const readtimes = edges.map(({ node }) => {
    const { timeToRead } = node
    let sum = timeToRead
    return sum
  })

  let sumReadTime = 0
  for (let i = 0; i < readtimes.length; i++) {
    sumReadTime += readtimes[i]
  }

  return (
    <Layout>
      <Flex
        w="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Heading mt="3rem" as="h1" size="2xl">
            {tagHeader}{" "}
            <Text color="blue.400" as="span">
              {tag}
            </Text>
          </Heading>
          <Box py={4}>
            All articles that are tagged with{" "}
            <Tag size="sm" rounded="8px" variant="outline" colorScheme="cyan">
              {tag}
            </Tag>
          </Box>
          <Stack isInline maxW="60%" mb="3rem">
            <Stat>
              <StatLabel>Articles</StatLabel>
              <StatNumber>{totalCount}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Total Read Time</StatLabel>
              <StatNumber>{sumReadTime}min</StatNumber>
            </Stat>
          </Stack>
        </Box>
        <Box>
          <List spacing={4}>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <Link key={slug} to={slug}>
                  <ListItem
                    p={4}
                    _hover={{ borderColor: "gray.800" }}
                    mb={4}
                    as="article"
                    borderWidth="1px"
                    rounded="8px"
                  >
                    <header>
                      <Heading as="h2">{title}</Heading>
                      <Text color="gray.400">{node.frontmatter.date}</Text>
                    </header>
                    <Box>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Box>
                  </ListItem>
                </Link>
              )
            })}
          </List>

          <Box pt={4} textAlign="center">
            <Link to="/tags">
              <Button colorScheme="blue" variant="solid">
                All tags
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            timeToRead: PropTypes.number.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
