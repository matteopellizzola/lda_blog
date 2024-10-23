import React, { useContext, useEffect, useState } from "react";
//import loadProducts from "../../database/loadProducts";
import ProductTile from "./ProductTile";
import api from "../../services/api";
import ProductsLoadingTile from "./ProductsLoadingTile";
import { useUser } from "../../contexts/userContext";
import { observer } from "mobx-react";
import { ProductsStoreContext } from "../../store/products";
import { Helmet } from "react-helmet";

const Products = observer((props) => {
  //const products = loadProducts();
  const { loggedIn } = useUser();
  const productStore = useContext(ProductsStoreContext);

  async function removeProduct(id) {
    api.products.removeProduct(id).then((data) => {
      productStore.fetchProducts(true);
    });
  }

  useEffect(() => {
    productStore.fetchProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Prodotti | Laboratorio di Antonella</title>
        <meta name="description" content="Scopri i miei prodotti" />
        <meta
          name="keywords"
          content="Pane, grani antichi, prodotti da forno"
        />
        <link rel="canonical" href="https://www.laboratoriodiantonella.it/" />

        {/* Meta tag Open Graph per la condivisione sui social */}
        <meta
          property="og:title"
          content="Prodotti | Laboratorio di Antonella"
        />
        <meta
          property="og:description"
          content="Scopri i prodotti del laboratorio di Antonella"
        />
        <meta
          property="og:url"
          content="https://www.laboratoriodiantonella.it/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.laboratoriodiantonella.it/apple-icon-180x180.png"
        />
      </Helmet>
      {productStore.products && !productStore.loading ? (
        productStore.products.map((product) => (
          <ProductTile
            key={product._id}
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
