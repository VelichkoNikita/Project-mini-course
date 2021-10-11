import React, {useState} from 'react'
import Body2 from "../Components/Body2";
import Footer from "../Components/Footer";
import {BodyStyled12} from "../CSS/CSS";
import {Col, Row} from "../CSS/settings/grid";
import CardCollapseStyled2 from "../Components/CardCollapseStyled/CardCollapseStyled";
import Text from "../Components/Text";
import VideoBlock from "../Components/VideoBlock/VideoBlock";
import {getBlockSelector} from "../redux/card-selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {unblockSuccess} from "../redux/card-reducer";
import ScrollToTop from "../Components/ScrollToTop";
import video1 from "../Files/1.mp4"
import svg1 from "../Files/14.svg"
import svg2 from "../Files/6.svg"

const Page2 = (props) => {

    const [block, setUnblock] = useState(true)
    const nextTopic = () => {
        setUnblock(false)
        props.unblockSuccess(3)
    }

    return (
        <BodyStyled12>
            <ScrollToTop/>
            <Row justify_content={"center"}>
                <Col col={8} sm={12}>
                    <h2 className="mt_6">Новая тема</h2>
                    <Text
                        col_sm={12}
                        indent={"mt_4"}
                        col={9}
                        text={"Закон не устанавливает специальных компенсационных механизмов для клиентов, пострадавших от действий инвестиционных советников.\n" +
                        " Инвестиционный советник несет ответственность согласно законодательству РФ и договору об инвестиционном консультировании."}
                        justify_content={"start"}/>
                    <Body2
                        indent={"mt_6"}
                        img={svg1}
                    />
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
                    <VideoBlock
                        text={"Просмотри видео до конца, тогда сможешь перейти к след. странице."}
                        video={video1}
                        unblock={1}
                        col={3}
                        indent={`mt_6`}
                        position={`right`}//left right
                        nextTopic={nextTopic}
                    />
                    <Footer block={block} navlink={"/Page3"} navlinkPrev={"/Page1"}/>
                </Col>
            </Row>
        </BodyStyled12>
    )
}

let mapStateToProps = (state) => {
    return {
        cards: getBlockSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {unblockSuccess})
)(Page2)