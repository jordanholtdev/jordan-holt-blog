import React from "react"
import AllTags from "./allTags"

import { Flex, Text, List, ListItem } from "@chakra-ui/core"

const Footer = () => {
  return (
    <Flex align="center" my={4} py={4} direction="column">
      <Text fontWeight="500" my={2}>
        Browse all topics
      </Text>
      <AllTags />
      <List textAlign="center" spacing={4} color="gray.500">
        <ListItem>
          <a href={"https://www.buymeacoffee.com/jordanholtdev"}>
            Buy me a coffee
          </a>
        </ListItem>
        <ListItem>
          Friends of:{" "}
          <a href="https://interactiveimmersive.io/blog/">
            Interactive Immersive
          </a>
        </ListItem>
        <ListItem>© {new Date().getFullYear()} Jordan Holt</ListItem>
      </List>
    </Flex>
  )
}

export default Footer
