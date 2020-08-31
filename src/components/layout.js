import React from "react"
import styled from "styled-components"

import Header from "./header"

// layout componenet styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const ContentWrapper = styled.main`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-top: 0;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  )
}

export default Layout
