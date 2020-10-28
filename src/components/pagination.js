import React from "react"
import { Link } from "gatsby"

import { Button, Flex, Text } from "@chakra-ui/core"

const Pagination = ({ isFirst, isLast, prevPage, nextPage, currentPage }) => {
  return (
    <Flex w="100%" justifyContent="space-between">
      <Link to={prevPage}>
        <Button variant="solid" variantColor="blue" isDisabled={isFirst}>
          ← Prev 10
        </Button>
      </Link>
      <Text w="100%" textAlign="center" fontSize="xs" color="gray.500">
        Page {currentPage}
      </Text>
      <Link to={nextPage}>
        <Button variant="solid" variantColor="blue" isDisabled={isLast}>
          Next 10 →
        </Button>
      </Link>
    </Flex>
  )
}

export default Pagination
