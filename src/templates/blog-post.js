import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Layout from "../components/layout"
import FeaturedImage from "../components/featuredImage"
import Sidebar from "../components/sidebar"
import PostGridWrapper from "../styles/postGridWrapper"
import Post from "../components/post"
import SEO from "../components/seo"

// styled components

const Article = styled.article`
  text-align: left;
  grid-column: 2 / span 12;
  width: 100%;
  grid-row: 2 / span 5;
  z-index: 999;
  padding: 1rem;
  background-color: ${props => props.theme.colors.babyPowder};

  @media ${props => props.theme.breakpoints.xSmallViewport} {
    grid-column: 3 / span 10;
    grid-row: 2 / span 5;
    width: 100%;
    padding: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.largeViewport} {
    grid-column: 4 / span 8;
    grid-row: 2 / span 5;
    z-index: 999;
    padding: 2rem;
    width: 100%;
  }
`

const Title = styled.h1`
  margin-bottom: 0;
  color: #424242;
  font-weight: 900;
  font-size: 3.2rem;
  @media screen and (min-width: 320px) {
    font-size: calc(3rem + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 3.6rem;
  }
`

const PostDescription = styled.h2`
  border: none;
  color: #797979;
  padding: 2rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  @media screen and (min-width: 320px) {
    font-size: 1.5rem;
    padding: 0;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`

const Date = styled.p`
  color: #8f8f8f;
  display: block;
  font-weight: 600;
  padding-bottom: 2rem;
`

const Hr = styled.hr`
  margin-bottom: 1rem;
`
const SidebarContainer = styled.div`
  grid-column: 3 / span 10;
  grid-row: 7 / span 1;
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    grid-row: auto;
    grid-column: 4 / span 8;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    grid-column: 6 / span 4;
    grid-row: 7 / span 1;
  }
`
const FooterNav = styled.nav`
  display: block;
`
const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 1.25rem;
`

const StyledButton = styled.div`
  padding: 0.5rem;
  border-radius: 3rem;
  background-color: ${props => props.theme.colors.orangePeel};
  color: ${props => props.theme.colors.babyPowder};
  :hover {
    opacity: 0.5;
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PostGridWrapper>
        <FeaturedImage
          image={post.frontmatter.featuredImage}
          alt={post.frontmatter.title}
        />
        <Article>
          <header>
            <Title>{post.frontmatter.title}</Title>
            <PostDescription>{post.frontmatter.description}</PostDescription>
            <Date>{post.frontmatter.date}</Date>
          </header>
          <Post>
            <MDXRenderer>{post.body}</MDXRenderer>
          </Post>
          <Hr />
          <FooterNav>
            <NavList>
              <ListItem>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    <StyledButton>← {previous.frontmatter.title}</StyledButton>
                  </Link>
                )}
              </ListItem>
              <ListItem>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    <StyledButton>{next.frontmatter.title} →</StyledButton>
                  </Link>
                )}
              </ListItem>
            </NavList>
          </FooterNav>
        </Article>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      </PostGridWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
        description
        tags
        featuredImage {
          childCloudinaryAsset {
            fixed(width: 1500) {
              ...CloudinaryAssetFixed
            }
          }
        }
      }
      fields {
        slug
      }
      body
      excerpt
    }
  }
`
