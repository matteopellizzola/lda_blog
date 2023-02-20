import loadProducts from "../../database/loadProducts";
import ProductTile from "./ProductTile";

function Products (props) {
    const products = loadProducts();

    return <>
        {products.productsList.map(product => <ProductTile product={product} />)}
    </>;
}

export default Products;