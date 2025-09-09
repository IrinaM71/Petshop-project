import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { Cartprovider } from "./context/CartContext";

function App() {
  return (
    <Cartprovider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/:categoryId"
            element={<CategoryProducts />}
          />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/allSales" element={<AllSales />} />
          <Route path="/products/productsId:" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Cartprovider>
  );
}

export default App;
