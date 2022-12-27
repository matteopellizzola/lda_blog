import { Row, Col } from "react-bootstrap";

import "./footer.scss";

function Footer (props) {
    return <>
        <Row id="footer">
            <Col>
                <div>
                    <h6 className="title">
                        Laboratorio di Antonella
                    </h6>
                    <div className="address">
                        via Ciccio cicci 32 (TO) <br/>
                        Rivoli 10098
                    </div>
                    <div className="phone">
                        +39 3213243543
                    </div>
                </div>
            </Col>
            <Col>
                <div>
                    <h6 className="follow">
                        Seguimi su: <a href="instagram.com/laboratoriodiantonella/">Instagram</a>
                    </h6>
                </div>
            </Col>
        </Row>
    </>;
}

export default Footer;