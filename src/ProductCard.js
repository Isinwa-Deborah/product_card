import { useState } from 'react';
import './App.css';
import image from './assets/melanin.jpg'

const ProductCard = () => {

    const title = "Valina-Soette Cosmetics";
    const tag = "NEW";
    const category = "African Hair Heritage";
    const info = "Description";
    const size = "Size:";
    const price = "$188.99";
    const available = 'Available stock:';
    const selectedOrder = 'Quantity:';

    const [quantity, setQuantity] = useState(0);
    const [stock] = useState(10);

    const handleIncrement = (e) => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = (e) => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleCart = (e) => {
        alert("Product has been added to cart");
    }
    const handleClick = (e) => {
        alert("You liked this product");
    };

    return (
        <div className="card">
            <div className="product_card">
                <img src={image} alt="product" />
            </div>

            <div className="details">
                <div className='title'>
                    <h1>{title} </h1>
                    <h3 style={{ color: 'brown' }}>{tag} </h3>
                </div>

                <h2 style={{ color: '#FDB9C8' }}>{category} </h2>

                <div className='info'>
                    <h2>{info} </h2>
                    <p style={{ marginLeft: '25px', marginRight: '30px', fontSize: '18px' }}>Melanin Haircare Signature Products are designed to Clarify, Moisturize,
                        Nourish and encourage Healthy Hair Growth for ALL TEXTURES! Secure your gifts while
                        there’s still time!</p>

                    <p style={{ marginLeft: '25px', marginRight: '40px', fontSize: '18px' }}>The moisture-rich, leave-in
                        conditioner is designed to soften, smooth, instantly detangle your knots, and help to repair your hair
                        from the inside-out, from roots to ends! This luxurious formula contains some of the most effective
                        hair-strengthening and conditioning agents on the market.</p>
                </div>
                <div className='size' style={{ marginTop: '60px', fontFamily: 'Roboto Condensed' }}>
                    <h2 style={{ color: 'brown' }}>{size}</h2>
                    <p>475ml</p>
                    <h2 style={{ color: 'brown' }}>{available}</h2>
                    <p>{stock}</p>
                </div>
                <div className='price'>
                    <button onClick={handleCart}>Add to Cart</button>
                    <h2>{price} </h2>
                    <div>
                        <button onClick={handleClick}>Like</button>
                        <button onClick={handleIncrement} style={{ backgroundColor: '#2E8B57' }}>Add Quantity</button>
                        <button onClick={handleDecrement} style={{ backgroundColor: 'brown' }}>Reduce Quantity</button>
                    </div>
                </div>

                <div className='choice'>
                    <h2 style={{ marginTop: '20px', fontFamily: 'Roboto Condensed' }}> {selectedOrder}</h2>
                    <p>{quantity}</p>
                </div>
            </div>


        </div>
    );
}

export default ProductCard;