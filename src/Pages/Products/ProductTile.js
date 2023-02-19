function ProductTile (props) {
    console.log(JSON.stringify(props));
    const product = props.product;
    return <>
        <div className="product-wrapper">
            <div className="product-inner">
                <div className="image">
                    <img src="https://picsum.photos/1800/1440" alt='' className='' />
                </div>
                <div className="description-container">
                    <h5 classNameName="name">{product.name}</h5>
                    <div className="description">{product.description ? product.description : ''}</div>

                    <div className="">
                        <div>Ingredienti</div>
                        <div>{product.ingredients}</div>
                    </div>

                    <div className="product-footer">
                        <div className="">
                            {product.bakingDay ? <div><span className="">Sfornato il:</span> {product.bakingDay} </div> : ''}
                        </div>
                        <div className="">
                            {product.shelfLife ? <div><span className="">Conservazione:</span> {product.shelfLife} </div> : ''}
                        </div>

                        <div className="">
                            {product.typeOfCooking ? <div><span className="">Cottura:</span> {product.typeOfCooking} </div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ProductTile;