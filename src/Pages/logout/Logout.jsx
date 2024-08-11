import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { useUser } from "../../contexts/userContext";

function Logout (props) {
    const {logoutCustomer} = useUser();

    useEffect(() => {
        logoutCustomer()
    })

    return <>
        <Spinner />
    </>;
}

export default Logout;