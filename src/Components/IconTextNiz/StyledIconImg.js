import styled from "styled-components"

export const StyledIconImg = styled.img`
  alt: ${props => props.alt ? `${props.alt}` : 'Картинка'};
  src: ${props => props.src ? `${props.src}` : null};
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  padding-bottom: ${props => props.pb ? `${props.pb}px` : 'auto'};
`