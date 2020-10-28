import React from "react"
import { Button, useColorMode } from "@chakra-ui/core"

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button size="sm" variant="outline" mr={2} onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  )
}

export default DarkModeToggle
