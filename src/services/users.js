const apiUrl = process.env.REACT_APP_API_PUBLIC_URL;

const users = {

    login: (formData) => {
        return new Promise((resolve, reject) => {
            // axios.post(`${apiUrl}/users/login`, formData, { withCredentials: true })
            //     .then(res => resolve(res.data))
            //     .catch(err => reject(err.response ? err.response.data.error : err.message));
            fetch(apiUrl + "/users/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                //credentials: 'include',
                body: JSON.stringify(formData)
                //body: JSON.stringify({ username: 'matteoCrypto1', password: 'Prova@1234' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        localStorage.setItem('token', data.token);
                    }
                    resolve(data);
                })
                .catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    isLoggedIn: (withUserData) => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + "/users/loggedIn", {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
                .then((res) => {
                    if (withUserData) {
                        resolve(res.json());
                    } else {
                        resolve(res.status);
                    }
                })
                .catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    logout: () => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + "/users/logout")
                .then((res) => {
                    localStorage.setItem('token', '');
                    resolve(res.json);
                })
                .catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    }
};

export default users;