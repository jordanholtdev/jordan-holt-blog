import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  Flex,
  Box,
  Tag,
  TagIcon,
  TagLabel,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

// styled components

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          as="article"
          mt="2rem"
        >
          <Flex>
            <Stack spacing={4}>
              <Heading as="h1" size="2xl">
                {post.frontmatter.title}
              </Heading>
              <Text>{post.frontmatter.description}</Text>
              <Text>{post.frontmatter.date}</Text>
              <Box>
                <Tag size="sm" variantColor="cyan" variant="outline">
                  {post.frontmatter.tags}
                </Tag>
                <Tag ml={2} size="sm" variantColor="gray" variant="outline">
                  <TagLabel>{post.timeToRead} min</TagLabel>
                  <TagIcon icon="time" />
                </Tag>
              </Box>
            </Stack>
          </Flex>
          <Flex flexDirection="column" maxW="700px" mt={6}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </Flex>
          <Box mt="2rem">
            <Stack isInline w="100%" justifyContent="space-between">
              <Box>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    <Button variantColor="green" variant="outline">
                      ← {previous.frontmatter.title}
                    </Button>
                  </Link>
                )}
              </Box>
              <Box>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    <Button variantColor="green" variant="outline">
                      {next.frontmatter.title} →
                    </Button>
                  </Link>
                )}
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
        description
        tags
      }
      fields {
        slug
      }
      body
      excerpt
      timeToRead
    }
  }
`
