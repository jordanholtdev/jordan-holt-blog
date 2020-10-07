import styled from "styled-components"

const SingleArticleWrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  gap: 0.5rem 1.5rem;
  text-align: left;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 12px 12px 34px #dce1de, -12px -12px 34px #ffffff;
  overflow: hidden;
  ::before {
    position: relative;
    display: block;
    margin: 0px -35px;
    width: 125%;
    height: 15px;
    top: -35px;
    content: "";
    background: linear-gradient(
      0.25turn,
      var(--title-gradient-from, #223043),
      var(--title-gradient-to, #223043)
    );
  }
  :hover {
    transition: all 300ms ease 0s;
    opacity: 0.75;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    ::before {
      position: relative;
      display: block;
      margin: 0px -35px;
      width: 110%;
      height: 15px;
      top: -35px;
      content: "";
      background: linear-gradient(
        0.25turn,
        var(--title-gradient-from, #223043),
        var(--title-gradient-to, #223043)
      );
    }
  }
`

export default SingleArticleWrapper
