import React from "react";
import styles from "./ProductCard.module.css";
import Ratting from "./Ratting";
type Props = {
  shop?: string;
  imgUrl?: string;
  productName?: string;
  rateQuantity?: number;
  price?: number;
};

export default function ProductCard({
  shop,
  imgUrl,
  productName,
  rateQuantity,
  price,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={styles.info}>
        <div>{shop}</div>
        <hr />
        <div className={styles.productName}>{productName}</div>
        <div className={styles.rate}>
          <Ratting ratting={4} />
          <span style={{ paddingLeft: 10 }}>{rateQuantity}</span>
        </div>
        <div>${price}</div>
      </div>
    </div>
  );
}
