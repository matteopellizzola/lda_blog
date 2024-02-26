import { Col, Row } from "react-bootstrap";

import "./header.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import loadNavigation from "../database/loadNavigation";
import HeaderMenuLink from "./HeaderMenuLink";

import Logo from "../static/logo.png";
import api from "../services/api";
import LoggedinPopOver from "./LoggedInPopover";

const menuItems = loadNavigation();

function Header (props) {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [page, setPage] = useState(window.location.pathname);

    const [userData, setUserData] = useState();
    const refUrser = useRef();

    useEffect(() => {
        if (!refUrser.current) {
            api.users.isLoggedIn(true).then(data => {
                if (data) {
                    refUrser.current = data;
                    setUserData(data);
                }
            });
        }
    }, []);

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
                        <img src={Logo} alt="logo_lda" />
                    </Link>
                </div>
                <div className="menu-item">
                    {menuItems.navigationList.map((item) => <HeaderMenuLink key={item.name} page={page} item={item} setPage={setPage} toggleMobileMenu={() => { return; }} />)}
                </div>
                {refUrser.current &&
                    <LoggedinPopOver userData={userData} />
                }
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
                                <img src={Logo} alt="logo_lda" />
                            </Link>
                        </h1>
                    </div>
                </div>
            </Col>
            <ModalMobileMenu toggleMobileMenu={toggleMobileMenu} setMobileMenu={setMobileMenu} page={page} menuItems={menuItems} setPage={setPage} mobileMenu={mobileMenu} userData={userData} refUrser={refUrser} />
        </Row>
    </header>;
}

function ModalMobileMenu (props) {

    return <>
        <div className={props.mobileMenu ? 'modal-backdrop-custom open' : 'modal-backdrop-custom closed'} onClick={() => props.setMobileMenu(false)}>
        </div>
        <Col className={props.mobileMenu ? 'modal-menu-mobile open' : 'modal-menu-mobile closed'}>
            <div className="link-wrapper">
                <h3 onClick={() => props.toggleMobileMenu()}>
                    <i className="icon-cross"></i>
                </h3>
                {props.menuItems.navigationList.map((item) => <HeaderMenuLink key={item.name} page={props.page} item={item} setPage={props.setPage} toggleMobileMenu={props.toggleMobileMenu} />)}
            </div>

            {props.refUrser.current &&
                <div className="link-wrapper">
                    <h3>{props.userData.user.username}</h3>
                    <div className="menu-link">
                        <a className='btn-link btn' href={props.userData.editPath}>Add a product</a>
                        -
                        <a className='btn-link btn' href={props.userData.mediaLibraryLink} target='_blank'>Image Library</a>
                    </div>
                </div>
            }
        </Col>
    </>;
}

export default Header;
