import React from "react";
import {Row} from "../../CSS/settings/grid";
import {SlideImg} from "../../CSS/CSS";

const GalleryCard = (props) => {
    return (
        <div>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
            <Row justify_content={"center"}>
                <SlideImg src={props.img}/>
            </Row>
        </div>
    )
}

export default GalleryCard;
