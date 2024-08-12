import React from "react";
import "./loading.scss";

function ProductsLoadingTile() {
  return (
    <div className="data-loading-products">
      <div className="data-image"></div>
      <div className="data-text">
        <div className="text-item"></div>
        <div className="text-item"></div>
        <div className="text-item"></div>
        <div className="text-item"></div>
      </div>
    </div>
  );
}

export default ProductsLoadingTile;
