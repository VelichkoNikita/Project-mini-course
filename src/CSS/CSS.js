import styled, {createGlobalStyle} from 'styled-components';
import {set_margin, set_offset} from "./settings/settings";

export const Global = createGlobalStyle`
  body {
    margin: 30px;
    padding: 0;
    box-sizing: border-box;
    background-color: #FFFFFF;
    color: #262630;
  }
`;

export const AppWrapper = styled.div`
  grid-template-areas: 
    "Header Header"
    "Content1 Content2"
    "Footer Footer";
  display: grid;
  grid-gap: 10px;
  height: 100vh;
  grid-template-columns:  50% 50%; /* определяем количество, наименование и ширину столбцов в макете сетки */

  @media (max-width: 768px) {
    grid-template-areas: 
        "Header"
        "Content1"
        "Content2"
        "Footer";
    grid-template-columns: 100%;
  }
`

export const HeaderStyled = styled.div`
  grid-area: Header;
`;

export const BodyStyled1 = styled.div`
  grid-area: Content1;
`;

export const BodyStyled2 = styled.div`
  grid-area: Content2;
`;
export const BodyStyled12 = styled.div`
  grid-column: 1/3; //от 1й полоски до 3 по аналогии grid-row
  background: #ffff;
`;

export const FooterStyled = styled.div`
  grid-area: Footer;
  margin-top: 56px;
  margin-bottom: 25px;
`;


export const Button_Primary = styled.button`
  disabled: ${props => props.block ? props.block : null};
  background-color: #295E96;
  color: #ffff;
  border-radius: ${props => props.border_radius ? props.border_radius : "4px"};
  font-size: 20px;
  line-height: 1;
  transition: 0.2s;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.col};
  justify-content: ${props => props.justify_content};
  align-content: ${props => props.align_content};
  align-items: ${props => props.align_items};
  text-align: ${props => props.text_align};
  align-self: ${props => props.align_self};
  margin: ${props => set_offset(props.margin)};
  margin-top: ${props => set_margin(props.mt)};
  margin-bottom: ${props => set_margin(props.mb)};
  padding: ${props => set_offset(props.padding)};
  border: none;

  &:hover {
    background-color: #194573;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: 576px) {
    padding: 13px 15px;
    font-size: 16px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    padding: 13px 15px;
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 13px 15px;
    font-size: 18px;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    padding: 13px 15px;
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    padding: 13px 15px;
    font-size: 20px;
  }
`

export const ModalBase = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1;
`

export const CloseButton = styled.button`
  padding: 5px 0px;
  background: #FBFCFF;
  border: none;
  cursor: pointer;
`
export const HomeButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: rgba(56, 150, 149, 0.17);
  border-radius: 50px;
  display: flex;
  border: none;
  margin: ${props => set_offset(props.margin)};
  justify-content: ${props => props.justify_content};

  &:hover {
    background-color: #D5D6D8;
  }

  && svg {
    margin: auto;
  }
`
export const ScrollToTheTop = styled.button`
  position: fixed;
  bottom: 5%;
  right: 3%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: rgba(56, 150, 149, 0.17);
  border-radius: 50px;
  display: flex;
  border: none;
  justify-content: ${props => props.justify_content};

  &:hover {
    background-color: #D5D6D8;
  }

  && svg {
    margin: auto;
  }
`

export const ModalP = styled.p`
  margin: 0px;
`
export const SlideImg = styled.img`
  border-radius: 12px;
  width: 100%;
  max-width: 787px;
  src: ${props => props.src ? `${props.src}` : null};
`

export const HeaderNumber = styled.h4`
  color: #6BC2F2 !important;
  font-size: 30px;
  padding-right: 24px;
  margin: 0px !important;
`

export const ImgDownContent = styled.img`
  margin-bottom: 15px;
  src: ${props => props.src};
  @media (max-width: 576px) {
    width: 100%;
  }
  width: 100%;
`

export const Card = styled.div`
  background-color: #FBFCFF;
`

export const DivImg = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
`
