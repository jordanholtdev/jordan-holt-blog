import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Layout from "../components/layout"
import PostGridWrapper from "../styles/postGridWrapper"
import Post from "../styles/post"
import SEO from "../components/seo"

// styled components

const Article = styled.article`
  text-align: left;
  display: block;
  position: relative;
  width: 100%;
`
const PostHeader = styled.header`
  border-bottom: 1px solid gray;
`

const Title = styled.h1`
  margin-bottom: 0;
  color: #424242;
  border: none;
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
  padding-bottom: 1rem;
`

const Hr = styled.hr`
  margin-bottom: 1rem;
`

const FooterNav = styled.div`
  display: block;
`
const ContentNav = styled.ul`
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
  background-color: ${props => props.theme.colors.lightAccents};
  color: ${props => props.theme.colors.lightShades};
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
        <Article>
          <PostHeader>
            <Title>{post.frontmatter.title}</Title>
            <PostDescription>{post.frontmatter.description}</PostDescription>
            <Date>{post.frontmatter.date}</Date>
          </PostHeader>
          <Post>
            <MDXRenderer>{post.body}</MDXRenderer>
          </Post>
          <Hr />
          <FooterNav>
            <ContentNav>
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
            </ContentNav>
          </FooterNav>
        </Article>
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
      }
      fields {
        slug
      }
      body
      excerpt
    }
  }
`
