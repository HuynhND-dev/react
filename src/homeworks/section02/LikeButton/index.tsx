import React from "react";
import styles from "./LikeButton.module.css";
import { FaHandHolding, FaAddressCard } from "react-icons/fa";
import { BiLike, BiSolidLike } from "react-icons/bi";

type Props = {};

export default function LikeButton({}: Props) {
  const [isLike, setIsLike] = React.useState(false);
  if (isLike) {
    return (
      <div
        className={[styles.container, styles.isLike].join(" ")}
        onClick={() => {
          setIsLike(false);
        }}
      >
        <BiSolidLike size={25} />
      </div>
    );
  }

  return (
    <div
      className={[styles.container, styles.isLike].join(" ")}
      onClick={() => {
        setIsLike(true);
      }}
    >
      <BiLike size={25} />
    </div>
  );
}
