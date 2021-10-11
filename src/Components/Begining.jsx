import React from 'react'
import {Col, Row} from "../CSS/settings/grid";
import CloseCourse from "./CloseCourse/CloseCourse";

const Begining = (props) => {

    return (
        <Row col={9} col_md={12} col_sm={12}>
            <Col padding={1} margin={3} sm={11} md={11}>
                <h2>Роботы</h2>
                <p>
                    Скоро они поработят наше сознание и займут наше место!<br/></p>
                <p>
                    Так, конечно, мог бы начинаться сценарий фантастического боевика,
                    но мы, к счастью, все еще в реальности и готовы разобраться с тем,
                    что такое роботы в системе Определенного-банка, зачем
                    они вообще нужны и с чем их едят.
                </p>
                <p>Поехали!</p>
                <CloseCourse text="Закрыть курс"/>
            </Col>
        </Row>
    )
}

export default Begining