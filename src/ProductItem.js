const ProductItem = ({ products, handleClick }) => {


    const { title, description, image, price, quantity } = products;
    return (
        <div className="listPreview">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt="" />
            <h3>{price}</h3>
            <p>{quantity}</p>
            <button className="product_btn" onClick={handleClick}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
