import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  overflow: hidden;
  grid-column: 1 / span 15;
  grid-row: 1 / 4;
  margin-top: 1rem;

  @media ${props => props.theme.breakpoints.xSmallViewport} {
    grid-column: 2 / span 12;
  }
  @media ${props => props.theme.breakpoints.largeViewport} {
    grid-column: 3 / span 10;
    grid-row: 1 / 4;
    margin-top: 3rem;
  }
`

const FeaturedImage = ({ image, alt }) => {
  if (!image) {
    return null
  }
  return (
    <ImageWrapper>
      <Img
        fixed={image.childCloudinaryAsset.fixed}
        alt={alt}
        style={{
          postition: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
        }}
      />
    </ImageWrapper>
  )
}

export default FeaturedImage
