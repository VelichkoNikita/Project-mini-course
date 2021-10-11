import React from 'react'
import {compose} from "redux";
import {connect} from 'react-redux';
import Footer from "../Components/Footer";
import {BodyStyled12} from "../CSS/CSS";
import Card from "../Components/Card/Card";
import {getBlockSelector} from "../redux/card-selectors";
import {unblockSuccess} from "../redux/card-reducer";
import {Col, Row} from "../CSS/settings/grid";
import {v4 as uuidv4} from "uuid"
import Begining from "../Components/Begining";

const StartPage = (props) => {
    let cards = props.cards.map((b, i) =>
        <Card
            key={uuidv4()}
            index={i + 1}
            col={b.col}
            sm={b.sm}
            md={b.md}
            lg={b.lg}
            padding={b.padding}
            margin={b.margin}
            descrip={b.descrip}
            theme={b.theme}
            backgroundImg={b.backgroundImg}
            block={b.block}
            unblockSuccess={props.unblockSuccess}
        />)
    return (
        <>
            <BodyStyled12>
                <Row>
                    <Col col={12}>
                        <Row justify_content={"center"}>
                            <Begining/>
                            {cards}
                        </Row>
                    </Col>
                </Row>
                <Row justify_content={"center"}>
                    <Footer navlink={"/Page1"} index={2}/>
                </Row>
            </BodyStyled12>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        cards: getBlockSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {unblockSuccess})
)(StartPage)