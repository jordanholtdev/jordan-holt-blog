import React from "react"
import styled from "styled-components"


const PostWrapper = styled.main`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-top: 0.25rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #424242;
    border-bottom: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 3rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 2.5rem;
    font-weight: 900;
  }

  h2 {
    font-size: 2.75rem;
    line-height: 2.75rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2.25rem;
    line-height: 1.85rem;
    font-weight: 700;
  }

  h4 {
    font-size: 2rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h5 {
    font-size: 1.75rem;
    line-height: 1.125rem;
    font-weight: 600;
  }

  h6 {
    font-size: 1.50rem;
    line-height: 1rem;
    font-weight: 600;
  }

  a {
    text-decoration: underline;
    color: #007faa;
  }

  p {
      margin-top: 2rem;
      font-size: ${props => props.theme.fontSizes.small};
      line-height: 1.875rem;
      font-weight: 400;
  }

  strong {
      font-weight: 700;
  }

  blockquote p {
      font-style: italic;
      font-size: 1.5rem;
      line-height: 2.25rem;
      text-align: left;
      max-width: 48rem;
      margin: 3rem auto;
  }

  ul,
  ol {
      margin: 1rem 0 1rem 2rem;
      font-size: 1.20rem;
  }

  ul {
      list-style: disc;
  }

  li {
      margin: 0.25rem 0;
  }

  table {
      width: 100%;
      border-spacing: 0.25rem;
      border-collapse: collapse;
      font-size: 1.15rem;
      line-height: 1.5rem;
      font-weight: 500;
  }

  table,
  th,
  td {
      border: 1px solid black;
  }

  th,
  td {
      padding: 0.5rem;
  }

  th {
      font-weight: 700;
  }

  pre {
    margin: 1.25rem 0;
  }

/* inline code styling */
.language-text {
  color: ${props => props.theme.colors.darkText};
  background-color: #eeeeff;
}

`
const Post = ({ children }) => {
    return (
        <PostWrapper>{children}</PostWrapper>
    )
}


export default Post