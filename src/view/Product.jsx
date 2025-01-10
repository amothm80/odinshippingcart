import styles from "./Product.module.css";
import { Star } from "lucide-react";
import { useOutletContext, useParams } from "react-router";
import { useProduct } from "/src/api/useProduct";

// function Product({ title, image, price, rating }) {
//   return (
//     <div className={styles.product}>
//       <img className={styles.img} src={image} alt="" />

//       <div>{title}</div>

//       <div className={styles.footer}>
//         <div>${price}</div>
//         <div className={styles.rating}>
//           <Star strokeWidth={2} size={16} />
//           {rating.rate}{' '}
//           <span className={styles.ratingCount}>({rating.count})</span>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Product() {
  const cartCont = useOutletContext()
  let { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  if (error) return <div>Failed to Load...</div>;
  if (isLoading) return <div className={styles.loader}></div>;
  return (
    <div className={styles.productView}>
      <div className={styles.imageDiv}>
        <img className={styles.image} src={product.image} alt="" />{" "}
      </div>
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p className={styles.description} >{product.description}</p>
        <div className={styles.footer}>
          <h4>${product.price}</h4>
          <div className={styles.rating}>
            <Star strokeWidth={2} size={16} />
            <h4>{product.rating.rate}</h4>
            <span className={styles.ratingCount}>
              <h4>({product.rating.count})</h4>
            </span>
          </div>
        </div>
        <button onClick={()=>{cartCont.addProduct(id)}}>Add to Cart</button>
      </div>
    </div>
  );
}
