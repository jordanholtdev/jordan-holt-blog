import React from "react"
import PropTypes from "prop-types"

import {
  Box,
  Button,
  Heading,
  Text,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/core"

// Components

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with ${tag}`

  return (
    <Layout>
      <Flex
        w="100%"
        flexDirection="column"
        // bg={bgColor[colorMode]}
        // color={primarytextColor[colorMode]}
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="blue.400" size="2xl">
          {tagHeader}
        </Heading>
        <Box>
          <List>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <ListItem as="article" key={slug}>
                  <Link to={slug}>
                    <header>
                      <Heading as="h2">{title}</Heading>
                      <Text>{node.frontmatter.date}</Text>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </Link>
                </ListItem>
              )
            })}
          </List>

          <Link to="/tags">
            <Button>All tags</Button>
          </Link>
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
