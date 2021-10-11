import React from 'react'
import {HeaderStyled} from "../CSS/CSS";
import ModalButton from "./ModalButton/ModalButton";
import ButtonHome from "./ButtonHome";
import {Col, Row} from "../CSS/settings/grid";

const Header = (props) => {

    return (
        <HeaderStyled>
            <Row>
                <Col>
                    <ModalButton margin={0}/>
                </Col>
                <Col>
                    <Row justify_content={"end"}>
                        <ButtonHome/>
                    </Row>
                </Col>
            </Row>
        </HeaderStyled>
    )
}

export default Header