import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

// component styles
const Container = styled.header`
  background: ${props => props.theme.colors.darkShades};
  display: block;
  height: 100%;
  position: relative;
  padding: 1rem;
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    justify-content: space-between;
    padding: 1rem;
  }
  @media ${props => props.theme.breakpoints.mediumViewport} {
    padding: 1rem 3rem 1rem 3rem;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    padding: 1rem;
  }
`
const Nav = styled.nav`
  display: block;
  align-items: center;
  margin: 0 auto;
  width: 1200px;
  max-width: 100%;
  @media ${props => props.theme.breakpoints.smallViewport} {
    display: flex;
    justify-content: space-between;
  }
`

const Title = styled.h4`
  color: ${props => props.theme.colors.lightShades};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 800;
  margin: 0;
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    font-size: ${props => props.theme.fontSizes.medium};
    margin-left: auto;
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    margin: 0;
  }
`

const List = styled.ul`
  color: ${props => props.theme.colors.lightShades};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  @media ${props => props.theme.breakpoints.xSmallViewport} {
    display: inline;
    font-size: ${props => props.theme.fontSizes.small};
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    display: block;
    font-size: ${props => props.theme.fontSizes.small};
  }
  @media ${props => props.theme.breakpoints.mediumViewport} {
    display: block;
    font-size: ${props => props.theme.fontSizes.small};
  }
`
const ListItem = styled.li`
  display: inline-block;
  margin: 0.5rem 1rem 0 1rem;
`
const StyledLink = styled(Link)`
  text-transform: uppercase;
  :hover {
    opacity: 0.5;
  }
  :active {
    color: ${props => props.theme.colors.roseMadder};
    opacity: 1;
  }
`

const ListLink = props => (
  <ListItem>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </ListItem>
)

const Header = () => {
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
    <Container>
      <Nav>
        <Title>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Title>
        <List>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/search/">Search</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/newsletter/">Newsletter</ListLink>
        </List>
      </Nav>
    </Container>
  )
}

export default Header
