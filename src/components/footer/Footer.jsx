import styles from "./Footer.module.css";
import InstagramIcon from "../../assets/icons/Instagram.svg";
import WhatsappIcon from "../../assets/images/Whatsapp.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p>
          Phone <br /> +49 30 915-88492
        </p>
        <p>
          Social
          <br />
          <img src={InstagramIcon} alt="Instagram" />
          <img src={WhatsappIcon} alt="Whatsapp" />
        </p>
        <p>
          Address <br /> Wallstrasse 9-13, 10179 Berlin, Deutschland
        </p>
        <p>
          Working Hours <br />
          24 hours a day
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Местоположение"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
