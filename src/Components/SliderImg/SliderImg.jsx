import React, {useEffect, useState} from "react";
import GalleryCard from "./GalleryCard";
import {Row} from "../../CSS/settings/grid";
import {Button_Primary} from "../../CSS/CSS";
import svg1 from "../../Files/7.svg"
import svg2 from "../../Files/8.svg"
import svg3 from "../../Files/9.svg"
import svg4 from "../../Files/10.svg"
import svg5 from "../../Files/11.svg"
import svg6 from "../../Files/12.svg"
import svg7 from "../../Files/13.svg"

const gallery = [
    {
        title: `Красно-оранжевый столбик`,
        text: `Первый столбик с красно-оранжевой заливкой показывает сумму процентов и расходов`,
        photo: svg1
    },
    {
        title: `Зеленый столбик`,
        text: `Второй столбик зеленого цвета обозначает сумму пополнения`,
        photo: svg2
    }, {
        title: `Черная отметка`,
        text: `Столбик зеленого цвета обозначает сумму пополнения`,
        photo: svg3
    },
    {
        title: `Зеленый столбик`,
        text: `Столбик зеленого цвета обозначает сумму пополнения`,
        photo: svg4
    },
    {
        title: `Зеленый столбик`,
        text: `Столбик зеленого цвета обозначает сумму пополнения`,
        photo: svg5
    },
    {
        title: `Зеленый столбик`,
        text: `Второй столбик зеленого цвета обозначает сумму пополнения`,
        photo: svg6
    },
    {
        title: `Зеленый столбик`,
        text: `Второй столбик зеленого цвета обозначает сумму пополнения`,
        photo: svg7
    },
]

const SliderImg = (props) => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const [selected, setSelected] = useState("http://e-file.tinkoff.ru/shara/dko/courses/TheCourses_All_KK_ZVONOK_PAY_PAY_REACT/1.svg")
    const [selectedText, setSelectedText] = useState("Находим инструкцию в поиске")
    const [selectedTitle, setSelectedTitle] = useState("График погашения задолженности")
    const [start, setStart] = useState(true)
    const [end, setEnd] = useState(true)
    let next = () => {
        if (currentPosition >= 0 && currentPosition < 6) {
            setCurrentPosition(p => p + 1)
        } else if (currentPosition === 6) {
            setEnd(false)
        }
    }

    let preview = () => {
        if (currentPosition > 0 && currentPosition <= 6) {
            setCurrentPosition(p => p - 1)
        } else if (currentPosition === 0) {
            setStart(true)
        }
    }
    useEffect(() => setSelected(gallery[currentPosition].photo), [currentPosition])
    useEffect(() => setSelectedText(gallery[currentPosition].text), [currentPosition])
    useEffect(() => setSelectedTitle(gallery[currentPosition].title), [currentPosition])

    return (
        <Row style={{gridArea: "Content1"}}
             justify_content={"center"}
             className={props.indent}>
            <>
                <Row
                    justify_content={props.justify_content}>
                    <GalleryCard img={selected} text={selectedText} title={selectedTitle}/>
                </Row>
                <Row
                    justify_content={"center"}>
                    {start ?
                        <Button_Primary
                            col={"100px"}
                            disabled
                            margin={1}
                            onClick={() => {
                                preview();
                            }}
                        >
                            Назад
                        </Button_Primary>
                        :
                        <Button_Primary
                            margin={1}
                            col={"105px"}
                            onClick={() => {
                                preview();
                                setEnd(true)
                            }}

                        > Назад
                        </Button_Primary>
                    }
                    {end ? <Button_Primary
                            margin={1}
                            col={"105px"}
                            onClick={() => {
                                next();
                                setStart(false)
                            }}
                        >
                            Дальше
                        </Button_Primary>
                        :
                        <Button_Primary
                            disabled
                            col={"105px"}
                            margin={1}

                            onClick={next}
                        >
                            Дальше
                        </Button_Primary>
                    }
                </Row>
            </>
        </Row>
    )
}

export default SliderImg;
