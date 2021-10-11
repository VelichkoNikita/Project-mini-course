import React from 'react'
import Footer from "../Components/Footer";
import Text from "../Components/Text";
import {Col, Row} from "../CSS/settings/grid";
import IconTextNiz2 from "../Components/IconTextNiz/IconTextNiz";
import {BodyStyled1, BodyStyled12, BodyStyled2} from "../CSS/CSS";
import ScrollToTop from "../Components/ScrollToTop";
import InputTest from "../Components/InputTest/InputTest";
import CloseCourse from "../Components/CloseCourse/CloseCourse";
import svg from "../Files/5.svg"
import svg2 from "../Files/15.svg"

const Page3 = (props) => {
    return (
        <>
            <BodyStyled1>
                <ScrollToTop/>
                <IconTextNiz2
                    indent={"mt_3"}
                    justify_content={"center"}
                    col={6}
                    direction={"true"}
                    align_content={"middle"}
                    align_items={"center"}
                    text_align={"center"}
                    text={"Какой-то заголовок"}
                    img={svg}
                />
            </BodyStyled1>
            <BodyStyled2>
                <h2>Заголовок 1</h2>
                <Text
                    col_sm={12}
                    col={9}
                    text={"Закон не устанавливает специальных компенсационных механизмов для клиентов, пострадавших от действий инвестиционных советников.\n" +
                    " Инвестиционный советник несет ответственность согласно законодательству РФ и договору об инвестиционном консультировании."}
                    justify_content={"center"}
                />
                <h2>Заголовок 2</h2>
                <Text
                    col_sm={12}
                    col={9}
                    text={"Закон не устанавливает специальных компенсационных механизмов для клиентов, пострадавших от действий инвестиционных советников.\n" +
                    " Инвестиционный советник несет ответственность согласно законодательству РФ и договору об инвестиционном консультировании."}
                    justify_content={"center"}
                />
            </BodyStyled2>
            <BodyStyled12>
                <Row justify_content={"center"}>
                    <Col col={9} sm={12}>
                        <Text
                            col_sm={12}
                            indent={"mt_6"}
                            col={9}
                            text={"Тут должен быть текст задачи, а ниже график к задаче. " +
                            "Пройди задание, чтобы кнока Закрыть курс на старт. странице и здесь (ниже) стала кликабельной." +
                            " Нужно вписать правильный ответ в input. За ответ принимается 4-х значное число."}
                            justify_content={"start"}
                        />
                        <InputTest
                            offset={0}
                            position={"start"}
                            indent={`mt_4`}
                            text={null}
                            inputList={[
                                {
                                    answer: `Впиши ответ`,
                                    length: 10,
                                    whatsright: 3490,
                                    godod: `Верно!`,
                                    showTrue: `3490`,
                                    os: `Посмотри внимательнее на выписку`,
                                    img: svg2,
                                }
                            ]}
                        />
                    </Col>
                </Row>
                <Row justify_content={"center"}>
                    <Col col={9}>
                        <Footer navlinkPrev={"/Page2"}/>
                        <Row justify_content={"center"} mb={"4"}>
                            <CloseCourse text="Закрыть курс"/>
                        </Row>
                    </Col>
                </Row>
            </BodyStyled12>
        </>
    )
}

export default Page3