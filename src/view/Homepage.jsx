import styles from './Homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.imageSection}>
        <img className={styles.image} src="../assets/homepage.jpg" alt="" />
      </div>
      <div className={styles.heroWriteup}>
        <h2>Welcome to Odin Store – Your One-Stop Shop for Everything!</h2>
        <p>
          Discover the latest in jewelry, electronics, clothes and many more.
          From handpicked, high-quality products to exclusive deals, we’ve got
          everything you need to elevate your style and simplify your life. Shop
          now and experience convenience, quality, and unbeatable prices!
        </p>
        <h2>✨ Free Shipping | 🎉 Exclusive Discounts | 💳 Secure Checkout</h2>
      </div>
    </div>
  );
}
