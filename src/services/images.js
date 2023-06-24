const apiUrl = process.env.REACT_APP_API_PUBLIC_URL || "http://localhost:5050";

const images = {

    getUrl: () => {
        return new Promise((resolve, reject) => {
            //TODO:gestirlo dinamico
            var formData = {
                "public_id": "y4kjzyepdmtcbenplpnp"
            };

            fetch(apiUrl + "/images/url", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then((res) => {
                    resolve(res.json());
                })
                .catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    uploadImage: (img) => {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            formData.append("image", img);

            const obj = {
                lastModified: img.lastModified,
                name: img.name,
                size: img.size,
                type: img.type,
                webkitRelativePath: img.webkitRelativePath,
            };

            fetch(apiUrl + "/images/upload", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(obj)
            })
                .then((res) => {
                    resolve(res.json());
                })
                .catch(err => reject(err.response ? err.response.data.error : err.message));
        });
    },

    // addProduct: (formData) => {
    //     return new Promise((resolve, reject) => {
    //         fetch(apiUrl + "/products", {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json"
    //             },
    //             body: JSON.stringify(formData)
    //         }).then((res) => {
    //             resolve(res.json());
    //         }).catch(err => reject(err.response ? err.response.data.error : err.message));
    //     });
    // },

    // removeProduct: (id) => {
    //     return new Promise((resolve, reject) => {
    //         fetch(apiUrl + `/products/${id}`, {
    //             method: "DELETE"
    //         }).then((res) => {
    //             resolve(res.json());
    //         }).catch(err => reject(err.response ? err.response.data.error : err.message));
    //     });
    // }

};

export default images;