import React from "react"
import AllTags from "./allTags"

import {
  Flex,
  Text,
  List,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex align="center" my={4} py={4} direction="column">
      <Text fontWeight="500" my={2} color="gray.400">
        Browse all topics
      </Text>
      <AllTags />
      <List textAlign="center" spacing={4} color="gray.400">
        <ListItem>
          <ChakraLink
            color="blue.400"
            href={"https://www.buymeacoffee.com/jordanholtdev"}
          >
            Buy me a coffee
          </ChakraLink>
        </ListItem>
        <ListItem>© {new Date().getFullYear()} Jordan Holt</ListItem>
      </List>
    </Flex>
  )
}

export default Footer
