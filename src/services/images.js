const apiUrl =
  import.meta.env.VITE_REACT_APP_API_PUBLIC_URL || "http://localhost:5050";

const images = {
  getUrl: () => {
    return new Promise((resolve, reject) => {
      //TODO:gestirlo dinamico
      var formData = {
        public_id: "y4kjzyepdmtcbenplpnp",
      };

      fetch(apiUrl + "/images/url", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          resolve(res.json());
        })
        .catch((err) =>
          reject(err.response ? err.response.data.error : err.message),
        );
    });
  },

  uploadImage: (img) => {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      formData.append("image", img);

      fetch(apiUrl + "/images/upload", {
        method: "POST",
        headers: {},
        body: formData,
      })
        .then((res) => {
          resolve(res.json());
        })
        .catch((err) =>
          reject(err.response ? err.response.data.error : err.message),
        );
    });
  },
};

export default images;
