import styles from "./AllProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thanks";
import ProductCard from "../../components/productCard/ProductCard";
import { useEffect } from "react";

function AllProducts() {
  const dispatch = useDispatch();
  const {
    itams: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;
  if (!products || products.length === 0)
    return <p>No products available at the moment</p>;

  return (
    <div className={styles.allProducts}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
