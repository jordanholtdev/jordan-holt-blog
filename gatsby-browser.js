import "prismjs/themes/prism-tomorrow.css"

import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import GlobalStyles from "./src/themes/globalStyle"

const React = require("react")
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
