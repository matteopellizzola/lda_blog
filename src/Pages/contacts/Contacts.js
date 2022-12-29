import { Row, Col } from "react-bootstrap";
import loadSchedule from "../../database/loadSchedules";

import "./contacts.scss";

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
                        <Col>
                            Sono in laboratorio a creare leccornie, ma puoi sempre mandare una mail, oppure passare a trovarmi
                            <div className="mail-phone-wrapper">
                                    {/*TODO: cambiare con cose reali*/ }
                                <a href="mailto:matteo.pellizzola@gmail.com">asd@åsd.com</a>
                                <br />
                                <a href="https://wa.me/+393315620020" target="_blank">asd</a>
                            </div>

                        </Col>
                        </Row>
                        <hr />
                    <Row>
                        <Col>Orari</Col>
                    </Row>
                </Col>
                <Col xs={12} sm={6} >Picture</Col>
            </Row>

        </div>
    </>;
}

export default Contact;