import { useState } from "react";
import products from './products';
import ProductItem from "./ProductItem";


const ProductList = () => {
    const [productTemplate, setProductTemplate] = useState(products);

    return (
        <div className="productItem">
            <ProductItem productTemplate={productTemplate} suggest="You may also like" />
            <ProductItem productTemplate={productTemplate.filter((sales) => sales.title === "Aby Naturals")} suggest="Flash Sales" />
        </div>
    )
}
export default ProductList;