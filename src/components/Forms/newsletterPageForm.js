import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/core"

class NewsletterLandingPageForm extends React.Component {
  state = { email: "", result: null }

  handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    if (result.result === "error") {
      alert(`Sorry ${result.msg}!`)
      this.setState({ email: "" })
    } else {
      alert(`Thank you for subscribing ${this.state.email}!`)
      this.setState({ email: "" })
    }
    this.setState({ result: result })
  }

  render() {
    return (
      <Box w="100%">
        <form name="subscribe" onSubmit={this.handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              id="email"
              isRequired
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              aria-describedby="email-helper-text"
              placeholder="E-mail"
            />
            <FormErrorMessage>{this.state.message}</FormErrorMessage>
            <Button mt={4} variantColor="cyan" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    )
  }
}

export default NewsletterLandingPageForm
