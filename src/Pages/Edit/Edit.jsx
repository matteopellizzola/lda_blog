import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./edit.scss";
import api from "../../services/api";
import Spinner from "../components/Spinner";
import MpPopUp from "../components/MpPopUp";
import { useUser } from "../../contexts/userContext";

function Edit(props) {
  const initialFormState = {
    name: "",
    description: "",
    ingredients: "",
    bakingDay: "",
    typeOfCooking: "",
    shelfLife: "",
    img1: "",
    img2: "",
    online: true,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const queryID = searchParams.get("id");
  const navigate = useNavigate();
  const { loggedIn } = useUser();

  useEffect(() => {
    if (!loggedIn) {
      navigate({
        pathname: "/login",
      });
    } else {
      setIsLoggedIn(true);
      setIsLoading(false);
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  async function getData() {
    if (queryID) {
      setIsLoading(true);
      api.products.getProduct(queryID).then((data) => {
        if (data) {
          setFormData(data);
          setIsLoading(false);
        }
      });
    }
  }

  async function uploadImage(file, imageType) {
    setIsLoading(true);
    api.images
      .uploadImage(file)
      .then((res) => {
        console.log(res);
        console.log(imageType);
        if (res.secure_url) {
          setFormData({ ...formData, [imageType]: res.secure_url });
          setIsLoading(false);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        alert(e);
      });
  }

  async function createData() {
    if (!formData.name || !formData.description) return;

    if (!isLoggedIn) return;

    setIsLoading(true);

    if (!queryID) {
      api.products.addProduct(formData).then((data) => {
        setIsLoading(false);
        if (data.acknowledged) {
          console.log("done");
          setFormData(initialFormState);
          console.log(JSON.stringify(formData));
        } else if (!data.success) {
          setPopUp(true);
        }
      });
    } else {
      delete formData._id;
      api.products.editProduct(formData, queryID).then((data) => {
        setIsLoading(false);
        if (data.acknowledged) {
          console.log("done");
          setFormData(initialFormState);
          searchParams.delete("id");
          setSearchParams(searchParams);
          console.log(JSON.stringify(formData));
        } else if (!data.success) {
          setPopUp(true);
        }
      });
    }
  }

  return (
    <div className="px-3">
      {isLoading && (
        <div className="spinner-loading-form">
          <Spinner />
        </div>
      )}
      <hr />
      <div className="form">
        <h2>Insert new product</h2>
        <div className="form-row d-block">
          <label htmlFor="#productName">Product Name</label>
          <input
            type="text"
            id="productName"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Product Name"
            value={formData.name}
          />
        </div>
        <div className="form-row mb-2 d-block">
          <input
            type="checkbox"
            id="onlineFlag"
            className="mx-2"
            onChange={(e) =>
              setFormData({ ...formData, online: e.target.checked })
            }
            placeholder="online flag"
            checked={formData.online}
            value={formData.online}
          />
          <label htmlFor="#onlineFlag">Online Product</label>
        </div>
        <div className="form-row d-flex">
          <div className="w-100">
            <label htmlFor="#description">Decscription</label>
            <textarea
              id="description"
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
                console.log(formData.description);
              }}
              placeholder="Description"
              value={formData.description}
            />
          </div>
        </div>
        <div className="form-row d-flex">
          <div className="w-100">
            <label htmlFor="#ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              onChange={(e) =>
                setFormData({ ...formData, ingredients: e.target.value })
              }
              placeholder="Ingredients"
              value={formData.ingredients}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="three-input">
            <label htmlFor="#bakingDay">Baking Day</label>
            <input
              id="bakingDay"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, bakingDay: e.target.value })
              }
              placeholder="Baking Day"
              value={formData.bakingDay}
            />
          </div>
          <div className="three-input">
            <label htmlFor="#typeOfCooking">Type of Cooking</label>
            <input
              id="typeOfCooking"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, typeOfCooking: e.target.value })
              }
              placeholder="Type Of Cooking"
              value={formData.typeOfCooking}
            />
          </div>
          <div className="three-input">
            <label htmlFor="#shelfLife">Shelf Life</label>
            <input
              id="shelfLife"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, shelfLife: e.target.value })
              }
              placeholder="Shelf Life"
              value={formData.shelfLife}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="mid-input">
            <label htmlFor="#img1">
              First image, select file to upload or paste url
            </label>
            <br />
            <input
              type="file"
              onChange={(e) => uploadImage(e.target.files[0], "img1")}
              placeholder="Insert url"
            />
            <input
              id="img1"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, img1: e.target.value })
              }
              placeholder="Insert url"
              value={formData.img1}
            />
          </div>
          <div className="mid-input">
            <label htmlFor="#img2">
              Second image, select file to upload or paste url
            </label>
            <br />
            <input
              type="file"
              onChange={(e) => uploadImage(e.target.files[0], "img2")}
              placeholder="Insert url"
            />
            <input
              id="img2"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, img2: e.target.value })
              }
              placeholder="Insert url"
              value={formData.img2}
            />
          </div>
        </div>

        {/* <input type='file' onChange={(e) => onChange(e, "img1")} placeholder="Primary Image" />
                <input type='file' onChange={(e) => onChange(e, "img2")} placeholder="Primary Image" /> */}

        <button className="button btn-submit btn" onClick={createData}>
          Save
        </button>
      </div>

      {/* {todoRecord.map((e) => <ProductTile product={e} getData={getData} user={user} formData={formData} setFormData={setFormData} />)} */}

      {popUp && (
        <MpPopUp values={["Error: not authorized"]} setPopUp={setPopUp} />
      )}
    </div>
  );
}

export default Edit;
