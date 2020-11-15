import "./src/themes/prismTheme.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "./src/components/MDXComponents"

const React = require("react")
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={MDXComponents}>{element}</MDXProvider>
)
