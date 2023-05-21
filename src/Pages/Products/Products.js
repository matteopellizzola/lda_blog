import { useEffect, useState } from "react";
//import loadProducts from "../../database/loadProducts";
import ProductTile from "./ProductTile";

function Products (props) {
    //const products = loadProducts();
    const [products, setProducts] = useState([]);
    const apiUrl = process.env.REACT_APP_API_PUBLIC_URL || "http://localhost:5050";

    useEffect(() => {
        const loadProducts = async () => {
            console.log(process.env.REACT_APP_API_PUBLIC_URL + 'asdasd');
            let products = await fetch(process.env.REACT_APP_API_PUBLIC_URL + "/products").then(resp => resp.json()); //TODO: setup variables
            setProducts(products);

            console.log(products);
        };

        loadProducts();
    }, []);

    return <>
        {products ? products.map(product => <ProductTile product={product} />) : <div>no data</div>}
    </>;
}

export default Products;