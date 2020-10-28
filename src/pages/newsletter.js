import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../components/seo"

import {
  Box,
  List,
  ListItem,
  Stack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/core"

import NewsletterLandingPageForm from "../components/Forms/newsletterPageForm"

const Newsletter = ({ data, location }) => {
  return (
    <>
      <Seo
        title={"Newsletter"}
        description={
          "Subscribe to my newsletter to recieve the latest tips, techniques and news about web development"
        }
      />
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <SimpleGrid columns={2} spacingX="10px" spacingY="2px" mt={20}>
          <Img
            fluid={data.logo.childCloudinaryAsset.fluid}
            style={{
              position: "relative",
              maxWidth: "200px",
              width: "400px",
              height: "100px",
            }}
          />
          <Stack>
            <Heading as="h1">Newsletter</Heading>
            <Box>
              <Text>
                Every Friday, I send out an email with tips, resources and that
                I've come across.
              </Text>
            </Box>
            <NewsletterLandingPageForm />
            <Box>
              <List styleType="disc">
                <ListItem>useful tips and techniques</ListItem>
                <ListItem>Intriguing apps and services</ListItem>
                <ListItem>Inspiring SaaS and indie dev projects</ListItem>
                <ListItem>Intersting things to read/listen/watch</ListItem>
              </List>
              <Text>
                Follow me{" "}
                <a href="https://twitter.com/jordanholtdev">on Twitter</a> to be
                notified about new issues. The Coderton is published by Jordan
                Holt.
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
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
