import styles from "./AllSales.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thanks";
import ProductCard from "../../components/productCard/ProductCard";
import { useEffect } from "react";

function AllSales() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const discountedProducts = items.filter((product) => product.discount);

  if (loading) return <p>Loading discounted products...</p>;
  return (
    <div className={styles.allSales}>
      <div className={styles.salesButton}>
        <button>Main page</button>
        <button>All sales</button>
      </div>
      <h2>Discounted items</h2>
      <div className={styles.salesPrice}>
        <span>Price</span>
        <input type="number" placeholder="from" />
        <input type="number" placeholder="to" />
      </div>
      <div className={styles.salesSorted}>
        <span>Sorted</span>
        <input type="text" placeholder="by default" />
      </div>

      {discountedProducts.length === 0 ? (
        <p>No sales available right now. Check back soon!</p>
      ) : (
        <div className={styles.salesGrid}>
          {discountedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllSales;
