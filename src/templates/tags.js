import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Components
import AllPostImg from "../components/allPostImg"
import GridWrapper from "../styles/gridWrapper"
import Sidebar from "../components/sidebar"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";

// component styles

const TagsTitle = styled.h1`
  color: #424242;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 3rem;
  text-decoration: none;
  border: 0;
  @media screen and (min-width: 320px) {
    font-size: calc(1.75rem + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 2.5rem;
  }
`
const ArticleContainer = styled.article`
  display: grid;
  grid-template-columns: 100%;
  gap: 1rem;
  text-align: left;
  border-block-end: 1px dotted black;
  background-color: #fefefe;
  padding: 1.5rem;
  :hover {
    border: 1px solid; 
    border-color: ${props => props.theme.colors.tiffanyBlue};
  }
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    grid-template-columns: 100%;
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    grid-template-columns: 1fr  3fr;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    grid-template-columns: 1fr  3fr;
  }
`
const StyledLink = styled(Link)`
  box-sizing: content-box;
  display: block;
  width: 100%;
  box-shadow: none;
`

const TagList = styled.ul`
  list-style: none;
  margin: 0;
`
const PostTitle = styled.h3`
  color: #424242;
  margin-top: 0;
  font-size: 2rem;
  font-weight: 900;
  @media screen and (min-width: 320px) {
    font-size: calc(1.75rem + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.5rem;
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
const AllButton = styled.button`
  border: none;
  padding: 0.50em;
  color: white;
  background-color: ${props => props.theme.colors.roseMadder};
  font-weight: 700;
  border-radius: 0.2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 0.2rem;
  :hover {
    color: white;
    cursor: pointer;
    opacity: 0.75;
    scale: 1.05;
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <TagsTitle>{tagHeader}</TagsTitle>
      <GridWrapper>
        <TagList>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <ArticleContainer>
                  <AllPostImg
                    image={node.frontmatter.featuredImage}
                    alt={title}
                  />
                  <StyledLink to={slug}>
                    <header>
                      <PostTitle>{title}</PostTitle>
                      <Date>{node.frontmatter.date}</Date>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </StyledLink>
                </ArticleContainer>
              </li>
            )
          })}
        </TagList>
        <Sidebar />
        <Link to="/tags">
          <AllButton>All tags</AllButton>
        </Link>
      </GridWrapper>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp{
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`