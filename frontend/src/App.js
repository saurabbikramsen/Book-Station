import data from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">BookStation</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <h1>Best Seller</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>Rs{product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
