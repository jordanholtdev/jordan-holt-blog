import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutGrid from "../styles/aboutGridWrapper"
import Img from "gatsby-image"

import Seo from "../components/seo"
import SubscribeForm from "../components/Forms/subscribeForm"
import styled from "styled-components"

// component styles

const Title = styled.h1`
  color: ${props => props.theme.colors.darkText};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 900;
  @media screen and (min-width: 1200px) {
    font-size: ${props => props.theme.fontSizes.xlarge};
  }
`
const SubHeading = styled.h3`
  color: ${props => props.theme.colors.darkText};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.medium};
  @media ${props => props.theme.breakpoints.smallViewport} {
    margin-top: 2rem;
  }
`
const ImageWrapper = styled.div`
  grid-column: 2 / span 4;
  grid-row: 1 / span 2;
  @media ${props => props.theme.breakpoints.smallViewport} {
    grid-column: 2 / span 4;
    grid-row: 1 / span 2;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
  }
`

const BioWrapper = styled.div`
  grid-column: 2 / span 4;
  grid-row: 3 / span 2;
  margin-top: 2rem;
  @media ${props => props.theme.breakpoints.smallViewport} {
    grid-column: 1 / span 6;
  }
  @media ${props => props.theme.breakpoints.mediumViewport} {
    grid-column: 2 / span 4;
  }
`
const BioText = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.darkText};
`

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
      <Title>About</Title>
      <AboutGrid>
        <ImageWrapper>
          <h3>Hey I'm Jordan</h3>
          <Img
            fluid={data.jordan.childImageSharp.fluid}
            style={{ position: "relative", maxWidth: "800px" }}
          />
        </ImageWrapper>
        <BioWrapper>
          <BioText>
            <strong>
              I am a JavaScript enthusiast, digital creative and blogger.
            </strong>{" "}
            I started this blog because I wanted to share what I've learned
            about web development and help others reach their goals. That's why
            I write about the obstacles I've faced, the solutions I've found and
            the reason this whole site is open source. Since I started this
            blog, I've met some incredible people and have become part of an
            awesome community of talented developers. I'm looking to grow as a
            developer and share what I've learned.
          </BioText>
          <BioText>
            If you're interested in learning with me and levelling up your dev
            skills, then make sure to sign up to my monthly newletter{" "}
            <span role="img" aria-label="emoji">
              👇
            </span>
          </BioText>
          <SubscribeForm />
          <SubHeading>A litte bit more about me...</SubHeading>
          <BioText>
            <strong>
              I spent a decade in music production and broadcast video.
            </strong>{" "}
            now I'm a web developer. Follow my journey and you might learn a
            trick or two.
            <br />
            <strong>I have a passion for web development</strong> and I like
            using the latest technology to solve problems.
          </BioText>
          <SubHeading>This site is built using...</SubHeading>
          <BioText>
            <strong>Gatsby</strong> is the framework I used for this website.          
          </BioText>
          <BioText>
            All of the blog posts were written in Markdown. I choose{" "}
            <strong>MDX</strong>, so I can use <strong>React</strong> components
            in the posts.
          </BioText>
          <BioText>
            The styling was done using <strong>Styled Components</strong>.
          </BioText>
          <BioText>
            This site is built and hosted on <strong>Netlify</strong>.
          </BioText>
        </BioWrapper>
      </AboutGrid>
    </Layout>
  )
}

export default About 

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    jordan: file(relativePath: {eq: "about-page.jpg"}) {
      childImageSharp {
        fluid(
          quality: 100,
          maxWidth: 1200,
          ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    audio: file(relativePath: {eq: "audio-image.jpg"}) {
      childImageSharp {
        fluid(
          quality: 100,
          maxWidth: 1200,
          ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
