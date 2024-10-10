import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { ProductsStoreContext, productStore } from "../../store/products";
import { Helmet } from "react-helmet";

const Listing = observer((props) => {
  const productStore = useContext(ProductsStoreContext);
  const navigate = useNavigate();

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
      <div className="pt-2">
        {productStore.products && !productStore.loading ? (
          <div className="listing-wrapper">
            {productStore.products.map((product) => {
              return (
                product.online && (
                  <div className="product-tile-wrapper">
                    <div
                      className="content"
                      onClick={() =>
                        navigate("/products/details#" + product._id)
                      }
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
    </>
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
