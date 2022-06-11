import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import DarkModeToggle from "../darkmodeToggle"

import {
  Flex,
  Heading,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react"

const Header = () => {
  const { colorMode } = useColorMode()

  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-evenly"
      wrap="wrap"
      padding={["0.50rem", "1.5rem"]}
      bg={navBgColor[colorMode]}
    >
      <Flex align="center" mx={2}>
        <Heading as="h1" size="md">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Heading>
      </Flex>

      <Box>
        <Box>
          <Menu>
            <MenuButton
              mx={5}
              display={{ sm: "block", md: "none" }}
              as={Button}
              rightIcon="chevron-down"
              size="sm"
              variant="outline"
              colorScheme="blue"
            >
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/articles">Articles</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/search">Search</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/about">About</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/newsletter">Newsletter</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Box
            display={{
              xs: "none",

              md: "flex",
            }}
            width={{ sm: "100px", md: "auto" }}
            mt={{ base: 4, md: 0 }}
            alignItems="center"
            flexGrow={1}
          >
            <Box mx={[0, 1, 2, 2]}>
              {" "}
              <Link to="/articles">
                <Button variant="ghost" colorScheme="blue" mr={1} size="md">
                  Articles
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" colorScheme="blue" mr={1} size="md">
                  Home
                </Button>
              </Link>
              <Link to="/search/">
                <Button variant="ghost" colorScheme="blue" mr={1} size="md">
                  Search
                </Button>
              </Link>
              <Link to="/about/">
                <Button variant="ghost" colorScheme="blue" mr={1} size="md">
                  About
                </Button>
              </Link>
              <Link to="/newsletter/">
                <Button variant="ghost" colorScheme="blue" mr={1} size="md">
                  Newsletter
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <DarkModeToggle />
    </Flex>
  )
}

export default Header
