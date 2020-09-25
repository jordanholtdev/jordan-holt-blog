import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../components/seo"
import styled from "styled-components"

import NewsletterLandingPageForm from "../components/Forms/newsletterPageForm"


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2rem;
  justify-items: center;
  align-content: space-between;
  margin: 10rem auto;
  max-width: 50rem;
  width: 90%;
`

const SignupWrapper = styled.div`
    margin: 0 2%;
`

const CopyWrapper = styled.div`
    margin: 0 2%;
    @media ${props => props.theme.breakpoints.largeViewport} {
    grid-row-start: 2;
    grid-column-start: 2;  
    }
`
const StyledHeading = styled.h2`
    margin: 2rem auto;
    border: none;
    font-size: ${props => props.theme.fontSizes.medium};
    @media ${props => props.theme.breakpoints.largeViewport} {
        margin: 0 auto;
    }
`
const StyledDescription = styled.p`
    margin: 0;
    padding-bottom: 2rem;
    font-size: ${props => props.theme.fontSizes.small};
`

const StyledList = styled.ul`
    padding-bottom: 2rem;
    font-size: ${props => props.theme.fontSizes.small};
`
const StyledDetialText = styled.p`
    opacity: 0.7;
`

const Newsletter = ({ data, location }) => {

  return (
    <>
      <Seo
        title={"Newsletter"}
        description={
          "Subscribe to my newsletter to recieve the latest tips, techniques and news about web development"
        }
      />
      <Wrapper>
        <Img
          fluid={data.logo.childImageSharp.fluid}
          style={{
            position: "relative",
            maxWidth: "200px",
            width: "400px",
            height: "100px",
          }}
        />
        <SignupWrapper>
          <StyledHeading>
            A weekly newsletter helping you be productive, feel inspired and
            learn about web development.
          </StyledHeading>
          <NewsletterLandingPageForm />
          <StyledDescription>
            Every Friday, I send out an email with tips, tricks, resources and
            other cool things in the world of web development that I've come
            across. 
          </StyledDescription>
        </SignupWrapper>
        <CopyWrapper>
          <StyledList>
            <li>- useful tips and techniques</li>
            <li>- Intriguing apps and services</li>
            <li>- Inspiring SaaS and indie dev projects</li>
            <li>- Intersting things to read/listen/watch</li>
          </StyledList>
          <StyledDetialText>
            Follow me <a href="https://twitter.com/jordanholtdev">on Twitter</a>{" "}
            to be notified about new issues. The Coderton is published by Jordan
            Holt.
          </StyledDetialText>
        </CopyWrapper>
      </Wrapper>
    </>
  )
}


export default Newsletter;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    logo: file(relativePath: {eq: "logo-the-coderton.png"}) {
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