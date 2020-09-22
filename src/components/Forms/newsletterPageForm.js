import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from "styled-components";


const StyledInput = styled.input`
width: 100%;
margin: 2rem 0;
padding: 0.8rem;
box-sizing: border-box;
box-shadow:  14px 14px 28px #d2d4d1, 
             -14px -14px 28px #ffffff;
:focus {
    outline-color: ${props => props.theme.colors.orangePeel};
}
`
const StyledSpan = styled.span`
    position: relative;
    display: block;
`

const StyledFromButton = styled.button`
  cursor: pointer;
  width: 1.2em;
  overflow: visible;
  position: absolute;
  font-size: 150%;
  z-index: 10;
  top: 50%;
  right: 0;
  border: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", sans-serif;
  transform: translate(-25%, -50%);
  background: rgba(255, 255, 255, 0);
  color: rgba(0, 0, 0, 0.9);
`


class NewsletterLandingPageForm extends React.Component {
    
    state = { email: "", result: null }

    handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(this.state.email)
        if (result.result === 'error') {
            alert(`Sorry ${result.msg}!`)
            this.setState({ email: ''})            
          } else {
            alert(`Thank you for subscribing ${this.state.email}!`)
            this.setState({ email: ''})
          }
        this.setState({ result: result });
      }
    
  render() {
      return (
        <div>
          <form name="subscribe" onSubmit={this.handleSubmit}>
              <StyledSpan>
                  <StyledFromButton>→</StyledFromButton>
            <StyledInput
              type="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="Enter your email address"
            />
            </StyledSpan>
          </form>
        </div>
      )
  }
}

export default NewsletterLandingPageForm;