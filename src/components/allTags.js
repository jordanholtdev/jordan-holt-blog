import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import styled from "styled-components"


const TagWrapper = styled.div`
  float: none;
  display: inline;
  text-align: left;
`
const TagButton = styled.button`
  border: none;
  padding: 0.50em;
  color: ${props => props.theme.colors.babyPowder};
  background-color: ${props => props.theme.colors.tiffanyBlue};
  font-weight: 700;
  border-radius: 0.2rem;
  margin-top: 0.35rem;
  margin-left: 0.2rem;
  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
`

const AllTags = ( tag ) => {
    const data = useStaticQuery(graphql`
      query MyQuery {
        allMdx {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `)

    return (
      <TagWrapper>
        {data.allMdx.group.map(({ fieldValue }) => {
          return (
            <Link key={fieldValue} to={`/tags/${_.kebabCase(fieldValue)}/`}>
              <TagButton>
                {fieldValue}
              </TagButton>
            </Link>
          )
        })}
      </TagWrapper>
    )
}

export default AllTags