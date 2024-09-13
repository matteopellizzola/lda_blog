import { useState } from "react";

const apiUrl =
  import.meta.env.VITE_REACT_APP_API_PUBLIC_URL || "http://localhost:5050";

function Edit2() {
  //const [image, setImage] = useState({});
  const [img1Path, setImg1Path] = useState("");

  async function submit(image) {
    var formData = new FormData();
    formData.append("image", image);
    formData.append("description", "myDescription");

    new Promise((resolve, reject) => {
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
    }).then((result) => {
      console.log(result);
      setImg1Path(result.secure_url);
    });
  }

  return (
    <form action="">
      <input type="file" onChange={(e) => submit(e.currentTarget.files[0])} />
      <input type="text" value={img1Path} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Edit2;
