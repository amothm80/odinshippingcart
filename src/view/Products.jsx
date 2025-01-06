import { useProductsForCategory } from "/src/api/useProductsForCategory";
import styles from "./Products.module.css";
import { Star, StarHalfIcon } from "lucide-react";
// import PropTypes from 'prop-types';

function Rating({ rating }) {
  // console.log(`rating: ${rating}`);
  const fullStars = Math.floor(rating);
  const halfStar = rating - Math.floor(rating) > 0.2;
  const emptyStars = halfStar ? 5 - fullStars - 1 : 5 - fullStars;
  // console.log(
  //   `fullstars: ${fullStars}, halfstar: ${halfStar}, emptystars: ${emptyStars}`
  // );
  // return(<><Star fill='yellow'/><Star/><Star/></>)
  return (
    <>


        {fullStars
          ? [...Array(fullStars).keys()].map((key) => (
              <Star key={key} fill="yellow" strokeWidth={0} />
            ))
          : ""}
        {halfStar ? <StarHalfIcon fill="yellow" strokeWidth={0} /> : ""}
        {emptyStars
          ? [...Array(emptyStars).keys()].map((key) => (
              <Star key={key} fill="#111" strokeWidth={0} />
            ))
          : ""}
    </>
  );
}

function Product({ title, image, price, rating }) {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={image} alt="" />
      <div>{title}</div>
      <div className={styles.rating}>
        <Rating rating={rating.rate} />  {rating.count}
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
