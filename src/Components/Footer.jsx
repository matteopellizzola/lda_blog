import { Row, Col } from "react-bootstrap";
import constants from "../constants";

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
                  <a
                    href="https://www.google.com/maps/dir//Via+Asti,+82,+Rivoli,+TO/@45.0653283,7.5540664,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47886adc2e3a8cc5:0x1722fb80a21e80f6!2m2!1d7.5566413!2d45.0653245!3e0?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    via Asti 82
                  </a>{" "}
                  (TO)
                  <br />
                  Rivoli 10098
                </div>
                <a className="phone" href={constants.TELEPHONE_LINK}>
                  {constants.TELEPHONE}
                </a>
                <br />
                <a className="phone" href={constants.EMAIL_LINK}>
                  {constants.EMAIL}
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
            <Col className="text-center opacity-50 copyright">
              © Laboratorio di Antonella {new Date().getFullYear()} ©
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;
