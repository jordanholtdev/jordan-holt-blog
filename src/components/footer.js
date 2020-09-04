import React from "react";

import styled from "styled-components"
import { Coffee } from "@styled-icons/fa-solid"

const List = styled.footer`
  margin-top: 2rem;
  margin-bottom: 1rem;
  opacity: 0.4;
  font-size: smaller;
  list-style: none;
`

const StyledCoffee = styled(Coffee)`
  color: ${props => props.theme.colors.orangePeel};
  height: 20px;
  :hover{
    opacity: 0.75;
  }
`

const Footer = () => {
    return (
      <footer>
        <List>
          <li>
            <a href={"https://www.buymeacoffee.com/jordanholtdev"}>
              Buy me a coffee
              <br />
              <StyledCoffee />
            </a>
          </li>
          <li>
            <a href="https://interactiveimmersive.io/blog/">
              Interactive Immersive
            </a>
          </li>
          <li>© {new Date().getFullYear()} Jordan Holt</li>
        </List>
      </footer>
    )
};


export default Footer

