import "prismjs/themes/prism-tomorrow.css"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "./src/components/MDXComponents"

const React = require("react")
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={MDXComponents}>{element}</MDXProvider>
)
