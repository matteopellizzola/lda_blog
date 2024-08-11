import { Link } from "react-router-dom";

function HeaderMenuLink (props) {
    return <>
        {props.page === props.item.navigateTo &&
            <div className="menu-link selected" key={props.item.navigateTo}>
                <Link to={props.item.navigateTo} onClick={() => handleMenuClick(props)}>
                    <div className="menu-text">{props.item.name}</div>
                </Link>
            </div>
        }
        {props.page !== props.item.navigateTo &&
            <div className="menu-link" key={props.item.navigateTo}>
                <Link to={props.item.navigateTo} onClick={() => handleMenuClick(props)}>
                    <div className="menu-text">{props.item.name}</div>
                </Link>
            </div>
        }
    </>;
}

function handleMenuClick (props) {
    props.setPage(props.item.navigateTo);

    if (props.toggleMobileMenu()) {
        props.toggleMobileMenu();
    }
}

export default HeaderMenuLink;