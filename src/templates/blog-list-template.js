import React from "react"
import Pagination from "../components/pagination"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import GridWrapper from "../styles/gridWrapper"
import SingleArticleWrapper from "../styles/singleArticleWrapper"
import Sidebar from "../components/sidebar"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledHero = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 3rem 0 3rem 0;
`
const StyledHeroDiv = styled.div`
  display: block;
  position: relative;
  width: 375px;
  box-shadow: 12px 12px 34px #dce1de, -12px -12px 34px #ffffff;
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    width: 600px;
  }
  @media ${props => props.theme.breakpoints.mediumViewport} {
    width: 800px;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    width: 1200px;
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
  background-color: ${props => props.theme.colors.mainBrandColor};
  color: ${props => props.theme.colors.lightShades};
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
      <StyledHero>
        <StyledLink to="/newsletter/">
          <StyledHeroDiv>
            <Img
              fluid={data.image.childCloudinaryAsset.fluid}
              alt="Newsletter promotion banner"
            />
          </StyledHeroDiv>
        </StyledLink>
      </StyledHero>
      <GridWrapper>
        <ol>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <SingleArticleWrapper key={node.fields.slug}>
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
              </SingleArticleWrapper>
            )
          })}

          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </ol>
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
    image: file(name: { eq: "home-page-banner" }) {
      childCloudinaryAsset {
        fluid(maxWidth: 1200) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
