import React, { useEffect, useState } from "react";
//import loadProducts from "../../database/loadProducts";
import ProductTile from "./ProductTile";
import api from "../../services/api";

function Products (props) {
    //const products = loadProducts();
    const [products, setProducts] = useState([]);
    const apiUrl = process.env.REACT_APP_API_PUBLIC_URL || "http://localhost:5050";

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts () {
        api.products.loadProducts().then((data) => {
            console.log(data);
            setProducts(data);
        });
    }

    async function removeProduct (id) {
        api.products.removeProduct(id).then((data) => {
            getProducts();
        });
    };

    return <>
        {products ? products.map(product => <ProductTile product={product} removeProduct={removeProduct} />) : <div>no data</div>}
    </>;
}

export default Products;