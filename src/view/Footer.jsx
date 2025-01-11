import styles from "./Footer.module.css";
import { Link } from "react-router";
import logo from '../assets/Ocropped.png'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.shopLogo} to="/">
        <img className={styles.shopImg} src={logo} />
      </Link>
      <div className={styles.footerLinks}>
        <a className={styles.link} href="#">
          Privacy Policy
        </a>
        <a className={styles.link} href="#">
          Terms of Service
        </a>
        <a className={styles.link} href="#">
          Cookie Settings
        </a>
      </div>
    </footer>
  );
}
