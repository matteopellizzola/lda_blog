import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { ProductsStoreContext, productStore } from "../../store/products";

const Listing = observer((props) => {
  const productStore = useContext(ProductsStoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    productStore.fetchProducts();
  }, []);

  return (
    <div className="pt-2">
      {productStore.products && !productStore.loading ? (
        <div className="listing-wrapper">
          {productStore.products.map((product) => {
            return (
              product.online && (
                <div className="product-tile-wrapper">
                  <div
                    className="content"
                    onClick={() => navigate("/products/details#" + product._id)}
                  >
                    <div className="image-wrapper">
                      <img
                        src={product.img1}
                        alt={product.name + "image"}
                        className="first-image"
                      />
                    </div>
                    <div className="product-name">
                      <span className="text">{product.name}</span>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      ) : (
        <div className="pt-2">
          {/* TODO: fixxx */}
          <LoadingComponent />
        </div>
      )}
    </div>
  );
});

function LoadingComponent() {
  return (
    <div className="listing-wrapper">
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
      <div className="listing-wrapper data-loading-tile"></div>
    </div>
  );
}

export default Listing;
