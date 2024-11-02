import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Spinner from "../components/Spinner";
import MpPopUp from "../components/MpPopUp";
import { useUser } from "../../contexts/userContext";
import { ProductsStoreContext } from "../../store/products";
import { observer } from "mobx-react";
import classNames from "classnames";

const EditProductsToBuy = observer((props) => {
  const initialFormState = {
    name: "",
    online: true,
    price: "",
    order: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [popUp, setPopUp] = useState(false);
  const queryID = searchParams.get("id");
  const navigate = useNavigate();
  const { loggedIn } = useUser();
  const productStore = useContext(ProductsStoreContext);

  useEffect(() => {
    getData();
    loadList();
  }, [loggedIn, queryID]);

  async function getData() {
    if (queryID) {
      setIsLoading(true);
      api.products.getProductToBuy(queryID).then((data) => {
        if (data) {
          setFormData(data);
          setIsLoading(false);
        }
      });
    }
  }

  async function loadList() {
    productStore.fetchProductsToBuy();
  }

  async function createData() {
    if (!formData.name || !formData.price) {
      setPopUp(true);
      return;
    }

    setIsLoading(true);

    if (!queryID) {
      api.products.addProductToBuy(formData).then((data) => {
        setIsLoading(false);
        if (data.acknowledged) {
          setFormData(initialFormState);
          productStore.fetchProductsToBuy(true);
        } else if (!data.success) {
          setPopUp(true);
        }
      });
    } else {
      delete formData._id;
      api.products.editProductToBuy(formData, queryID).then((data) => {
        setIsLoading(false);
        if (data.acknowledged) {
          setFormData(initialFormState);
          productStore.fetchProductsToBuy(true);
          searchParams.delete("id");
          setSearchParams(searchParams);
        } else if (!data.success) {
          setPopUp(true);
        }
      });
    }
  }

  async function deleteProduct(id) {
    api.products.removeProductToBuy(id).then((data) => {
      productStore.fetchProductsToBuy(true);
    });
  }

  if (!loggedIn) {
    return <></>;
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
        <h2>Insert a product for reservation</h2>
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
        <div className="form-row d-block">
          <label htmlFor="#productPrice">Product Price</label>
          <input
            type="text"
            id="productPrice"
            onChange={(e) => {
              console.log(e.target.value.replace(",", ".")),
                setFormData({
                  ...formData,
                  price: e.target.value.replace(",", "."),
                });
            }}
            placeholder="Product Price"
            value={formData.price}
          />
        </div>
        <div className="form-row d-block">
          <label htmlFor="#productName">Product Image</label>
          <input
            type="text"
            id="productImage"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            placeholder="Product Image"
            value={formData.image}
          />
        </div>

        <div className="form-row d-block">
          <label htmlFor="#order">Order number in list</label>
          <input
            id="order"
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, order: e.target.value })
            }
            placeholder="1 for first position, 9 for last..."
            value={formData.order}
          />
        </div>

        {/* <input type='file' onChange={(e) => onChange(e, "img1")} placeholder="Primary Image" />
                <input type='file' onChange={(e) => onChange(e, "img2")} placeholder="Primary Image" /> */}

        <button className="button btn-submit mb-5" onClick={createData}>
          Save
        </button>
      </div>

      {productStore.productsToBuy && productStore.productsToBuy.length > 0 && (
        <div className="list">
          <h2>Products to buy</h2>
          <div className="row mb-5">
            {productStore.productsToBuy.map((product) => (
              <ProductToBuy
                product={product}
                key={product._id}
                deleteProduct={deleteProduct}
                setSearchParams={setSearchParams}
              />
            ))}
          </div>
        </div>
      )}

      {/* {todoRecord.map((e) => <ProductTile product={e} getData={getData} user={user} formData={formData} setFormData={setFormData} />)} */}

      {popUp && (
        <MpPopUp values={["Error: not authorized"]} setPopUp={setPopUp} />
      )}
    </div>
  );
});

const ProductToBuy = ({ product, deleteProduct, setSearchParams }) => {
  return (
    <div className="card col-4 col-lg-2 product-wrapper">
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <div>
        image: {product.image}
        {/* <img src={product.image} /> */}
      </div>
      <div className="logged-infos">
        <div>Order: {product.order || "auto"}</div>
        <div
          className={classNames(
            "online-info",
            product.online ? "online" : "offline"
          )}
        >
          {product.online ? "online" : "offline"}
        </div>
        <div>ID: {product._id}</div>
        <div className="row">
          <button
            className="btn btn-primary col mb-0"
            onClick={() => {
              setSearchParams({ id: product._id });
            }}
          >
            EDIT
          </button>
          <button
            className="btn btn-secondary col"
            onClick={() => deleteProduct(product._id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductsToBuy;
