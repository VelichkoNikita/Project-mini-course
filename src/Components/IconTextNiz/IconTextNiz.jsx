import React from 'react';
import {StyledIconImg} from "./StyledIconImg";
import {Col, Row} from "../../CSS/settings/grid";

const IconTextNiz = (props) => {
    return (
        <Row className={props.indent}
             justify_content={props.justify_content}>
            <Col
                col={props.col}
                sm={11}
                p_r={"20px"}
                p_r_sm={"0px"}>
                <Row direction={props.direction}
                     text_align={props.text_align}
                     align_items={props.align_items}
                     align_content={props.align_content}
                     align_content_sm={"center"}>
                    <StyledIconImg
                        alt={"Картинка"}
                        src={props.img}
                        pb={20}/>
                    {props.text}
                </Row>
            </Col>
        </Row>
    )
}

export default IconTextNiz