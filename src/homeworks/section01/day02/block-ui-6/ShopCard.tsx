import React from "react";
import styles from "./ShopCard.module.css";
import ShopButton from "./ShopButton";
import { FaShoppingCart } from "react-icons/fa";
type Props = {
  imgUrl?: string;
  name?: string;
  description?: string;
  size?: string;
  price?: number;
};

export default function ProductCard({
  imgUrl,
  name,
  description,
  size,
  price,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imgUrl} alt="" />
      </div>
      <h2>{name}</h2>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.info}>
        <p>{size}</p>
        <div>${price}</div>
      </div>
      <ShopButton icon={<FaShoppingCart />} text="Add to cart" />
    </div>
  );
}
