import styled from "styled-components"


const PostGridWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 0.5rem repeat(12, 1fr) 0.5rem;
  grid-template-rows: 15rem 5rem 5rem 5rem 5rem;
  gap: 0 0.5rem;

  @media ${props => props.theme.breakpoints.xSmallViewport} {
    height: 100%;
    display: grid;
    grid-template-columns: 1rem repeat(12, 1fr) 1rem;
    grid-template-rows: 15rem 5rem 5rem 5rem 5rem;
    gap: 0 0.5rem;
  }
  @media ${props => props.theme.breakpoints.smallViewport} {
    height: 100%;
    display: grid;
    grid-template-columns: 1rem repeat(12, 1fr) 1rem;
    grid-template-rows: 20rem 5rem 5rem 5rem 5rem;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(1rem, 5.7rem)) 1fr;
    grid-template-rows: 30rem 5rem 5rem 5rem 5rem;
    gap: 0 2rem;
  }
`

export default PostGridWrapper