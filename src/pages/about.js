import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutGrid from "../styles/aboutGridWrapper"
import Img from "gatsby-image"

import Seo from "../components/seo"
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
  text-align: center;
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
          <BioText>Hey! I'm Jordan</BioText>
          <Img
            fluid={data.jordan.childImageSharp.fluid}
            style={{ position: "relative", maxWidth: "800px" }}
          />
        </ImageWrapper>
        <BioWrapper>
          <BioText>
            I spent a decade in music production and broadcast video, now I'm a
            web developer. Follow my journey and you might learn a trick or two.
          </BioText>
          <SubHeading>A litte bit more about me...</SubHeading>
          <BioText>
            <strong>I am in love with web development</strong> and I have a
            passion for using the latest technology to solve problems.
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
