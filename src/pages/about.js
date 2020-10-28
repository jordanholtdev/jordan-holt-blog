import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import { Box, Stack } from "@chakra-ui/core"

import Seo from "../components/seo"

// component styles

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

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
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Box>
          <h1>Hello!</h1>
          <Box>
            <h3>Hey, I'm Jordan</h3>
            <p>I am a web developer, digital creative and blogger.</p>

            <p>
              I'm a JavaScript enthusiast who is currently focusing on the
              Jamstack architecture. I'm a big fan of Gatsby and Next.js.{" "}
            </p>
          </Box>
          <Box>
            <h3>A little bit more about me...</h3>
            <p>
              I spent a decade in music production and broadcast video before I
              transitioned into web development. I travelled the world working
              on documentaries, feature films and broadcast television.
            </p>
            <p>
              I have a passion for music. I studied audio engineering and have
              been involved in many rewarding projects with talented artists and
              producers. I continue to produce my own music in my spare time.
            </p>
          </Box>
          <Box>
            <h3>Platforms I use</h3>
            <p>
              Here are some of the platforms I use. Feel free to connect with
              me.
            </p>
            <ul>
              <li>
                <a
                  href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
                >
                  Twitter
                </a>
                <br />
                You can find me here talking about tech and other things that
                interest me.
              </li>
              <li>
                <a
                  href={`https://github.com/${data.site.siteMetadata.social.github}`}
                >
                  GitHub
                </a>
                <br />
                This is where I host a lot of my code. Including the code for
                this site.
              </li>
              <li>
                <a href={`https://news.ycombinator.com/user?id=jordanholtdev`}>
                  Hacker News
                </a>
                <br />
                This is one where I explore new topics and look for feedback on
                projects I'm working on.
              </li>
              <li>
                <a href={`https://www.indiehackers.com/jordanholtdev`}>
                  Indie Hackers
                </a>
                <br />I just joined this community. It's a place where I connect
                and learn about indie software developement.
              </li>
              <li>
                <a href={`https://dev.to/jordanholtdev`}>Dev.to</a>
                <br />I repost all my articles on Dev.to and I connect with
                other developers here.
              </li>
            </ul>
          </Box>
          <Box>
            <h3>The Coderton</h3>
            <p>
              Every Friday, I send out an email with tips, tricks, resources and
              other cool things in the world of web development that I've come
              across.
            </p>
            <p>
              If you're interested in recieving this newsletter,{" "}
              <Link to="/newsletter/">you can sign up here.</Link>
            </p>
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
