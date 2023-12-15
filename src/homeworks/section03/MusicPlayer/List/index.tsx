import React from "react";
import styles from "./ListMusic.module.css";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import ListItem from "./ListItem/ListItem";

type Props = {};

let imgUrl = [
  "",
  "images/avatars/mytam.jpg",
  "images/avatars/bray.png",
  "images/avatars/trucnhan.webp",
  "images/avatars/bray.png",
];
let name = ["", ""];
let author = ["", ""];
let time = ["", ""];
export default function ListMusic({}: Props) {
  const [music, setMusic] = React.useState();
  const playingHandle = (item: any) => {
    setMusic((x) => item);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Most Popular</h2>
        <p>92 Songs</p>
      </div>
      <div className={styles.list}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          let playing = music == item ? true : false;
          return (
            <div
              key={index}
              onClick={() => playingHandle(item)}
              style={{ width: 500 }}
            >
              <ListItem
                imgUrl={imgUrl[index]}
                name={name[index]}
                author={author[index]}
                time={time[index]}
                playing={playing}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
