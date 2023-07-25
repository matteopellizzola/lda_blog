import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import "./products.scss";

function ProductTile (props) {
    const product = props.product;
    const navigate = useNavigate();

    return <>
        <div className="product-wrapper" key={product._id}>
            <div className="product-inner">
                <h2 className="name-mobile">{product.name}</h2>
                <div className="image">
                    <img src={product.img1} alt='' className='first-image' />
                    <img src={product.img2} alt='' className='second-image' />
                </div>
                <div className="description-container">
                    <div>
                        <h2 className="name-desktop">{product.name}</h2>
                        <div className="description">{product.description ? product.description : ''}</div>

                        <div className="ingredients">
                            <div className="header">Ingredienti</div>
                            <div>{product.ingredients}</div>
                        </div>
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
                    {/* TODO: gestione solo se loggato */}
                    <div>
                        <button onClick={(product) => props.removeProduct(props.product._id)}>remove</button>
                        <button onClick={() => {
                            navigate({
                                pathname: '/edit',
                                search: '?id=' + product._id
                            });
                        }}>Edit</button>
                    </div>
                </div>
            </div>
        </div >
    </>;
}

export default ProductTile;