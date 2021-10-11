import styled, {css} from 'styled-components'

export const SpeedVideo = styled.button`
  Opacity: 70%;
  margin-left: 15px;
  Blend: Pass Through;
  border: none;
  background-color: #FBFCFF;

  &:hover {
    border: 1px solid;
    border-radius: 4px;
    padding: 3px;
    margin-right: 5px;
    width: 40px;
  }
;
  ${props => props.active && css`
    border: 1px solid;
    border-radius: 4px;
    padding: 3px;
    margin-right: 0px;
    width: 40px;
  `}
`
