import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import MpPopUp from "../components/MpPopUp";


function Login(props) {
    const navigate = useNavigate();
    const [popUp, setPopUp] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });


    const handleFormData = (value, type) => {
        setFormData({
            ...formData,
            [type]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.username.length > 0 && formData.password.length > 0) {
            api.users.login(formData).then((data) => {
                console.log(data);
                if (!data.success) {
                    setPopUp(true);
                } else {
                    navigate({
                        pathname: "/edit"
                    });
                }
            });
        } else {
            setPopUp(true);
        }
    };

    return <>
        <div className="padding-logo-top px-3 pb-5">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="form row">
                    <label htmlFor="username">
                        username*
                        <input type="text" name="username" onChange={(e) => handleFormData(e.target.value, 'username')} />
                    </label>
                </div>
                <div className="form row">
                    <label htmlFor="password">
                        Password*
                        <input type="password" name="password" onChange={(e) => handleFormData(e.target.value, 'password')} />
                    </label>
                </div>
                <div className="form-row">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>

        {popUp && <MpPopUp values={['invalid Username or Password']} setPopUp={setPopUp} />}
    </>;
}


export default Login;