import { Row, Col } from "react-bootstrap";

import "./footer.scss";

function Footer(props) {
  return (
    <>
      <div id="footer">
        <div className="footer-inner">
          <Row>
            <Col xs={6} md={6}>
              <div>
                <h6 className="title">Laboratorio di Antonella</h6>
                <div className="address">
                  via Ciccio cicci 32 (TO) <br />
                  Rivoli 10098
                </div>
                <div className="phone">+39 3213243543</div>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <div>
                <h6 className="follow">
                  Seguimi su:{" "}
                  <a href="https://www.instagram.com/laboratoriodiantonella/">
                    Instagram
                  </a>
                </h6>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">created with Love with React</Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;
