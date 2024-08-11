const apiUrl = process.env.REACT_APP_API_PUBLIC_URL;

const products = {

    loadProducts: () => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + "/products")
                .then((res) => {
                    resolve(res.json());
                })
                .catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    getProduct: (id) => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + `/products/${id}`)
                .then((res) => {
                    resolve(res.json());
                })
                .catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    addProduct: (formData) => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + "/products", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            }).then((res) => {
                resolve(res.json());
            }).catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    editProduct: (formData, id) => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + `/products/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            }).then((res) => {
                if (res.status === 200) {
                    resolve(res.json());
                } else {
                    resolve({ success: false });
                }
            }).catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    removeProduct: (id) => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + `/products/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                resolve(res.json());
            }).catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    }

};

export default products;