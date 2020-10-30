import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import { Tag, Box, TagLabel } from "@chakra-ui/core"

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
    <Box my={6}>
      {data.allMdx.group.map(({ fieldValue }) => {
        return (
          <Link key={fieldValue} to={`/tags/${_.kebabCase(fieldValue)}/`}>
            <Tag
              size="md"
              m={2}
              variant="outline"
              variantColor="gray"
              _hover={{ opacity: "0.5" }}
            >
              <TagLabel>{fieldValue}</TagLabel>
            </Tag>
          </Link>
        )
      })}
    </Box>
  )
}

export default AllTags
