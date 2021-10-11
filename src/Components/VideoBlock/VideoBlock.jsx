import React, {useRef, useState} from 'react'
import {SpeedVideo} from "./StyledVideoCard";
import {Col, Row} from "../../CSS/settings/grid";
import poster from "../../Files/1.jpg"

const VideoBlock = (props) => {

    const videoRef = useRef()
    const [positiontext, setPositiontext] = useState(() => {
            if (props.position == "left") {
                return ("2")
            } else if (props.position == "right") {
                return ("1")
            }
        }
    )

    const [positionimg, setPositionimg] = useState(
        () => {
            if (props.position == "left") {
                return ("1")
            } else if (props.position == "right") {
                return ("2")
            }
        }
    )
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const setPlayBack = (el) => {
        videoRef.current.playbackRate = el;
    };

    return (
        <>
            <Row className={props.indent}
            >
                <Col>
                    <Row align_items={"center"}>
                        <Col
                            background={"#FBFCFF"}
                            border_radius={"8px"}
                            padding_sm={0}
                            shadow_col={props.noShadowprops ? null : " 0px 4px 24px rgb(0 0 0 / 12%)"}
                            padding={0}
                            col={6}
                            sm={12}
                            order={positionimg}
                            order_sm={2}
                        >
                            <video
                                onEnded={props.nextTopic}
                                poster={poster}
                                ref={videoRef}
                                width="100%"
                                preload="none"
                                controls
                                controlsList="nodownload">
                                <source src={props.video} type="video/mp4"/>
                            </video>
                            <Row justify_content={"flex-end"}>
                                <SpeedVideo
                                    active={active}
                                    onClick={() => {
                                        setPlayBack(1)
                                        setActive(true)
                                        setActive2(false)
                                        setActive3(false)
                                    }}>x1
                                </SpeedVideo>
                                <SpeedVideo
                                    active={active2}
                                    onClick={() => {
                                        setPlayBack(1.5)
                                        setActive(false)
                                        setActive2(true)
                                        setActive3(false)
                                    }}>x1.5
                                </SpeedVideo>
                                <SpeedVideo
                                    active={active3}
                                    onClick={() => {
                                        setPlayBack(2)
                                        setActive(false)
                                        setActive2(false)
                                        setActive3(true)
                                    }}>x2
                                </SpeedVideo>
                            </Row>
                        </Col>
                        <Col
                            padding={3}
                            padding_sm={0}
                            col={6}
                            sm={12}
                            order={positiontext}
                            order_sm={1}
                        >
                            <div>{props.text}</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default VideoBlock