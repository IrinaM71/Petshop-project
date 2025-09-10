import styles from "./HomePage.module.css";

import AnimalsHome from "../../assets/images/AnimalsHome.png";
import Animals from "../../assets/images/Animals.png";

function HomePage() {
  return (
    <div className={styles.home}>
      <img className={styles.homeImage} src={Animals} alt="Animals" />
      <div className={styles.homeCategories}>
        <span>Categories</span>
        <button className={styles.homaButton}>All categories</button>
      </div>
      <div className={styles.login}>
        <h3>5% off on the first order</h3>
        <div className={styles.image}>
          <img src={AnimalsHome} alt="AnimalsHome" />
          <div className={styles.homeInput}>
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone number" />
            <input type="email" placeholder="Email" />
            <button>Get a discount</button>
          </div>
        </div>
      </div>
      <div className={styles.homeSale}>
        <span>Sale</span>
        <button>All sales</button>
      </div>
    </div>
  );
}

export default HomePage;
