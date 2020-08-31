import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"


const ImageWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
`

const AllPostImg = ({ image, alt }) => {
  if (!image) {
    return null
  }
  return (
    <ImageWrapper>
      <Img fluid={image.childImageSharp.fluid} alt={alt}/>
    </ImageWrapper>
  )
}

export default AllPostImg