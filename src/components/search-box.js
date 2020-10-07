import React from "react"
import algoliasearch from "algoliasearch/lite"

import {
  PoweredBy,
  InstantSearch,
  SearchBox,
  Hits,
} from "react-instantsearch-dom"
import SearchResult from "./search-result"
import styled from "styled-components"

const StyledSearchBox = styled(SearchBox)`
  margin-top: 2rem;
`

const StyledPoweredBy = styled(PoweredBy)`
  color: ${props => props.theme.colors.tiffanyBlue};
`

const StyledHits = styled(Hits)`
  list-style: none;
`

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="Blog">
    <StyledSearchBox />
    <StyledPoweredBy />
    <StyledHits hitComponent={SearchResult} />
  </InstantSearch>
)

export default Search
