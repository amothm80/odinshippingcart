import { useProductsForCategory } from '/src/api/useProductsForCategory';
import styles from './Products.module.css';
import { Star } from 'lucide-react';
// import PropTypes from 'prop-types';

function Rating(rating){
  // return(<><Star fill='yellow'/><Star/><Star/></>)
  return(

    [...Array(3).keys()].map(key => <Star key={key}/>)
    
    )

}

function Product({ title, image, price, rating }) {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={image} alt="" />
      <div>{title}</div>
      <div>
        <Rating/> Count: {rating.count}
      </div>
      <div>${price}</div>
    </div>
  );
}

// Product.PropTypes = {
//   title: PropTypes.string,
//   image: PropTypes.object,


// }

export default function Products() {
  const { products, isLoading, error } =
    useProductsForCategory(`men's clothing`);

  if (error) return <div>Failed to Load...</div>;
  if (isLoading) return <div>Loading...</div>;
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
