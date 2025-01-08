import styles from './Products.module.css';
import { Star } from 'lucide-react';

function Product({ title, image, price, rating }) {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={image} alt="" />

      <div>{title}</div>

      <div className={styles.footer}>
        <div>${price}</div>
        <div className={styles.rating}>
          <Star strokeWidth={2} size={16} />
          {rating.rate}{' '}
          <span className={styles.ratingCount}>({rating.count})</span>
        </div>
      </div>
    </div>
  );
}

export default function Products({ products, isLoading, error }) {
  if (error) return <div>Failed to Load...</div>;
  if (isLoading) return <div className={styles.loader}></div>;
  console.log(products);
  return (
    <div className={styles.products}>
      {products.map((element) => {
        return (
          <Product
            key={element.id}
            id={element.id}
            title={element.title}
            image={element.image}
            price={element.price}
            rating={element.rating}
          />
        );
      })}
    </div>
  );
}
