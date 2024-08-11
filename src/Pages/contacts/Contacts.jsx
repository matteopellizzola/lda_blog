import { Row, Col } from "react-bootstrap";
import loadSchedule from "../../database/loadSchedules";

import "./contacts.scss";
import GoogleIframeMap from "./GoogleIframeMap";
import NewsLetterForm from "./NewsLetterForm";

const schedules = loadSchedule();

function Contact (props) {
    return <>
        <div className="text-center contacts-wrapper padding-logo-top px-3">

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
                                {/*TODO: cambiare con cose reali*/}
                                <a href="mailto:matteo.pellizzola@gmail.com" className="btn btn-outline-dark"> <i className="icon-mail"></i>  Scrivimi una mail</a>

                                <a href="https://wa.me/+393315620020" className="btn btn-outline-dark" rel="noreferrer" target="_blank"><i className="icon-phone"></i> mandami un messaggio</a>
                            </div>

                        </Col>
                    </Row>
                    <hr />
                    <Row className="opening-hours">
                        <Col xs={12}>Orari</Col>

                        {schedules.scheduleList.map(day => <OpeningDay day={day.day} hour={day.hour} closed={day.closed} />)}
                    </Row>
                </Col>
                <Col xs={12} sm={6} className="map">
                    <GoogleIframeMap width={600} height={450} title={"googleMapsContacts"} />
                </Col>
            </Row>
            <Row className="bottom-contacts">
                <Col>
                </Col>
                <NewsLetterForm />
            </Row>

        </div>
    </>;
}

function OpeningDay (props) {
    return <>
        <Row className={props.closed ? "closed" : ""}>
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