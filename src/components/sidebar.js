import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import AllTags from "../components/allTags"
import styled from "styled-components"

// components
import Footer from "./footer";
import { TwitterSquare, GithubSquare } from "@styled-icons/fa-brands"
import { RssSquare } from "@styled-icons/fa-solid"

// component styles
const Wrapper = styled.aside`
  display: block;
  position: relative;
`
const Content = styled.div`
  padding: 20px;

  @media ${props => props.theme.breakpoints.largeViewport} {
    display: block;
    position: sticky;
    padding: 1rem 0 0 0;
  }
`
const AboutWrapper = styled.div`
  display:block;
`
const Text = styled.p`
  font-size: 15px;
  margin-top: 1em;
  text-align: left;

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`
const SocialWrapper = styled.div`
  display: block;
  @media screen and (min-width: 1200px) {
    margin-top: 3rem;
  }
`
const SocialIconWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    max-width: 50%;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    max-width: 100%;
  }
`
const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;

@media ${props => props.theme.breakpoints.largeViewport} {
  display: flex;
}
`
const TagWrapper = styled.div`
  @media ${props => props.theme.breakpoints.largeViewport} {
    margin-top: 3rem;
  }
`

const StyledTitles = styled.h1`
  color: #424242;
  margin-top: 0;
  ::after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: ${props => props.theme.colors.orangePeel};
    border-radius: 50%;
    margin-left: 5px;
  }
`

const StyledGithub = styled(GithubSquare)`
  color: ${props => props.theme.colors.tiffanyBlue};
  height: 40px;
  :hover{
    opacity: 0.75;
  }
`

const StyledTwitter = styled(TwitterSquare)`
  color: ${props => props.theme.colors.tiffanyBlue};
  height: 40px;
  :hover{
    opacity: 0.75;
  }
`
const StyledRss = styled(RssSquare)`
  color: ${props => props.theme.colors.tiffanyBlue};
  height: 40px;
  :hover{
    opacity: 0.75;
  }
`

const Sidebar = () => {

    const data = useStaticQuery(graphql`
        query {
            allMdx(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
                }
            }
            site {
                siteMetadata {
                    social {
                    github
                    twitter
                    }
                }
            }
        }
    `
    )
    return (
      <Wrapper>
        <Content>
          <AboutWrapper>
            <StyledTitles>About</StyledTitles>
            <Text>
              I write about JavaScript and web technology. I have a passion for
              technology, learning, and creating cool things. Welcome to my
              digital garden.{" "}
              <span role="img" aria-label="emoji">
                🌼
              </span>{" "}
            </Text>
          </AboutWrapper>
          <SocialWrapper>
            <StyledTitles>Follow</StyledTitles>
            <SocialIconWrap>
              <StyledUl>
                <li>
                  <a
                    href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
                  >
                    <StyledTwitter /> 
                  </a> 
                </li>
                <li>
                  <a
                    href={`https://github.com/${data.site.siteMetadata.social.github}`}
                  >
                    <StyledGithub /> 
                  </a> 
                </li>
                <li>
                  <Link to={`/rss.xml`}>
                    <StyledRss /> 
                  </Link> 
                </li>
              </StyledUl>
            </SocialIconWrap>
          </SocialWrapper>
          <TagWrapper>
            <StyledTitles>Tags</StyledTitles>
            <AllTags />
          </TagWrapper>
        </Content>
        <Footer />
      </Wrapper>
    )
}

export default Sidebar