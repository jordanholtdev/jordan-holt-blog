import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`


html {
    scrollbar-width: thin;
}

body {
    background-color: ${props => props.theme.colors.babyPowder};
    margin: 0;
    padding: 0;
}

code {
    font-size: 100%;
}

a {
    color: inherit;
}

ul {
    list-style: none;
    margin: 0;
}

a:hover{
    text-decoration: none;
}
`

export default GlobalStyles
