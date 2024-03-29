import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Alert,
  useColorMode,
  Divider,
  Heading,
  Code,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react"

const Table = props => (
  <Box overflowX="scroll" w="full">
    <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
  </Box>
)

const THead = props => {
  const { colorMode } = useColorMode()
  const bg = {
    light: "gray.50",
    dark: "whiteAlpha.100",
  }
  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  )
}

const TData = props => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const Quote = props => {
  const { colorMode } = useColorMode()
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  }

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      {...props}
    />
  )
}

const Hr = () => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  }

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />
}
const CustomLink = props => {
  const { colorMode } = useColorMode()
  const color = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  }

  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link to={href}>
        <ChakraLink
          as="span"
          color={color[colorMode]}
          isInternalLink
          {...props}
        />
      </Link>
    )
  }

  return <ChakraLink color={color[colorMode]} isExternal {...props} />
}

const DocsHeading = props => (
  <Heading
    css={{
      scrollMarginTop: "100px",
      scrollSnapMargin: "100px", // Safari
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: "outline",
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
)

const MDXComponents = {
  table: Table,
  th: THead,
  td: TData,
  blockquote: Quote,
  hr: Hr,
  a: CustomLink,
  h1: props => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: props => <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />,
  h3: props => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  br: props => <Box height="24px" {...props} />,
  inlineCode: props => (
    <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  ),
  p: props => <Text as="p" my={4} lineHeight="tall" {...props} />,
  ul: props => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: props => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: props => <Box as="li" pb={1} {...props} />,
}

export default MDXComponents
