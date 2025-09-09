import styles from "./Basket.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Basket() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className={styles.bascet}>
      {cart.length === 0 ? (
        <p>Basket is emty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} items
                <button onClick={() => removeFromCart(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <p>Total ${total}</p>
          <button onClick={clearCart}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Basket;
