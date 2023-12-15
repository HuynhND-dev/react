import React from "react";
import styles from "./LikeAnimation.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
type Props = {};

export default function LikeAnimation({}: Props) {
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <div
      className={styles.container}
      onClick={() => {
        isLiked ? setIsLiked(false) : setIsLiked(true);
        console.log(isLiked);
      }}
      data-like={isLiked}
    >
      <AiFillHeart className={styles.mainIcon} size={15} />
      <AiFillHeart className={styles.secondIcon} size={15} />
      <div className={styles.text}>Like</div>
    </div>
  );
}
