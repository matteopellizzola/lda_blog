import { Col, Row } from "react-bootstrap";

import "./header.scss";
import { Link } from "react-router-dom";

function Header (props) {
    return <>
        <Row className="menu-header-desktop">
            {/* <div className="hamb-menu d-none">=</div> */}
            <Col xs={0} sm={6}  className="logo">
                <Link to="/">
                    LOGO
                </Link>
            </Col>
            <Col xs={0} sm={6} className="menu-item ">
                <div className="menu-link">
                    <Link to="/about">
                        <div className="menu-text">Chi Sono</div>
                    </Link>
                </div>

                <div className="menu-link">
                    <Link to="/contacts">
                        <div className="menu-text">Contatti</div>
                    </Link>
                </div>

                <div className="menu-link">
                    <Link to="/menu">
                        <div className="menu-text">Menu</div>
                    </Link>
                </div>
            </Col>
      </Row>
    </>;
}

export default Header;