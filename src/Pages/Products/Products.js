import React, { useEffect, useState } from "react";
//import loadProducts from "../../database/loadProducts";
import ProductTile from "./ProductTile";
import api from "../../services/api";
import Spinner from "../components/Spinner";

function Products (props) {
    //const products = loadProducts();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        api.users.isLoggedIn().then(status => {
            if (status == 200) {
                setIsLoggedIn(true);
            }
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        getProducts();
    }, []);

    async function getProducts () {
        api.products.loadProducts().then((data) => {
            setProducts(data);
            setIsLoading(false);
        });
    }

    async function removeProduct (id) {
        api.products.removeProduct(id).then((data) => {
            getProducts();
        });
    };

    return <>
        {products && !isLoading ? products.map(product => <ProductTile product={product} removeProduct={removeProduct} isLoggedIn={isLoggedIn} />) : <div className="padding-logo-top"><Spinner /></div>}
    </>;
}

export default Products;