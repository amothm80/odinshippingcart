import styles from './Footer.module.css';

export default function Footer({ setCategory }) {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.shopName}>Odin's Store</h1>
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
