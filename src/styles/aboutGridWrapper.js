import styled from "styled-components"

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(25px, auto);
  column-gap: 1rem;
  row-gap: 1rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media ${props => props.theme.breakpoints.smallViewport} {
    max-width: 600px;
  }

  @media ${props => props.theme.breakpoints.mediumViewport} {
    max-width: 600px;
  }

  @media ${props => props.theme.breakpoints.largeViewport} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(100px, auto);
    column-gap: 1rem;
    row-gap: 1rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`

export default AboutGrid