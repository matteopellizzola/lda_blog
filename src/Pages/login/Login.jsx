import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


function Login (props) {
    const navigate = useNavigate();

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
        console.log(formData);

        if (formData.username.length > 0 && formData.password.length > 0) {
            api.users.login(formData).then((data) => {
                console.log(data);
                if (data.error) {
                    console.log(data.error);
                } else {
                    navigate({
                        pathname: "/edit"
                    });
                }
            });
        } else {
            alert('invalid email or password'); //@todo gestire con popup
        }
    };

    return <>
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
    </>;
}

export default Login;