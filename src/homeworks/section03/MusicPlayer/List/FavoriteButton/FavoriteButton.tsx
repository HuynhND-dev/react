import React from "react";
import styles from "./FavoriteButton.module.css";
import { AiFillHeart } from "react-icons/ai";
import classNames from "classnames";

type Props = { like?: boolean };

export default function FavoriteButton({ like }: Props) {
  const [isLike, setIsLike] = React.useState(like);
  const container = classNames(styles.container, {
    [styles.like]: isLike,
  });
  const likeHandle = () => {
    console.log(543);
    isLike ? setIsLike(false) : setIsLike(true);
  };
  return (
    <div className={container} onClick={likeHandle}>
      <AiFillHeart />
    </div>
  );
}
