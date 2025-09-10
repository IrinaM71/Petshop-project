import styles from "./Footer.module.css";
import InstagramIcon from "../../assets/icons/Instagram.svg";
import WhatsAppIcon from "../../assets/icons/WhatsApp.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerTitle}>Contact</h2>
      <div className={styles.contact}>
        <p>
          <span>Phone</span> <br /> +49 30 915-88492
        </p>
        <p>
          <span>Socials</span>
          <br />
          <img src={InstagramIcon} alt="Instagram" />
          <img src={WhatsAppIcon} alt="Whatsapp" />
        </p>
        <p>
          <span>Address</span> <br /> Wallstrasse 9-13, 10179 Berlin,
          Deutschland
        </p>
        <p>
          <span>Working Hours</span> <br />
          24 hours a day
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="1360"
          height="350"
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
