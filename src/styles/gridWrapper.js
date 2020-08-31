import styled from "styled-components"


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 900px 200px;
  column-gap: 100px;
  row-gap: 1em;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 576px) {
    max-width: 375px;
    display: block;
  }
  @media screen and (max-width: 768px) {
    max-width: 600px;
    display: block;
  }
  @media screen and (max-width: 1200px) {
    max-width: 800px;
    display: block;
  }
`

export default GridWrapper