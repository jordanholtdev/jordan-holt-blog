import React from "react"
import { graphql } from "gatsby"
import NewsletterLandingPageForm from "../components/Forms/newsletterPageForm"
import Layout from "../components/layout"

import {
  Box,
  Stack,
  Link as ChakraLink,
  List,
  ListItem,
  Text,
  Heading,
  useColorMode,
} from "@chakra-ui/core"

import Seo from "../components/seo"

// component styles

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { colorMode } = useColorMode()

  const linkColor = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={"About Page"}
        description={
          "A little bit of information about the site and its creator."
        }
      />
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="3rem auto 4rem auto"
        maxWidth="700px"
      >
        <Box mb={4}>
          <Heading as="h1" size="2xl">
            About
          </Heading>
          <Box my={4}>
            <Text>
              Hey, I'm Jordan{" "}
              <span role="img" aria-label="hand waving">
                {" "}
                👋
              </span>
            </Text>
            <Text my={4}>
              I am a web developer, digital creative and blogger.
            </Text>

            <Text>
              I'm a JavaScript enthusiast who is currently focusing on the
              Jamstack architecture. I'm a big fan of Gatsby and Next.js.{" "}
            </Text>
          </Box>
          <Box pt={4}>
            <Heading as="h2" size="xl">
              Platforms I use
            </Heading>
            <Text my={4}>
              Here are some of the platforms I use. Feel free to connect with
              me.
            </Text>
            <List>
              <ListItem spacing={4}>
                <ChakraLink
                  color={linkColor[colorMode]}
                  href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
                >
                  Twitter -
                </ChakraLink>{" "}
                You can find me here talking about tech and other things that
                interest me.
              </ListItem>
              <ListItem>
                <ChakraLink
                  color={linkColor[colorMode]}
                  href={`https://github.com/${data.site.siteMetadata.social.github}`}
                >
                  GitHub -
                </ChakraLink>{" "}
                This is where I host a lot of my code. Including the code for
                this site.
              </ListItem>
              <ListItem>
                <ChakraLink
                  color={linkColor[colorMode]}
                  href={`https://news.ycombinator.com/user?id=jordanholtdev`}
                >
                  Hacker News -
                </ChakraLink>{" "}
                This is one where I explore new topics and areas of technology.
              </ListItem>
              <ListItem>
                <ChakraLink
                  color={linkColor[colorMode]}
                  href={`https://www.indiehackers.com/jordanholtdev`}
                >
                  Indie Hackers -
                </ChakraLink>{" "}
                I just joined this community. It's a place where I connect and
                learn about indie software developement.
              </ListItem>
              <ListItem>
                <ChakraLink
                  color={linkColor[colorMode]}
                  href={`https://dev.to/jordanholtdev`}
                >
                  Dev.to -
                </ChakraLink>{" "}
                I repost all my articles on Dev.to and I connect with other
                developers here.
              </ListItem>
            </List>
          </Box>
          <Box mt="3rem">
            <Box
              justifyContent="center"
              alignItems="flex-start"
              maxW="700px"
              p={6}
              rounded="8px"
              borderWidth="1px"
              m="3rem auto 4rem auto"
              flexDirection="column"
              id="newsletter"
            >
              <Heading as="h3" size="lg">
                Subscribe to the newsletter
              </Heading>
              <Text my={4}>
                Every Friday, I send out an email with tips, tricks, resources
                and other cool things in the world of web development that I've
                come across.
              </Text>
              <NewsletterLandingPageForm />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          github
          twitter
        }
      }
    }
    image: file(name: { eq: "twitter" }) {
      childCloudinaryAsset {
        fluid(transformations: ["ar_1:1", "c_thumb", "g_face"]) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
