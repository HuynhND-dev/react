import React from "react";
import styles from "./ListItem.module.css";
import classNames from "classnames";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
type Props = {
  imgUrl?: string;
  name?: string;
  author?: string;
  time?: string;
  playing?: boolean;
};

export default function ListItem({
  imgUrl = "images/avatars/huynhnd.jpg",
  name = "no name",
  author = "Various Artists",
  time = "00:00",
  playing = true,
}: Props) {
  {
    imgUrl = imgUrl == "" ? "images/avatars/huynhnd.jpg" : imgUrl;
    name = name == "" ? "no name" : name;
    author = author == "" ? "Various Artists" : author;
    time = time == "" ? "00:00" : time;
  }
  const container = classNames(styles.container, {
    [styles.playing]: playing,
  });
  return (
    <div className={container}>
      <div className={styles.info}>
        <div className={styles.order}>01</div>
        <div className={styles.image}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.author}>{author}</div>
      <div className={styles.time}>{time}</div>

      <div className={styles.favorite}>
        <FavoriteButton />
      </div>
    </div>
  );
}
