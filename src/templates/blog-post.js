import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import NewsletterLandingPageForm from "../components/Forms/newsletterPageForm"

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
import SEO from "../components/SEO/seo"

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
        pathname={post.fields.slug}
        postDate={post.frontmatter.date}
        isBlogPost
      />
      <Stack spacing={8} justifyContent="center" alignItems="flex-start">
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          as="article"
          maxW="100%"
          m="3rem auto 3rem auto"
        >
          <Flex maxW="100%" mb={6}>
            <Stack spacing={4} maxW="700px">
              <Heading as="h1" size="2xl">
                {post.frontmatter.title}
              </Heading>
              <Text fontWeight="700" lineHeight="tall">
                {post.frontmatter.description}
              </Text>
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
          <Flex direction="column" maxW="100%">
            <Box maxW="700px">
              <MDXRenderer>{post.body}</MDXRenderer>
            </Box>
          </Flex>
          <Box mt="2rem" w="100%">
            <Stack isInline w="100%" justifyContent="space-between">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <Button variantColor="green" variant="outline">
                    ← Previous
                  </Button>
                </Link>
              )}

              <Box>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    <Button variantColor="green" variant="outline">
                      Next →
                    </Button>
                  </Link>
                )}
              </Box>
            </Stack>
          </Box>
          <Flex
            justifyContent="center"
            alignItems="flex-start"
            maxW="700px"
            p={6}
            rounded="8px"
            borderWidth="1px"
            m="4rem auto 0 auto"
            flexDirection="column"
            id="newsletter"
          >
            <Heading size="lg" as="h5">
              Subscribe to the newsletter
            </Heading>
            <Text py={4}>
              Get emails from me about web development, tech, and early access
              to new articles.
            </Text>
            <NewsletterLandingPageForm />
          </Flex>
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
