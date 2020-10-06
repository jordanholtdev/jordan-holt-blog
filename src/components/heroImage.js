import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeroImage = ({ image, children }) => {
  if (!image) {
    return null
  }
  return (
    <StyledBackground fluid={image.childCloudinaryAsset.fluid}>
      {children}
    </StyledBackground>
  )
}

export default HeroImage
