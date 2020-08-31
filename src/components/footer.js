import React from "react";

import styled from "styled-components"

const List = styled.footer`
  margin-top: 2rem;
  margin-bottom: 1rem;
  opacity: 0.4;
  font-size: smaller;
  list-style: none;
`

const Footer = () => {
    return (
        <footer>
            <List>               
                <li><a href="https://interactiveimmersive.io/blog/">Interactive Immersive</a></li>
                <li>© {new Date().getFullYear()} Jordan Holt</li>
            </List>
        </footer>
    )
};


export default Footer

