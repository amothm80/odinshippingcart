import styles from "./Product.module.css";
import { Star } from "lucide-react";
import { useOutletContext, useParams } from "react-router";
import { useProduct } from "/src/api/useProduct";
import { useContext } from "react";
import { ShopContext } from "../controller/ShopContext.jsx";


export default function Product() {
  // const cartCont = useOutletContext()
  const { cartCont } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument
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
        <button onClick={()=>{cartCont.addProduct(id,product.price)}} className="button">Add to Cart</button>
      </div>
    </div>
  );
}
