import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import styled from "styled-components"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

// component styles
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  @media screen and (min-width: 320px) {
    font-size: calc(1.75rem + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 2.5rem;
  }
`
const TagButtons = styled.button`
  border: none;
  padding: 0.5em;
  color: ${props => props.theme.colors.lightShades};
  background-color: ${props => props.theme.colors.mainBrandColor};
  font-weight: 700;
  border-radius: 0.2rem;
  margin-top: 0.35rem;
  margin-left: 0.2rem;
  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
`
const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div>
      <Helmet title={title} />
      <div>
        <Title>All Tags</Title>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <TagButtons>
                  {tag.fieldValue} ({tag.totalCount})
                </TagButtons>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
