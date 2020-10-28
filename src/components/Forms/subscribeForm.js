import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import {
  Button,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
} from "@chakra-ui/core"

class SubscribeForm extends React.Component {
  state = { email: "", result: null, message: "" }

  handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    if (result.result === "error") {
      this.setState({ email: "", message: `${result.msg} 🤕` })
      // console.log(result)
      this.setState({ email: "" })
    } else {
      // alert(`Thank you for subscribing ${this.state.email}!`)
      this.setState({ email: "", message: "Thank you for subscribing 👍" })
    }
    this.setState({ result: result })
  }

  render() {
    return (
      <Box>
        <Heading as="h3">Subscribe:</Heading>
        <form name="subscribe" onSubmit={this.handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              id="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              aria-describedby="email-helper-text"
              placeholder="E-mail"
            />
            <FormErrorMessage>{this.state.message}</FormErrorMessage>
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
            <Button mt={4} variantColor="cyan" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    )
  }
}

export default SubscribeForm
