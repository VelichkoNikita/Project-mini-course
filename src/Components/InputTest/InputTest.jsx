import React, {useState} from 'react'
import Inputtest from './input'
import s from './inputTestCss.module.css'
import {v4 as uuidv4} from 'uuid';
import {Col, Row} from "../../CSS/settings/grid";


const InputTest = (props) => {

    const [offset, setOffset] = useState(1)
    const [statetext, setStatetext] = useState(() => {
            if (props.text == null) {
                setOffset(0)
                return (<></>)
            } else {
                setOffset(1)
                return (
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    </Col>
                )
            }
        }
    )

    return (
        <>
            <Col className={props.indent} sm={12}>
                <Row justify_content_sm={"start"}>
                    {props.text}
                </Row>
                <Row justify={props.position}>
                    {props.inputList.map((b, index) => {
                        return (
                            <Col key={uuidv4()} sm={12} md={12} lg={b.length} xl={b.length}>
                                <div className={s.body}>
                                    <Inputtest inputList={b}/>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </>
    )
}

export default InputTest