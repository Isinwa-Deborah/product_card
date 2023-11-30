const ProductItem = ({ product, handleClick }) => {


    const { title, description, image, price, quantity } = product;
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
