import React from "react"
import styled from "styled-components"

const StyledTagButton = styled.button`
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

const TagButton = ({ children }) => {
  return <StyledTagButton>{children}</StyledTagButton>
}

export default TagButton
