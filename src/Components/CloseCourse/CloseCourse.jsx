import React, {useEffect, useState} from 'react'
import {CloseCourseStyled} from "./CloseCourseStyles";
import {Button_Primary} from "../../CSS/CSS";
import {getCourseSelector} from "../../redux/close-course-selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {closeCourseOff} from "../../redux/close-course-reducer";

const CloseCourse = (props) => {

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (props.closeCourse === false) {
            setDisabled(false)
        }
    }, [props.closeCourse])

    const CloseCourse = () => {
        window.close();
    }

    return (
        <>
            <CloseCourseStyled>
                <Button_Primary
                    disabled={disabled}
                    onClick={CloseCourse}
                    className={props.indent}>
                    {props.text}
                </Button_Primary>
            </CloseCourseStyled>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        closeCourse: getCourseSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {closeCourseOff})
)(CloseCourse)
