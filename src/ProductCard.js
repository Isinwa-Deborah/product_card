import './App.css';
import image from './assets/melanin.jpg'

const ProductCard = () => {

    const title = "Valina-Soette Cosmetics";
    const tag = "NEW";
    const category = "African Hair Heritage";
    const info = "Description";
    const size = "Size:";
    const price = "$188.99";

    const handleClick = (e) => {
        alert("You liked this product");
    }

    return (
        <div className="container">
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
                    <div className='size'>
                        <h2 style={{ marginTop: '18px', fontFamily: 'Roboto Condensed', color: 'brown' }}>{size}</h2>
                        <p>475ml</p>
                    </div>
                    <div className='price'>
                        <button>Add to Cart</button>
                        <h2>{price} </h2>
                        <button onClick={handleClick}>Like</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ProductCard;