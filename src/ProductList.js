import { useState } from "react";
import products from './products';


const ProductItem = () => {
    const [productList, setProductList] = useState(products);

    return (
        <div className="productItem">
            {productList.map((list) => (
                <div className="listPreview" key={list.id}>
                    <h2>{list.title}</h2>
                    <p>{list.description}</p>
                    <img src={list.image} alt="" srcset="" />
                    <h3>{list.price}</h3>
                    <p>{list.quantity}</p>
                </div>
            ))}
        </div>
    )
}
export default ProductItem;