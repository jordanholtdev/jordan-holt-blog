import "prismjs/themes/prism-tomorrow.css"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "./src/components/MDXComponents"
import ColorModeScript from "@chakra-ui/gatsby-plugin"

const React = require("react")
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={MDXComponents}>{element}</MDXProvider>
)

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<ColorModeScript key="chakra-ui-no-flash" />])
}
