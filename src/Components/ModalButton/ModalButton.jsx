import React, {useState} from 'react';
import ModalWindow from "./ModalWindow";
import {Col, Row} from "../../CSS/settings/grid";
import {Button_Primary, HomeButton} from "../../CSS/CSS";
import svg from "../../Files/1.svg"

const ModalButton = (props) => {

    const [modalActive, setModalActive] = useState(false)
    const openModalVid = () => {
        setModalActive(prev => !prev)
    }

    return <>
        <Row>
            <div>
                <Col xs={24} sm={24} md={8}
                     mr={3}>
                    <div>
                        <Button_Primary
                            borderRadius={"4px"}
                            onClick={() => {
                                openModalVid(true)
                            }}
                        >
                            <div>Обратная связь</div>
                        </Button_Primary>
                    </div>
                </Col>
                <ModalWindow modalActive={modalActive} setModalActive={setModalActive} windowText={"WindowText"}>
                    <img src={svg}
                         style={{width: "100%"}}/>
                    <Row align_items={"center"}>
                        <p className="mt_2">Не помогло? Пришли письмо Outlook</p>
                        <a href="mailto:velichko.nikita@yandex.ru?subject=Не завершается курс">
                            <HomeButton margin={1}>
                                <svg width="24" height="24" viewBox="0 0 23 23" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.40082 17.3871C4.74013 17.6762 4 17.1921 4 16.471V13.4399C4 12.9401 4.36897 12.5171 4.8641 12.4492L15.4286 11L4.8641 9.55082C4.36897 9.4829 4 9.05987 4 8.5601V5.52901C4 4.80786 4.74013 4.32381 5.40082 4.61286L17.9059 10.0838C18.7048 10.4334 18.7048 11.5666 17.9059 11.9162L5.40082 17.3871Z"
                                        fill="#295E96"/>
                                </svg>
                            </HomeButton>
                        </a>
                    </Row>
                </ModalWindow>
            </div>
        </Row>
    </>
}

export default ModalButton







