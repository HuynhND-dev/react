import React from "react";
import styles from "./ProductTag.module.css";

type Props = { imgUrl?: string; title?: string; contents?: string[] };

export default function productTag({
  imgUrl = "images/products/basic-1.jpg",
  title = "card title",
  contents = [],
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={imgUrl} alt="prodcut" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          {contents.map((item, index) => {
            return <div>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
