const apiUrl = process.env.REACT_APP_API_PUBLIC_URL;

const users = {

    login: (formData) => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + "/users/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            })
                .then((res) => {
                    if (res.ok) {
                        resolve(res.json());
                    } else {
                        resolve({
                            error: true,
                            msg: 'invalid email or password'
                        });
                    }
                })
                .catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    isLoggedIn: () => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + "/users", {
                credentials: "include"
            }).then((res) => {
                resolve(res.json());
            });
        });
    }
};

export default users;