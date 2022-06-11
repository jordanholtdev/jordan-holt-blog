import React from "react"
import { Flex, useColorMode } from "@chakra-ui/react"

import Header from "../components/Header/header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()

  const bgColor = {
    light: "white",
    dark: "gray.900",
  }

  const primarytextColor = {
    light: "black",
    dark: "white",
  }

  return (
    <>
      <Header />
      <Flex
        as="main"
        spacing="1.5rem"
        p={[2, 0]}
        width="100%"
        justifyContent="center"
        flexDirection="column"
        color={primarytextColor[colorMode]}
        bg={bgColor[colorMode]}
      >
        {children}
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
