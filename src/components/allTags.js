import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import styled from "styled-components"

import TagButton from "../components/TagButton"

const TagWrapper = styled.div`
  float: none;
  display: inline;
  text-align: left;
`

const AllTags = tag => {
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
            <TagButton>{fieldValue}</TagButton>
          </Link>
        )
      })}
    </TagWrapper>
  )
}

export default AllTags
