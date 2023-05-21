import { useEffect, useState } from "react";
//import loadProducts from "../../database/loadProducts";
import ProductTile from "./ProductTile";

function Products (props) {
    //const products = loadProducts();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            console.log('asdasd');
            let products = await fetch("http://localhost:5050/products").then(resp => resp.json()); //TODO: setup variables
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