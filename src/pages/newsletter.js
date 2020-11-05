import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../components/SEO/seo"
import Layout from "../components/layout"

import {
  Box,
  List,
  ListItem,
  ListIcon,
  Stack,
  Heading,
  Link as CharkaLink,
  Text,
  SimpleGrid,
} from "@chakra-ui/core"

import NewsletterLandingPageForm from "../components/Forms/newsletterPageForm"

const Newsletter = ({ data, location }) => {
  return (
    <>
      <Layout>
        <Seo
          title={"Newsletter"}
          description={
            "Subscribe to my newsletter to recieve the latest tips, techniques and news about web development"
          }
          pathname={"/newsletter/"}
        />
        <Stack
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="3rem auto 4rem auto"
          maxWidth="700px"
        >
          <Stack isInline>
            <Box>
              <Heading as="h1" size="2xl">
                Email Newsletter
              </Heading>
              <Text py={4}>
                Every Friday, I send out an email with useful tips, techniques
                and resources on web development that I've come across.
              </Text>
            </Box>
            <Img
              fluid={data.logo.childCloudinaryAsset.fluid}
              style={{
                position: "relative",
                maxWidth: "200px",
                width: "400px",
                height: "100px",
              }}
            />
          </Stack>
          <SimpleGrid columns={1} spacingX="100px" mt={10}>
            <Box mb={4} borderWidth="1px" p={4} rounded="8px">
              <Heading as="h2" size="xl">
                Subscribe to the newsletter
              </Heading>
              <Text py={4}>
                Get emails from me about web development, coding, and early
                access to new articles.
              </Text>
              <NewsletterLandingPageForm />
            </Box>
            <Box mt={10}>
              <Text>
                My newsletter is curated, written and edited with love. Every
                week I send out useful resources and techniques about
                development. No third-party mailings, spam or hidden
                advertising. Here's what you can expect.
              </Text>
              <List styleType="none" mt={4} spacing={1}>
                <ListItem>
                  <ListIcon icon="check-circle" color="green.500" />
                  useful tips and techniques
                </ListItem>
                <ListItem>
                  <ListIcon icon="check-circle" color="green.500" />
                  Intriguing apps and services
                </ListItem>
                <ListItem>
                  <ListIcon icon="check-circle" color="green.500" />
                  SaaS and indie dev projects
                </ListItem>
                <ListItem>
                  <ListIcon icon="check-circle" color="green.500" />
                  Intersting things to read/listen/watch
                </ListItem>
              </List>
              <Text mt={20}>
                Follow me{" "}
                <CharkaLink href="https://twitter.com/jordanholtdev">
                  on Twitter
                </CharkaLink>{" "}
                to be notified about new issues. The Coderton is published by
                Jordan Holt.
              </Text>
            </Box>
          </SimpleGrid>
        </Stack>
      </Layout>
    </>
  )
}

export default Newsletter

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    logo: file(relativePath: { eq: "logo-the-coderton.png" }) {
      childCloudinaryAsset {
        fluid(maxWidth: 1200) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
