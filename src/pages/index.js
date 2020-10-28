import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import NewsletterLandingPageForm from "../components/Forms/newsletterPageForm"

import {
  Flex,
  Stack,
  Box,
  Heading,
  Button,
  Text,
  SimpleGrid,
  Tag,
  TagIcon,
  TagLabel,
  useColorMode,
} from "@chakra-ui/core"

const HomePage = ({ data }) => {
  const posts = data.allMdx.edges
  const javascriptPosts = data.javascriptTags.edges
  const { colorMode } = useColorMode()

  const bgColor = {
    light: "white",
    dark: "gray.800",
  }
  const primarytextColor = {
    light: "black",
    dark: "white",
  }

  return (
    <Layout>
      <SEO title={"Blog"} description={"articles about web development"} />
      <Flex
        w="100%"
        h="50vh"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="700px" p={[2, 2, 0]}>
          <Heading as="h1" size="2xl">
            Get the latest articles in your inbox.
          </Heading>
          <Text>Every week I send out a newsletter</Text>
          <Button mt={4} variantColor="blue">
            Subscribe
          </Button>
        </Box>
      </Flex>

      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Box w="100%" pt={6}>
          <Heading>What's New</Heading>
          <Text>The latest articles</Text>
        </Box>
        <SimpleGrid
          columns={[1, 2]}
          spacing={10}
          justifyContent="space-between"
          alignItems="center"
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <Box
                key={node.frontmatter.slug}
                p={6}
                maxW="md"
                minH="200px"
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                bg={bgColor[colorMode]}
                justifyContent="center"
              >
                <Stack spacing={4}>
                  <Link to={node.fields.slug}>
                    <Heading size="lg">{title}</Heading>
                    <Text py={2} fontSize="sm" color="blue">
                      {node.frontmatter.description}
                    </Text>
                  </Link>
                  <Stack pt={2}>
                    <Text fontSize="md" color="blue">
                      {node.frontmatter.date}
                    </Text>
                    <Box>
                      <Tag size="sm" variantColor="gray" variant="outline">
                        <TagIcon icon="time" size="14px" />
                        <TagLabel>{node.timeToRead} min</TagLabel>
                      </Tag>
                    </Box>
                  </Stack>

                  <Link to={node.fields.slug}>
                    <Button size="md" variant="outline" variantColor="green">
                      Read More →
                    </Button>
                  </Link>
                </Stack>
              </Box>
            )
          })}
        </SimpleGrid>
        <Box w="100%" pt={6}>
          <Heading>Recent JavaScript</Heading>
          <Text>Discover the latest JavaScript articles</Text>
        </Box>
        <Box w="100%">
          {javascriptPosts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const description = node.frontmatter.description
            return (
              <Link key={node.fields.slug} to={node.fields.slug}>
                <Stack
                  isInline
                  bg={bgColor[colorMode]}
                  justifyContent="space-between"
                  p={4}
                  borderWidth="1px"
                  mb={6}
                >
                  <Stack w="80%">
                    <Heading as="h4" size="md">
                      {title}
                    </Heading>
                    <Text>{description}</Text>
                  </Stack>
                  <Box textAlign="center">
                    <Tag mt={4} variant="outline" variantColor="cyan" size="sm">
                      {" "}
                      {node.frontmatter.tags}
                    </Tag>
                    <Tag mt={2} size="sm" variantColor="gray" variant="outline">
                      <TagIcon icon="time" size="14px" />
                      <TagLabel>{node.timeToRead} min</TagLabel>
                    </Tag>
                  </Box>
                </Stack>
              </Link>
            )
          })}
        </Box>
      </Stack>
      <Flex
        justifyContent="center"
        alignItems="flex-start"
        maxW="700px"
        p={6}
        rounded="8px"
        borderWidth="1px"
        m="0 auto 4rem auto"
        flexDirection="column"
        bg={bgColor[colorMode]}
      >
        <Heading size="lg">Subscribe to the newsletter</Heading>
        <Text py={4}>
          Get emails from me about web development, tech, and early access to
          new articles.
        </Text>
        <NewsletterLandingPageForm />
      </Flex>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
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
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
    javascriptTags: allMdx(
      filter: { frontmatter: { tags: { eq: "JavaScript" } } }
      limit: 5
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            description
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`