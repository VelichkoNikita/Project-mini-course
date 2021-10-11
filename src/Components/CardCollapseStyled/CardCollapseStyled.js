import React, {useState} from "react";
import {ImgDownContent} from "./ImgDownContent";
import {Col, Row} from "../../CSS/settings/grid";
import {Button_Primary} from "../../CSS/CSS";

const CardCollapseStyled2 = (props, index) => {
    const [clicked, setClicked] = useState(false);
    const Toggle = (index) => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }
        setClicked(index);
    };

    return (
        <Row justify_content={props.justify_content}
             className={props.indent}>
            <Col mr={props.mr}
                 margin={props.marginRow}
                 border_radius={props.border_radius}
                 shadow_col={props.noShadowprops ? null : " 0px 4px 24px rgb(0 0 0 / 12%)"}
                 col={props.col}
                 sm={11}
                 padding_sm={3}
                 padding={props.padding}
                 background={props.background}
                 justify_content={props.justify_content}>

                {props.img ?
                    <Row className="mb_2"
                         style={{alignItems: "center"}}>
                        <Col sm={6} md={6} lg={2} xl={props.xl1}
                             style={{paddingRight: '20px'}}>
                            <img
                                alt={"Картинка"}
                                effect="blur"
                                src={props.img} // use normal <img> attributes as props
                                width={"100%"}
                            />
                        </Col>
                        <Col xs={20} sm={10} md={10} lg={10}
                             xl={props.xl2}
                             pt_xl={"10px"}
                        >
                            <>{props.title}</>
                        </Col>
                    </Row>
                    :
                    <Row
                        style={{alignItems: "flex-start"}}>
                        <Col xs={20} sm={10} md={10} lg={10}
                             xl={10}>
                            {props.title}/
                        </Col>
                    </Row>
                }
                {props.text}
                <>
                    {props.button &&
                    <>
                        {clicked === index ? (
                            <div>
                                {props.dropdown}
                                <ImgDownContent src={props.downContent}/>
                            </div>
                        ) : null}
                        <Button_Primary
                            margin={0}
                            onClick={() => {
                                Toggle(index)
                            }}>
                            {clicked === index ? (
                                "Скрыть"
                            ) : "Открыть"}
                        </Button_Primary>
                    </>
                    }
                </>
            </Col>
        </Row>
    )
}

export default CardCollapseStyled2
