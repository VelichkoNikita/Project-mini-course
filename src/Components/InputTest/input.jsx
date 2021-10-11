import React, {useEffect, useState, useRef} from 'react'
import s from './inputTestCss.module.css'
import {Col, Row} from "../../CSS/settings/grid";
import {Button_Primary} from "../../CSS/CSS";
import {getCourseSelector} from "../../redux/close-course-selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {closeCourseOff} from "../../redux/close-course-reducer";

const Inputtest = (props) => {

    const icon1 = (
        <svg width="50" height="50" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.16"
                  d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z"
                  fill="#00BD68"/>
            <path
                d="M57.9414 68.4971L88.7623 43.4436C89.6194 42.7469 90.8791 42.8769 91.5758 43.734C92.2141 44.5193 92.1653 45.6575 91.4622 46.3852L59.0021 79.982C58.2346 80.7764 56.9685 80.7982 56.1741 80.0307C56.1275 79.9856 56.0831 79.9384 56.0411 79.889L51.0856 74.0699L51.0998 74.0584L42.5149 63.9394C41.8003 63.0971 41.9038 61.8351 42.7461 61.1205C43.3896 60.5745 44.3065 60.4912 45.0378 60.9123L57.4704 68.0699L57.9414 68.4971Z"
                fill="#00BC68" stroke="#00BC68" strokeWidth="4"/>
        </svg>
    )
    const icon2 = (
        <svg width="50" height="50" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.16"
                  d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z"
                  fill="#FF5B36"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M85.0878 49.0688C88.3212 45.3175 83.1978 40.1941 79.4465 43.4274L64.2576 56.5192L49.0687 43.4274C45.3174 40.194 40.1939 45.3174 43.4273 49.0688L56.5191 64.2577L43.4273 79.4466C40.194 83.1979 45.3174 88.3213 49.0687 85.0879L64.2576 71.9962L79.4465 85.0879C83.1978 88.3213 88.3212 83.1979 85.0878 79.4466L71.9961 64.2577L85.0878 49.0688Z"
                  fill="#FE5B36"/>
        </svg>
    )

    const [content, setContent] = useState(props.inputList)
    const [Idonotunderstand, setIdonotunderstand] = useState(false)
    const [inputvalue, setInputvalue] = useState("")
    const [imgValue, setImgValue] = useState(null)
    const [textValue, setTextValue] = useState(null)
    const inputEl = useRef(null);
    const [istrue, setIstrue] = useState(false)
    const [showistrue, setShowistrue] = useState(false)
    const [resuilinputclass, setResuilinputclass] = useState(" ")
    const [isdisabled, setDisabled] = useState(false)


    useEffect(() => {
        if (inputvalue.length < String(content.whatsright).length) {
            setIstrue(true)
            setImgValue(null)
            setResuilinputclass("")
        } else if (inputvalue.length >= String(content.whatsright).length) {
            if (inputvalue == content.whatsright) {
                setShowistrue(true)
                setDisabled(true)
                setImgValue(icon1)
                setTextValue(<div>{content.godod}</div>)
                setResuilinputclass(" input_god")
                props.closeCourseOff(false)
            } else if (inputvalue != content.whatsright) {
                setShowistrue(false)
                setImgValue(icon2)
                setTextValue(<div>{content.os}</div>)
                setResuilinputclass(" input_bad")
            }
            setIstrue(false)
        }
    }, [inputvalue])


    return (
        <Row align="middle" className={" mb_4"}>
            <Row>
                <img src={content.img} width={"100%"}/>
            </Row>
            <Col sm={12} md={12} lg={12} xl={12}>
                <h5 className={"mb_2"}>{content.answer}</h5>
            </Col>
            {Idonotunderstand ?
                <Col sm={8} md={12} lg={12} xl={10}>
                    <div className={"mb_2"}>{content.showTrue}</div>
                    <input
                        disabled={isdisabled}
                        ref={inputEl}
                        className={s.input + resuilinputclass}
                        value={inputvalue}
                        type="number"
                        onChange={e => setInputvalue(e.target.value)}
                        placeholder="Впиши ответ"
                    />
                    <Row style={{alignItems: "center", paddingTop: "10px"}}>
                        <Col sm={12} md={12} lg={24} xl={5}>{imgValue}</Col>
                        <Col sm={12} md={12} lg={24} xl={17}>{textValue}</Col>
                    </Row>
                </Col>
                :
                <>
                    <Col sm={10} md={10} lg={10} xl={10} className={s.leftRow}>
                        <input
                            disabled={isdisabled}
                            ref={inputEl}
                            className={s.input + resuilinputclass}
                            value={inputvalue}
                            type="number"
                            onChange={e => setInputvalue(e.target.value)}
                            placeholder="Впиши ответ"
                        />
                    </Col>
                    <Col sm={13} md={13} lg={13} xl={14}>
                        <Row style={{alignItems: "center", paddingTop: "10px", paddingBottom: "10px"}}
                             className={s.rightRow}>
                            <Col sm={10} md={12} lg={12} xl={5}>{imgValue}</Col>
                            <Col sm={10} md={12} lg={12} xl={12}>{textValue}</Col>
                        </Row>
                    </Col>
                    <Col sm={8} md={20} lg={15} xl={13}>
                        {istrue ? null :
                            <div>
                                {showistrue ?
                                    null
                                    :
                                    <Button_Primary onClick={() => {
                                        setIdonotunderstand(!Idonotunderstand)
                                    }}>Показать ответ</Button_Primary>
                                }
                            </div>
                        }
                    </Col>
                </>
            }
        </Row>
    )
}


let mapStateToProps = (state) => {
    return {
        closeCourse: getCourseSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {closeCourseOff})
)(Inputtest)


