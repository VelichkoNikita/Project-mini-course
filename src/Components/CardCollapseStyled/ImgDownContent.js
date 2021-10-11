import styled from "styled-components"

export const ImgDownContent = styled.img`
  src: ${props => props.src};
  @media (max-width: 576px) {
    width: 100%;
  };
  width: 90%;
  margin-right: 100px;
`