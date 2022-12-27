import { Col, Row } from "react-bootstrap";

import "./header.scss";
import { Link } from "react-router-dom";

function Header (props) {
    return <>
        <Row className="menu-header">
            {/* <div className="hamb-menu d-none">=</div> */}
            <Col className="col-6 logo">
                <Link to="/">
                    LOGO
                </Link>
            </Col>
            <Col className="col-2 menu-item ">
                <Link to="/about">
                    <div className="menu-text">Chi Sono</div>
                </Link>
            </Col>
            <Col className="col-2 menu-item ">
                <Link to="/contacts">
                    <div className="menu-text">Contatti</div>
                </Link>
            </Col>
            <Col className="col-2 menu-item ">
                <Link to="/menu">
                    <div className="menu-text">Menu</div>
                </Link>
            </Col>
      </Row>
    </>;
}

export default Header;