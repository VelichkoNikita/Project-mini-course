import React from 'react'
import {Button_Primary, FooterStyled} from "../CSS/CSS";
import {NavLink} from "react-router-dom";
import {getBlockSelector} from "../redux/card-selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {unblockSuccess} from "../redux/card-reducer";

const Footer = (props) => {

    return (
        <>
            <FooterStyled>
                {props.navlinkPrev &&
                <NavLink to={props.navlinkPrev}>
                    <Button_Primary margin={0}>Пред. страница</Button_Primary>
                </NavLink>}
                {props.navlink &&
                <NavLink to={props.navlink}>
                    <Button_Primary
                        margin={0}
                        disabled={props.block}
                        onClick={() => {
                            props.unblockSuccess(props.index)
                        }}>
                        След. страница
                    </Button_Primary>
                </NavLink>}
            </FooterStyled>
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
)(Footer)