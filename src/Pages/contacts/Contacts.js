import { Row, Col } from "react-bootstrap";
import loadSchedule from "../../database/loadSchedules";

import "./contacts.scss";
import NewsLetterForm from "./NewsLetterForm";

const schedules = loadSchedule();

function Contact (props) {
    console.log(schedules.scheduleList);
    return <>
            <div className="text-center contacts-wrapper">

            <Row>
                <Col xs={12} sm={6}>
                    <Row>
                        <Col>
                            <h1>Contatti</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="contacts">
                            <div className="cta-contacts">
                                Sono in laboratorio a creare leccornie, ma puoi sempre mandare una mail, oppure passare a trovarmi
                            </div>
                             <hr />
                            <div className="mail-phone-wrapper">
                                    {/*TODO: cambiare con cose reali*/ }
                                <a href="mailto:matteo.pellizzola@gmail.com"> <i className="icon-mail"></i>  Scrivimi una mail</a>

                                <a href="https://wa.me/+393315620020" rel="noreferrer" target="_blank">mandami un messaggio <i className="icon-phone"></i></a>
                            </div>

                        </Col>
                        </Row>
                        <hr />
                    <Row>
                        <Col xs={12}>Orari</Col>

                        {schedules.scheduleList.map(day => <OpeningDay day={day.day} hour={day.hour} closed={day.closed} />)}
                    </Row>
                </Col>
                <Col xs={12} sm={6} className="map">Picture</Col>
            </Row>
            <Row className="bottom-contacts">
                <Col>
                    Qua ci sono le info per registrarsi alla newsletter
                    <NewsLetterForm />
                </Col>
            </Row>

        </div>
    </>;
}

function OpeningDay (props) {
    return <>
        <Row>
            <Col>
                {props.day}
            </Col>
            <Col>
                {props.hour}
            </Col>
        </Row>
    </>;
}

export default Contact;