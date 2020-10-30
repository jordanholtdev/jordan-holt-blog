import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import {
  Flex,
  Heading,
  Text,
  Tag,
  Box,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
} from "@chakra-ui/core"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Flex
      w="100%"
      flexDirection="column"
      // bg={bgColor[colorMode]}
      // color={primarytextColor[colorMode]}
      justifyContent="center"
      alignItems="center"
    >
      <Helmet title={title} />
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems={["center", "flex-start"]}
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Heading as="h1" mt="3rem" size="2xl">
          All Tags
        </Heading>
        <Text pb={4}>Explore all the topics on the site</Text>
        <SimpleGrid columns={[1, 2, 3, 4]} spacingY={6}>
          {group.map(tag => (
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <Flex
                p={2}
                borderWidth="1px"
                mr={[0, 4]}
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                rounded="8px"
              >
                <Stat p={0}>
                  <StatLabel>{tag.fieldValue}</StatLabel>
                  <StatNumber>{tag.totalCount}</StatNumber>
                </Stat>
              </Flex>
            </Link>
          ))}
        </SimpleGrid>
        <Flex
          align={["center", "left"]}
          my={4}
          py={4}
          direction="column"
          w="100%"
        >
          {group.map(tag => (
            <Box key={tag.fieldValue} mt={4}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <Tag
                  _hover={{ opacity: "0.5" }}
                  variantColor="gray"
                  variant="outline"
                >
                  {tag.fieldValue}
                </Tag>
              </Link>
            </Box>
          ))}
        </Flex>
      </Stack>
    </Flex>
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
