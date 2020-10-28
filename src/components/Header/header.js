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
} from "@chakra-ui/core"

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
      padding="1.5rem"
      bg={navBgColor[colorMode]}
    >
      <Flex align="center" mx={5}>
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
              variantColor="blue"
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
            <Box mx={5}>
              {" "}
              <Link to="/articles">
                <Button variant="outline" variantColor="blue" mr={2} size="sm">
                  Articles
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" variantColor="blue" mr={2} size="sm">
                  Home
                </Button>
              </Link>
              <Link to="/search/">
                <Button variant="outline" variantColor="blue" mr={2} size="sm">
                  Search
                </Button>
              </Link>
              <Link to="/about/">
                <Button variant="outline" variantColor="blue" mr={2} size="sm">
                  About
                </Button>
              </Link>
              <Link to="/newsletter/">
                <Button variant="outline" variantColor="blue" mr={2} size="sm">
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
