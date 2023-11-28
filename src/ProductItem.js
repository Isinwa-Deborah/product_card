const ProductItem = ({ productTemplate, suggest }) => {
    return (
        <div className="product_suggestion">
            <h1>{suggest}</h1>
            <div className="product_item">
                {productTemplate.map((list) => (
                    <div className="listPreview" key={list.id}>
                        <h2>{list.title}</h2>
                        <p>{list.description}</p>
                        <img src={list.image} alt="" srcset="" />
                        <h3>{list.price}</h3>
                        <p>{list.quantity}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ProductItem;
