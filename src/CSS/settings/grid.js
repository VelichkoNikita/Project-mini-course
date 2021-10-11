import styled, {css} from 'styled-components'
import {set_column_size, set_offset, return_to_default} from './settings'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: ${props => props.hint && "1px solid #be09e4"};
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.col ? set_column_size(props.col) : `100%`};
  justify-content: ${props => props.justify_content};
  align-content: ${props => props.align_content};
  align-items: ${props => props.align_items};
  text-align: ${props => props.text_align};
  align-self: ${props => props.align_self};
  margin: ${props => set_offset(props.margin)};
  margin-top: ${props => set_offset(props.mt)};
  margin-bottom: ${props => set_offset(props.mb)};
  padding: ${props => set_offset(props.padding)};
  flex-direction: ${props => props.direction && 'column'};
  position: ${props => props.position};
  background-color: ${props => props.bgcolor};
  box-shadow: ${props => props.shadow};
  border-radius: ${props => props.border_radius};
  gap: ${props => props.gap};
  @media (max-width: 575.98px) {
    justify-content: ${props => props.justify_content_sm};
    align-content: ${props => props.align_content_sm};
    align-items: ${props => props.align_items_sm};
    text-align: ${props => props.text_align_sm};
    align-self: ${props => props.align_self_sm};
    padding: ${props => set_offset(props.padding_sm)};
    width: ${props => set_column_size(props.col_sm)};
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    justify-content: ${props => props.justify_content_md};
    align-content: ${props => props.align_content_md};
    align-items: ${props => props.align_items_md};;
    text-align: ${props => props.text_align_md};
    align-self: ${props => props.align_self_md};
    padding: ${props => set_offset(props.padding_md)};
    margin: ${props => set_offset(props.margin_md)};
    width: ${props => set_column_size(props.col_md)};
  }
  @media (min-width: 768px) and (max-width: 1199.98px) {
    justify-content: ${props => props.justify_content_lg};
    align-content: ${props => props.align_content_lg};
    align-items: ${props => props.align_items_lg};
    text-align: ${props => props.text_align_lg};
    align-self: ${props => props.align_self_lg};
    padding: ${props => set_offset(props.padding_lg)};
    margin: ${props => set_offset(props.margin_lg)};
  }
  @media (min-width: 1200px) {
    justify-content: ${props => props.justify_content_xl};
    align-content: ${props => props.align_content_xl};
    align-items: ${props => props.align_items_xl};;
    text-align: ${props => props.text_align_xl};
    align-self: ${props => props.align_self_xl};
    padding: ${props => set_offset(props.padding_xl)};
    margin: ${props => set_offset(props.margin_xl)};
  }
`
export const Col = styled.div`
  ${props => props.background && css`
    background-color: ${return_to_default(props.background, 'white')};
  `}
  ${props => props.border && css`
    border: ${return_to_default(props.border, '1px solid')};
  `}
  background-position: ${props => props.position};
  background-repeat: no-repeat;
  background-image: url(${props => props.backgroundImg});
  background-size: ${props => props.background_size};
  align-items: ${props => props.col_align_items};
  box-sizing: border-box;
  border: ${props => props.hint && "1px solid red"};
  border-radius: ${props => props.border_radius};
  flex-grow: ${props => props.grow == false ? 0 : 1};
  width: ${props => props.col ? set_column_size(props.col) : `100%`};
  height: ${props => props.height};
  min-height: ${props => props.min_height};
  max-width: ${props => props.max_width};
  align-self: ${props => props.align_self};
  text-align: ${props => props.text_align};
  margin: ${props => set_offset(props.margin)};
  margin-top: ${props => set_offset(props.mt)};
  margin-right: ${props => set_offset(props.mr)};
  box-shadow: ${props => props.shadow_col};
  margin-bottom: ${props => set_offset(props.mb)};
  padding: ${props => set_offset(props.padding)};
  padding-right: ${props => props.p_r};
  padding-left: ${props => set_offset(props.p_l)};
  padding-top: ${props => props.pt};;
  order: ${props => props.order ? props.order : 0};
  flex-basis: 0;
  flex: ${props => props.col && `0 0 ${set_column_size(props.col)}`};
  @media (max-width: 575.98px) {
    width: ${props => props.sm && set_column_size(props.sm)} ;
    order: ${props => props.order_sm};
    padding: ${props => set_offset(props.padding_sm)};
    margin-bottom: ${props => set_offset(props.mb_sm)};
    max-width: ${props => props.max_width_sm};
    flex: ${props => props.sm && `0 0 ${set_column_size(props.sm)}`};
    padding-right: ${props => props.p_r_sm};
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: ${props => props.md && `calc(100% / 12 * ${props.md} )`} ;
    order: ${props => props.order_md};
    padding: ${props => set_offset(props.padding_md)};
    margin-bottom: ${props => set_offset(props.mb_md)};
    max-width: ${props => props.max_width_md};
    flex: ${props => props.md && `0 0 ${set_column_size(props.md)}`};
  }
  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: ${props => props.lg && `calc(100% / 12 * ${props.lg} )`} ;
    order: ${props => props.order_lg};
    padding: ${props => set_offset(props.padding_lg)};
    margin-bottom: ${props => set_offset(props.mb_lg)};
    max-width: ${props => props.max_width_lg};
    flex: ${props => props.lg && `0 0 ${set_column_size(props.lg)}`};
  }
  @media (min-width: 1200px) {
    width: ${props => props.xl && `calc(100% / 12 * ${props.xl} )`} ;
    order: ${props => props.order_xl};
    padding: ${props => set_offset(props.padding_xl)};
    margin-bottom: ${props => set_offset(props.mb_xl)};
    max-width: ${props => props.max_width_xl};
    flex: ${props => props.xl && `0 0 ${set_column_size(props.xl)}`};
  }
`