import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import CartProvider from "./context/CartContext";
import HomePage from "./pages/homePage/HomePage";
import Categories from "./pages/categories/Categories";
import AllProducts from "./pages/allProducts/AllProducts";
import AllSales from "./pages/allSales/AllSales";
import Products from "./pages/products/Products";
import Basket from "./pages/basket/Basket";
import ErrorPage from "./pages/errorPage/ErrorPage";
import CategoryProducts from "./pages/categoryProducts/CategoryProducts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/:categoryId"
            element={<CategoryProducts />}
          />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/allSales" element={<AllSales />} />
          <Route path="/products/:productsId" element={<Products />} />

          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
