import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HeroImage from "../components/heroImage"

const Wrapper = styled.div`
  position: relative;
  margin: 1rem 1rem;
  @media ${props => props.theme.breakpoints.mediumViewport} {
    margin: 3rem;
  }
`

const FeaturedContent = styled.div`
  display: flex;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  align-items: center;
  overflow: hidden;
`
const FeaturedText = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 1rem 1rem;
  color: ${props => props.theme.colors.babyPowder};
  @media ${props => props.theme.breakpoints.mediumViewport} {
    max-width: 100%;
    padding: 1rem 2rem;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    max-width: 800px;
    padding: 2rem 4rem;
  }
`
const PostTitle = styled.h1`
  margin-top: 0.5rem;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 800;
  border: none;
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    font-size: ${props => props.theme.fontSizes.medium};
    margin-bottom: 0.5rem;
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    font-size: ${props => props.theme.fontSizes.xlarge}    
  }
  @media ${props => props.theme.breakpoints.mediumViewport} {
    font-size: ${props => props.theme.fontSizes.xlarge} 
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    font-size: ${props => props.theme.fontSizes.xlarge} 
  }
`
const FeaturedTag = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  color: ${props => props.theme.colors.orangePeel};
  margin: 0;
`
const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    font-size: ${props => props.theme.fontSizes.small};
    margin-bottom: 0;
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    font-size: ${props => props.theme.fontSizes.medium};
    margin-bottom: 1rem;
  }
  @media ${props => props.theme.breakpoints.mediumViewport} {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`
const ReadBtn = styled.button`
  border: none;
  color: ${props => props.theme.colors.babyPowder};
  background-color: ${props => props.theme.colors.roseMadder};
  font-weight: 700;
  border-radius: 0.2rem;
  padding: 0.5rem;
  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    padding: 0.5rem;
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    padding: 0.75rem;
  }
`

const Hero = ({ data }) => {

const title = data.allMdx.edges[0].node.frontmatter.title;
const description = data.allMdx.edges[0].node.frontmatter.description;
const date = data.allMdx.edges[0].node.frontmatter.date;
const slug = data.allMdx.edges[0].node.frontmatter.slug;

return (
  <Wrapper>
    <HeroImage image={data.allMdx.edges[0].node.frontmatter.featuredImage}>
      <FeaturedContent>
        <FeaturedText>
          <FeaturedTag>Featured</FeaturedTag>
          <PostTitle>{title}</PostTitle>
          <Description>{description}</Description>
          <p>{date}</p>
          <Link to={`/${slug}`}>
            <ReadBtn>
              Read Now
            </ReadBtn>
          </Link>
        </FeaturedText>
      </FeaturedContent>
    </HeroImage>
  </Wrapper>
)
}

const StyledHero = styled(Hero)`
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
`
export default StyledHero 
