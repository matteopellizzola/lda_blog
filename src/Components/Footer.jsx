import { Row, Col } from "react-bootstrap";

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
                  via Asti 82/C (TO) <br />
                  Rivoli 10098
                </div>
                <a className="phone" href="tel:+393315620020">
                  +39 3315620020
                </a>
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
            <Col className="text-center">
              © Laboratorio di Antonella 2024 ©
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;
