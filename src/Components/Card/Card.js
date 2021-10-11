import React from 'react'
import {Col, Row} from "../../CSS/settings/grid";
import {Button_Primary, HeaderNumber} from "../../CSS/CSS";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <Col
            border_radius={"12px"}
            col={props.col}
            sm={props.sm}
            md={props.md}
            lg={props.lg}
            padding={props.padding}
            margin={props.margin}
            background={"#FBFCFF"}
            backgroundImg={props.backgroundImg}
            position={"center right"}
            shadow_col={"0px 4px 24px rgba(0, 0, 0, 0.12)"}
            background_size={"210px 160px"}
        >
            <Row align_items={"center"}>
                <HeaderNumber>0{props.index}</HeaderNumber>
                <h5 style={{margin: "0px"}}>{props.theme}</h5>
            </Row>
            <p>{props.descrip}</p>
            <Row justify="end">
                <Link
                    to={"Page" + props.index}>
                    <Button_Primary
                        disabled={props.block}
                        onClick={() => {
                            props.unblockSuccess(props.index === 2 ? null : props.index + 1)
                        }}>
                        Перейти
                    </Button_Primary>
                </Link>
            </Row>
        </Col>
    )
}

export default Card
