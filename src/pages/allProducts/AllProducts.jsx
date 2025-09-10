import styles from "./AllProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thanks";
import ProductCard from "../../components/productCard/ProductCard";
import { useEffect } from "react";

function AllProducts() {
  const dispatch = useDispatch();
  const { itams, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className={styles.allProducts}>
      {itams.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
