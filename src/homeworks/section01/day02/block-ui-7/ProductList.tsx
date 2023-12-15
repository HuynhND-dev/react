import React from "react";
import styles from "./ProductList.module.css";
import RankBar from "./RankBar";
import Ratting from "./Ratting";
type Props = {};

export default function ProductList({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.discount}>-39%</div>
      <div className={styles.image}>
        <img src="images/avatars/huynhnd.jpg" alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.shop}>shop</div>
        <hr />
        <div className={styles.prices}>
          <div className={styles.price}>$634</div>
          <del className={styles.oldPrice}>$457687</del>
          <div className={styles.sale}>12% off</div>
        </div>
        <div className={styles.name}>name ụbfe rkjbgr jhb</div>
        <div className={styles.rate}>
          <Ratting />
          <RankBar color="orange" rank={80} />
        </div>
        <div className={styles.inventory}>Sold: {}</div>
      </div>
    </div>
  );
}
