import { Col, Row } from "react-bootstrap";

import "./header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header (props) {

    const [mobileMenu, setMobileMenu] = useState(false);

    function toggleMobileMenu(){
        if (mobileMenu) {
            setMobileMenu(false);
        } else {
            setMobileMenu(true);
        }
    }

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
        <Row className="menu-header-mobile">
            <Col>
                <div className="menu-wrapper">
                    <div className="menu-link" onClick={() => toggleMobileMenu()}>
                        <h1>
                            <i className="icon-menu"></i>
                        </h1>
                    </div>
                    <div className="mobile-logo">
                        <h1>
                            <Link to="/">
                                <i className="icon-home"></i>
                            </Link>
                        </h1>
                    </div>
                </div>
            </Col>
            {mobileMenu && <ModalMobileMenu toggleMobileMenu={toggleMobileMenu} /> }
        </Row>
    </>;
}

function ModalMobileMenu (props) {

    return <>
        <Col className="modal-menu-mobile">
            <div className="link-wrapper">
                <div className="menu-link">
                    <Link to="/about" onClick={() => props.toggleMobileMenu()}>
                        <div className="menu-text">Chi Sono</div>
                    </Link>
                </div>

                <div className="menu-link">
                    <Link to="/contacts" onClick={() => props.toggleMobileMenu()}>
                        <div className="menu-text">Contatti</div>
                    </Link>
                </div>

                <div className="menu-link">
                    <Link to="/menu" onClick={() => props.toggleMobileMenu()}>
                        <div className="menu-text">Menu</div>
                    </Link>
                </div>
            </div>
        </Col>
    </>;
}

export default Header;