import React from 'react'
import {Row} from "../CSS/settings/grid";

const Text = (props) => {

    return (
        <Row
            className={props.indent}
            col={props.col}
            col_sm={props.col_sm}
            justify_content={props.justify_content}>
            {props.text}
        </Row>
    )
}

export default Text