import styles from './Products.module.css';
import { Star } from 'lucide-react';
import { useParams } from 'react-router';
import { useProductsForCategory } from '/src/api/useProductsForCategory';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

function Product({id, title, image, price, rating }) {
  return (
    <Link to={`/product/${id}`} className={styles.product}>
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
    </Link>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
}

export default function Products() {
  let { category } = useParams();
  const { products, isLoading, error } = useProductsForCategory(category);
  if (error) return <div>Failed to Load...</div>;
  if (isLoading) return <div className={styles.loader}></div>;
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
