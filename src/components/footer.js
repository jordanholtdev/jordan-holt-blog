import React from "react"

import styled from "styled-components"
import { Coffee } from "@styled-icons/fa-solid"

const StyledFooter = styled.footer`
  display: block;
  position: relative;
  background-color: ${props => props.theme.colors.darkShades};
`

const List = styled.footer`
  margin-top: 2rem;
  margin-bottom: 1rem;
  opacity: 0.4;
  color: ${props => props.theme.colors.lightShades};
  font-size: smaller;
  list-style: none;
`

const StyledCoffee = styled(Coffee)`
  color: ${props => props.theme.colors.lightAccents};
  height: 20px;
  :hover {
    opacity: 0.75;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <List>
        <li>
          <a href={"https://www.buymeacoffee.com/jordanholtdev"}>
            Buy me a coffee
            <br />
            <StyledCoffee />
          </a>
        </li>
        <li>
          Friends of:{" "}
          <a href="https://interactiveimmersive.io/blog/">
            Interactive Immersive
          </a>
        </li>
        <li>© {new Date().getFullYear()} Jordan Holt</li>
      </List>
    </StyledFooter>
  )
}

export default Footer
