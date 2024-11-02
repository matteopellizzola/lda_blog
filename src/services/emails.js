const apiUrl = import.meta.env.VITE_REACT_APP_API_PUBLIC_URL;

const emails = {
  sendConfirmation: (formData) => {
    return new Promise((resolve, reject) => {
      fetch(apiUrl + "/email/confirm", {
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
          reject(err.response ? err.response.data.error : err.message)
        );
    });
  },
};

export default emails;
