import { useEffect } from "react";
import Spinner from "../components/Spinner";
import api from "../../services/api";
import { BrowserRouter } from "react-router-dom";

function Logout (props) {

    useEffect(() => {
        api.users.logout().then(data => {
            window.location.replace('/');
        });
    })

    return <>
        <Spinner />
    </>;
}

export default Logout;