import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return <button onClick={() => addToCart(product)}>Добавить в корзину</button>;
}

export default ProductCard;
