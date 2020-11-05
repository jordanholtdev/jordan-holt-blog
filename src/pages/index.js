import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO/seo"
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
  const secondarytextColor = {
    light: "gray.900",
    dark: "gray.400",
  }

  return (
    <Layout>
      <SEO
        title={"Jordan | Holt - JavaScript, Web Development, and Technology"}
        description={
          "Join thousands of other people who have read my articles spanning coding, technology, and web development"
        }
      />
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
            Get the latest newsletter in your inbox.
          </Heading>
          <Text mt={4}>
            {" "}
            Every Friday, I send out an email with useful tips, techniques and
            resources on web development that I've come across.
          </Text>
          <Link to={"/newsletter"}>
            <Button mt={4} variantColor="blue">
              Subscribe
            </Button>
          </Link>
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
          <Heading as="h2">What's New</Heading>
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
                minH={["200px", "350px"]}
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                bg={bgColor[colorMode]}
                justifyContent="center"
              >
                <Stack spacing={4}>
                  <Link to={node.fields.slug}>
                    <Heading size="lg" as="h3">
                      {title}
                    </Heading>
                    <Text
                      py={2}
                      fontSize="sm"
                      color={secondarytextColor[colorMode]}
                    >
                      {node.frontmatter.description}
                    </Text>
                  </Link>
                  <Stack pt={2}>
                    <Text fontSize="md" color="blue">
                      {node.frontmatter.date}
                    </Text>
                    <Box>
                      <Tag size="sm" color="gray.500" variant="ghost" pl={0}>
                        <TagIcon icon="time" size="14px" />
                        <TagLabel>{node.timeToRead} min</TagLabel>
                      </Tag>
                    </Box>
                  </Stack>

                  <Link to={node.fields.slug}>
                    <Button
                      pl={0}
                      size="md"
                      variant="ghost"
                      variantColor="green"
                    >
                      Read More →
                    </Button>
                  </Link>
                </Stack>
              </Box>
            )
          })}
        </SimpleGrid>
        <Box w="100%" pt={6}>
          <Heading as="h4">Recent JavaScript</Heading>
          <Text>Discover the latest JavaScript articles</Text>
        </Box>
        <Box w="100%" m="0 auto 4rem auto">
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
                    <Heading as="h5" size="md">
                      {title}
                    </Heading>
                    <Text color={secondarytextColor[colorMode]}>
                      {description}
                    </Text>
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
        id="newsletter"
      >
        <Heading size="lg" as="h5">
          Subscribe to the newsletter
        </Heading>
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
