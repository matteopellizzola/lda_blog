import { Col, Row } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import loadNavigation from "../database/loadNavigation";
import HeaderMenuLink from "./HeaderMenuLink";

import Logo from "../static/logo.png";
import IconMenu from "../static/images/icons/icon-menu.svg";
import IconClose from "../static/images/icons/icon-close.svg";
import LoggedinPopOver from "./LoggedInPopover";
import { useUser } from "../contexts/userContext";

const menuItems = loadNavigation();

function Header(props) {
  const { loggedIn, userData } = useUser();
  const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState(false);

  function toggleMobileMenu() {
    if (mobileMenu) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  }

  return (
    <header>
      <div className="menu-header-desktop">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/" key="/">
              <img src={Logo} alt="logo_lda" />
            </Link>
          </div>
          <div className="menu-item">
            {menuItems.navigationList.map((item) => (
              <HeaderMenuLink
                key={item.name}
                page={location?.pathname}
                item={item}
                toggleMobileMenu={() => {
                  return;
                }}
              />
            ))}
          </div>
          {loggedIn && userData && userData?.user && (
            <LoggedinPopOver userData={userData} />
          )}
        </div>
      </div>
      <Row className="menu-header-mobile">
        <Col xs={12}>
          <div className="menu-wrapper">
            <div className="menu-link" onClick={() => toggleMobileMenu()}>
              <h1 className="d-flex p-1">
                <img role="button" className="icon" src={IconMenu} alt="logo" />
              </h1>
            </div>
            <div className="mobile-logo">
              <h1>
                <Link to="/" key="/m">
                  <img src={Logo} alt="logo_lda" />
                </Link>
              </h1>
            </div>
          </div>
        </Col>
        <ModalMobileMenu
          toggleMobileMenu={toggleMobileMenu}
          setMobileMenu={setMobileMenu}
          page={location?.pathname}
          menuItems={menuItems}
          mobileMenu={mobileMenu}
          userData={userData}
        />
      </Row>
    </header>
  );
}

function ModalMobileMenu(props) {
  return (
    <>
      <div
        className={
          props.mobileMenu
            ? "modal-backdrop-custom open"
            : "modal-backdrop-custom closed"
        }
        onClick={() => props.setMobileMenu(false)}
      ></div>
      <Col
        className={
          props.mobileMenu
            ? "modal-menu-mobile open"
            : "modal-menu-mobile closed"
        }
      >
        <div className="link-wrapper">
          <h3 className="close-menu" onClick={() => props.toggleMobileMenu()}>
            <img
              role="button"
              className="icon"
              src={IconClose}
              alt="icon-close"
            />
          </h3>
          {props.menuItems.navigationList.map((item) => (
            <HeaderMenuLink
              key={item.name}
              page={props.page}
              item={item}
              toggleMobileMenu={props.toggleMobileMenu}
            />
          ))}
        </div>

        {props.userData && props.userData?.user && (
          <div className="link-wrapper">
            <h3>{props.userData.user.username}</h3>
            <div className="menu-link">
              <a className="btn-link btn" href={props.userData.editPath}>
                Add a product
              </a>
              -
              <a
                className="btn-link btn"
                href={props.userData.mediaLibraryLink}
                target="_blank"
                rel="noreferrer"
              >
                Image Library
              </a>
            </div>
          </div>
        )}
      </Col>
    </>
  );
}

export default Header;
