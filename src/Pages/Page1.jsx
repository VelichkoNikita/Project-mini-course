import React from 'react'
import Footer from "../Components/Footer";
import SliderImg from "../Components/SliderImg/SliderImg";
import {BodyStyled12} from "../CSS/CSS";
import Text from "../Components/Text";
import CardCollapseStyled2 from "../Components/CardCollapseStyled/CardCollapseStyled";
import IconTextNiz2 from "../Components/IconTextNiz/IconTextNiz";
import {Col, Row} from "../CSS/settings/grid";
import ScrollToTop from "../Components/ScrollToTop";
import svg from "../Files/5.svg"
import svg2 from "../Files/6.svg"


const Page1 = (props) => {
    return (
        <BodyStyled12>
            <ScrollToTop/>
            <Row justify_content={"center"}>
                <Col col={9} sm={12}>
                    <h2 className="mt_6">Вступление</h2>
                    <Text
                        col_sm={12}
                        col={8}
                        text={"Членство в саморегулируемой организации (СРО) инвестиционных советников в сфере финансового рынка. Включение в единый реестр инвестиционных советников ЦБ РФ." +
                        " Кто несет ответственность за неверную инвестиционную консультацию?"}
                        justify_content={"start"}
                    />
                    <IconTextNiz2
                        padding={5}
                        col={6}
                        direction={"true"}
                        indent={"mt_5"}
                        align_content={"start"}
                        align_items={"center"}
                        text_align={"center"}
                        text={"Интересный вопрос..."}
                        img={svg}
                    />
                    <Text
                        indent={"mt_6 mb_6"}
                        col_sm={12}
                        col={8}
                        text={"Членство в саморегулируемой организации (СРО) инвестиционных " +
                        "советников в сфере финансового рынка. " +
                        "Включение в единый реестр инвестиционных советников ЦБ РФ."}
                        justify_content={"start"}
                    />
                    <SliderImg justify_content={"center"} indent={"mt_7"}/>
                    <CardCollapseStyled2
                        indent={"mt_6 mb_7"}
                        justify_content={"start"}
                        border_radius={'14px'}
                        background={"#FBFCFF"}
                        padding={5}
                        col={6}
                        xl1={3}
                        xl2={9}
                        img={svg2}
                        button={true}
                        title={"Выполнима в границах горизонта планирования"}
                        dropdown={`Период времени, за который определяется ожидаемая доходность.`}
                    />
                    <Footer navlink={"/Page2"} navlinkPrev={"/StartPage"}/>
                </Col>
            </Row>
        </BodyStyled12>
    )
}

export default Page1