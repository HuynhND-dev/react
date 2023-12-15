import React from "react";
import styles from "./PostCard.module.css";

type Props = {
  imgUrl?: string;
  category?: string;
  title?: string;
  date?: string;
  author?: string;
};

export default function PostCard({
  imgUrl,
  category,
  title,
  date,
  author,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="images/products/basic-3.jpg" alt="post" />
      </div>
      <div className={styles.content}>
        <div className={styles.category}>{category}</div>
        <h2>{title}</h2>
        <div>
          <span className={styles.date}>{date} </span>
          <span style={{ color: "#adadad" }}>by </span>
          <span className={styles.author}>{author}</span>
        </div>
      </div>
    </div>
  );
}
