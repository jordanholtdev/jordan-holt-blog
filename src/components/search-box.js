import React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"

import {
  Stack,
  Flex,
  Box,
  Input,
  FormControl,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react"

import {
  PoweredBy,
  connectSearchBox,
  InstantSearch,
  connectHits,
  Highlight,
} from "react-instantsearch-dom"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Hits = ({ hits }) => {
  return (
    <List>
      {hits.map(hit => (
        <ListItem mb={4} key={hit.slug} borderWidth="1px" p={4} rounded="8px">
          <Link to={hit.slug}>
            <Stack>
              <Heading size="lg">
                <Highlight attribute="title" hit={hit} tagName="mark" />
              </Heading>
              <Highlight attribute="description" hit={hit} tagName="mark" />
            </Stack>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

const CustomHits = connectHits(Hits)

const SearchBox = ({ currentRefinement, refine }) => {
  return (
    <form noValidate role="search">
      <FormControl w={["250px", "500px", "700px"]}>
        <Input
          w="100%"
          focusBorderColor="teal.400"
          placeholder="Search here..."
          type="search"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
      </FormControl>
    </form>
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)

const Search = () => (
  <Flex width="100%" flexDirection="column" justifyContent="start">
    <InstantSearch searchClient={searchClient} indexName="Blog">
      <Box mb={6}>
        <CustomSearchBox />
      </Box>
      <PoweredBy />
      <Flex my={6}>
        <CustomHits />
      </Flex>
    </InstantSearch>
  </Flex>
)

export default Search
