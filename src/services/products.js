const apiUrl = process.env.REACT_APP_API_PUBLIC_URL || "http://localhost:5050";

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
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then((res) => {
                resolve(res.json());
            }).catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    removeProduct: (id) => {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + `/products/${id}`, {
                method: "DELETE"
            }).then((res) => {
                resolve(res.json());
            }).catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    }

};

export default products;