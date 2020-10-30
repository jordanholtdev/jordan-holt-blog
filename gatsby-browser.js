import "./src/themes/prismTheme.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "./src/components/MDXComponents"

import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
  theme,
} from "@chakra-ui/core"

const React = require("react")
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={MDXComponents}>
      <CSSReset />
      <ColorModeProvider>{element}</ColorModeProvider>
    </MDXProvider>
  </ThemeProvider>
)
