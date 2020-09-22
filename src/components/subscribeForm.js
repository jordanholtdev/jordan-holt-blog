import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${props => props.theme.colors.darkText};
`

const StyledInput = styled.input`
width: 100%;
:focus {
    outline-color: ${props => props.theme.colors.orangePeel};
}
`

const StyledButton = styled.button`
  border: none;
  width: 100%;
  border-radius: 0.2rem;
  margin-top: 1em;
  padding: 0.25rem;
  color: ${props => props.theme.colors.babyPowder};
  background-color: ${props => props.theme.colors.roseMadder};
  font-weight: 700;
  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    padding: 0.25rem;
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    padding: 0.30rem;
  }
`



class SubscribeForm extends React.Component {
    
    state = { email: "", result: null, message: 'Subscribe to my newsletter!' }

    handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(this.state.email)
        if (result.result === 'error') {
            this.setState({ email: '', message: `${result.msg} 🤕`})
            console.log(result)
            this.setState({ email: '' })
          } else {
            // alert(`Thank you for subscribing ${this.state.email}!`)
            this.setState({ email: '', message: 'Thank you for subscribing 👍' })
          }
        this.setState({ result: result });
      }
    
  render() {
      return (
        <div>
          <StyledTitle>{this.state.message}</StyledTitle>
          <form name="subscribe" onSubmit={this.handleSubmit}>
            <StyledInput
              type="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="E-mail"
            />
            <StyledButton type="submit">Subscribe</StyledButton>
          </form>
        </div>
      )
  }
}

export default SubscribeForm;