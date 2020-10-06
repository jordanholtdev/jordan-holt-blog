import React from "react"
import Pagination from "../components/pagination"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import GridWrapper from "../styles/gridWrapper"
import Sidebar from "../components/sidebar"
import StyledHero from "../components/hero"
import AllPostImg from "../components/allPostImg"
import styled from "styled-components"
import SEO from "../components/seo"

const ArticleWrapper = styled.article`
  grid-template-columns: 100%;
  border-block-end: 1px dotted black;
  padding: 1rem;
  text-align: center;
  gap: 1rem;
  background-color: ${props => props.theme.colors.babyPowder};
  :hover {
    border: 1px solid;
    border-color: ${props => props.theme.colors.tiffanyBlue};
  }
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    gap: 0.5rem 1.5rem;
    text-align: left;
    padding: 1rem;
    border-block-end: 1px dotted black;
    overflow: hidden;
  }
`
const StyledLink = styled(Link)`
  box-sizing: content-box;
  display: block;
  box-shadow: none;
`

const Header = styled.header`
  box-sizing: content-box;
`
const PostTitle = styled.h3`
  color: ${props => props.theme.colors.darkText};
  margin-top: 0;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 900;
  @media screen and (min-width: 320px) {
    font-size: calc(1.75rem + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1200px) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`

const Date = styled.small`
  justify-content: right;
  font-size: 20px;
  font-weight: 300;
  @media screen and (min-width: 320px) {
    font-size: calc(15px + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1200px) {
    font-size: 19px;
  }
`

const TagWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    display: inline;
  }
`
const TagItem = styled.span`
  box-sizing: inherit;
`
const Tagbtn = styled.button`
  border: none;
  background-color: ${props => props.theme.colors.tiffanyBlue};
  color: ${props => props.theme.colors.babyPowder};
  font-weight: 700;
  border-radius: 0.2rem;
  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
`

const AllPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title={"Blog"} description={data.site.siteMetadata.description} />
      <StyledHero data={data} />
      <GridWrapper>
        <div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <ArticleWrapper key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <AllPostImg
                    image={node.frontmatter.featuredImage}
                    alt={title}
                  />
                </Link>
                <StyledLink to={node.fields.slug}>
                  <Header>
                    <PostTitle>{title}</PostTitle>
                    <Date>{node.frontmatter.date}</Date>
                  </Header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </StyledLink>
                <TagWrapper>
                  <TagItem>
                    <Link to={`/tags/${kebabCase(node.frontmatter.tags)}`}>
                      <Tagbtn> {node.frontmatter.tags}</Tagbtn>
                    </Link>
                  </TagItem>
                </TagWrapper>
              </ArticleWrapper>
            )
          })}

          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>
        <Sidebar />
      </GridWrapper>
    </Layout>
  )
}

export default AllPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            tags
            description
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childCloudinaryAsset {
                fluid {
                  ...CloudinaryAssetFluid
                }
                fixed {
                  ...CloudinaryAssetFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
