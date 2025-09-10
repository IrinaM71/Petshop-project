import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.productCard}>
      {product.discount && <span className={styles.badge}>Sale</span>}
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <h3>{product.title}</h3>
      <p className={styles.productPrice}>
        {product.discount ? (
          <>
            <span className={styles.oldPrice}>${product.price}</span>
            {""}
            <span className={styles.newPrice}>
              ${(product.price * (1 - product.discount)).toFixed(2)}
            </span>
          </>
        ) : (
          <>{product.price}</>
        )}
      </p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
