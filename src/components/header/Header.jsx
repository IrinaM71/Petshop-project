import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HundIcon from "../../assets/icons/Hund.svg";
import BasketIcon from "../../assets/icons/Basket.svg";

function Header({ cartCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/" className={styles.logoLink}>
          <img src={HundIcon} alt="Hund" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Main Page</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/allProducts">All products</Link>
          <Link to="/allSales">All sales</Link>
        </nav>
        <Link to="/basket" className={styles.cart}>
          <img src={BasketIcon} alt="Basket" />
          {cartCount > 0 && <span className={styles.count}>{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;
