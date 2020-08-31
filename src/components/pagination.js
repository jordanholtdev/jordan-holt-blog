import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationWrapper = styled.div`
  display: flex;
  box-sizing: content-box;
  flex-direction: row;
  font-size: 1.15rem;
  font-weight: 700;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
  padding: 1rem;

    a:nth-child(1) {
        color: ${props => props.isFirst ? "black" : "#f4837d" };
        pointer-events: ${props => (props.isFirst ? "none" : "auto") };
        cursor: ${props => props.isFirst ? "default" : "pointer" };
        text-decoration: ${props => props.isFirst ? "line-through" : "none"};
        opacity: ${props => props.isFirst ? 0.5 : 1};
    };
    a:nth-child(3) {
        color: ${props => props.isLast ? "black" : "#f4837d" };
        pointer-events: ${props => (props.isLast ? "none" : "auto") };
        cursor: ${props => props.isLast ? "default" : "pointer" };
        text-decoration: ${props => props.isLast ? "line-through" : "none"};
        opacity: ${props => props.isLast ? 0.5 : 1};
    }
`
const StyledButton = styled.div`
  padding: 0.5rem;
  border-radius: 3rem;
  background-color: ${props => props.theme.colors.orangePeel};
  color: ${props => props.theme.colors.babyPowder};
  :hover{
    opacity: 0.5;
  }
`

const Pagination = ({ isFirst, isLast, prevPage, nextPage, currentPage }) => {

  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <Link to={prevPage}><StyledButton>← Prev 10</StyledButton></Link>
        <p>Page {currentPage}</p>
      <Link to={nextPage}><StyledButton>Next 10 →</StyledButton></Link>
    </PaginationWrapper>
  )
}

export default Pagination