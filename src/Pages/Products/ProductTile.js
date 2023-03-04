import { DataStore } from "aws-amplify";
import "./products.scss";
import { Product } from "../../models";

function ProductTile (props) {
    console.log(JSON.stringify(props));
    const product = props.product;
    return <>
        <div className="product-wrapper">
            <div className="product-inner">
                <div className="image">
                    <img src="https://picsum.photos/1800/1440" alt='' className='first-image' />
                    <img src="https://picsum.photos/1801/1441" alt='' className='second-image' />
                </div>
                <div className="description-container">
                    <h2 className="name">{product.name}</h2>
                    <div className="description">{product.description ? product.description : ''}</div>

                    <div className="ingredients">
                        <div className="header">Ingredienti</div>
                        <div>{product.ingredients}</div>
                    </div>

                    <div className="product-footer">
                        <div className="left-footer">
                            <div className="">
                                {product.bakingDay ? <div><span className="header">Sfornato il:</span> {product.bakingDay} </div> : ''}
                            </div>
                            <div className="">
                                {product.shelfLife ? <div><span className="header">Conservazione:</span> {product.shelfLife} </div> : ''}
                            </div>
                        </div>

                        <div className="right-footer">
                            {product.typeOfCooking ? <div><span className="header">Cottura:</span> {product.typeOfCooking} </div> : ''}
                        </div>
                    </div>
                </div>
            </div>

            {props.user && <button onClick={async () => {
                const productToDelete = await DataStore.query(Product, product.id);
                DataStore.delete(productToDelete);
                window.location.reload(false);
            }}>Delete</button>}
        </div>
    </>;
}

export default ProductTile;