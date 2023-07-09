import { Col, Row } from "react-bootstrap";

import "./header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import loadNavigation from "../database/loadNavigation";
import HeaderMenuLink from "./HeaderMenuLink";

import Logo from "../static/logo.png";

const menuItems = loadNavigation();

function Header (props) {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [page, setPage] = useState(window.location.pathname);

    function toggleMobileMenu () {
        if (mobileMenu) {
            setMobileMenu(false);
        } else {
            setMobileMenu(true);
        }
    }

    return <header>
        <div className="menu-header-desktop">
            <div className="header-wrapper">
                <div className="logo">
                    <Link to="/" onClick={() => setPage("home")} key="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="menu-item">
                    {menuItems.navigationList.map((item) => <HeaderMenuLink page={page} item={item} setPage={setPage} toggleMobileMenu={() => { return; }} />)}
                </div>
            </div>
        </div>
        <Row className="menu-header-mobile">
            <Col xs={12}>
                <div className="menu-wrapper">
                    <div className="menu-link" onClick={() => toggleMobileMenu()}>
                        <h1>
                            <i className="icon-menu"></i>
                        </h1>
                    </div>
                    <div className="mobile-logo">
                        <h1>
                            <Link to="/" onClick={() => setPage("home")} key="/m">
                                <img src={Logo} alt="" />
                            </Link>
                        </h1>
                    </div>
                </div>
            </Col>
            {mobileMenu && <ModalMobileMenu toggleMobileMenu={toggleMobileMenu} setMobileMenu={setMobileMenu} page={page} menuItems={menuItems} setPage={setPage} />}
        </Row>
    </header>;
}

function ModalMobileMenu (props) {

    return <>
        <div className="modal-backdrop-custom" onClick={() => props.setMobileMenu(false)}>
        </div>
        <Col className="modal-menu-mobile">
            <div className="link-wrapper">
                <h3 onClick={() => props.toggleMobileMenu()}>
                    <i className="icon-cross"></i>
                </h3>
                {props.menuItems.navigationList.map((item) => <HeaderMenuLink page={props.page} item={item} setPage={props.setPage} toggleMobileMenu={props.toggleMobileMenu} />)}
            </div>
        </Col>
    </>;
}

export default Header;
