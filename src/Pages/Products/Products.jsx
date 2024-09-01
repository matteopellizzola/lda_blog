import React, { useContext, useEffect, useState } from "react";
//import loadProducts from "../../database/loadProducts";
import ProductTile from "./ProductTile";
import api from "../../services/api";
import ProductsLoadingTile from "./ProductsLoadingTile";
import { useUser } from "../../contexts/userContext";
import { observer, Provider } from "mobx-react";
import { ProductsStoreContext, productStore } from "../../store/products";

const Products = observer((props) => {
  //const products = loadProducts();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedIn } = useUser();
  const productStore = useContext(ProductsStoreContext);

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, []);

  function getProducts() {
    productStore.fetchProducts();
  }

  async function removeProduct(id) {
    api.products.removeProduct(id).then((data) => {
      getProducts();
    });
  }

  useEffect(() => {
    productStore.fetchProducts();
  }, []);

  return (
    <>
      {productStore.products && !productStore.loading ? (
        productStore.products.map((product) => (
          <ProductTile
            key={product.id}
            product={product}
            removeProduct={removeProduct}
            isLoggedIn={loggedIn}
          />
        ))
      ) : (
        <div className="padding-logo-top">
          <LoadingComponent />
        </div>
      )}
    </>
  );
});

function LoadingComponent() {
  return (
    <>
      <ProductsLoadingTile />
      <ProductsLoadingTile />
      <ProductsLoadingTile />
      <ProductsLoadingTile />
    </>
  );
}

export default Products;
