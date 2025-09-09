import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
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
          <Link to="/">Главная</Link>
          <Link to="/categories">Категории</Link>
          <Link to="/allProducts">Все продукты</Link>
          <Link to="/allSales">Все акции</Link>
        </nav>
        <Link to="/cart" className={styles.cart}>
          <img src={BasketIcon} alt="Basket" />
          {cartCount > 0 && <span className={styles.count}>{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;
