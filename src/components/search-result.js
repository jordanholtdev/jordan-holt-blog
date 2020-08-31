import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"
import styled from "styled-components"


//  component styles

const PostLink = styled(Link)`
  list-style: none;
`
const ResultWrapper = styled.article`
  display: flex;
  box-sizing: content-box;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
  text-align: left;
  border: 1px dashed #00000065;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: ${props => props.theme.colors.babyPowder};
  padding: 1.5rem;
  :hover {
    border: 2px solid;
    border-color: ${props => props.theme.colors.tiffanyBlue};
  }
  @media screen and (min-width: 320px) {
    display: block;
  }
` 

const PostTitle = styled.h3`
  color: #424242;
  text-align: left;
  margin-top: 0;
  font-size: 2rem;
  font-weight: 900;
  @media screen and (min-width: 320px) {
    font-size: calc(1.75rem + 6 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 2rem;
  }
`

const ContentSection = styled.section`
  text-align: left;
`

const Text = styled.p`
  padding-right: 0.80rem;
`

const SearchResult = ({ hit }) => {
  return (
    <ResultWrapper key={hit.slug}>
      <PostLink to={hit.slug}>
        <header>
          <PostTitle><Highlight attribute="title" hit={hit} tagName="mark" /></PostTitle>         
        </header>
        <ContentSection>
          <Text>
            <Highlight attribute="description" hit={hit} tagName="mark" />
          </Text>
        </ContentSection>
      </PostLink>
    </ResultWrapper>
  )
}


export default SearchResult