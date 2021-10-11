import React from 'react'
import {BodyStyled2, ImgDownContent} from "../CSS/CSS";

const Body2 = (props) => {

    return (
        <>
            <BodyStyled2 className={props.indent}>
                {props.img &&
                <ImgDownContent src={props.img}/>}
            </BodyStyled2>
        </>
    )
}

export default Body2