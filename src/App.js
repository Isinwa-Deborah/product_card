import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import products from "./products";

function App() {

  return (
    <div className="app">
      <ProductCard />

      <div className="product_suggestion">
        <h1>You may also like</h1>
        <ProductList products={products} />
      </div>

      <div className="product_suggestion">
        <h1>Flash Sales</h1>
        <ProductList products={products.filter((sales) => sales.title === "Aby Naturals")} />
      </div>
    </div>
  );
}

export default App;
