import React from "react";
import styles from "./ImageSlider.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = { img?: string[] };

export default function ImageSlider({ img }: Props) {
  const [image, setImage] = React.useState(0);
  const totalImg = img?.length;
  const totalArr =
    typeof totalImg == "number"
      ? Array.from({ length: totalImg }, (_, index) => index + 1)
      : [];
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {img && <img src={img[image]} alt="" />}
      </div>
      <div className={styles.btnControl}>
        <div
          className={[styles.btn, styles.left].join(" ")}
          onClick={() => {
            if (totalImg) {
              if (image == 0) {
                setImage(totalImg - 1);
              } else {
                setImage(image - 1);
              }
            }
          }}
        >
          <AiOutlineLeft size={30} />
        </div>
        <div
          className={[styles.btn, styles.right].join(" ")}
          onClick={() => {
            if (totalImg) {
              if (image >= totalImg - 1) {
                setImage(0);
              } else {
                setImage(image + 1);
              }
            }
          }}
        >
          <AiOutlineRight size={30} />
        </div>
      </div>
      <div className={styles.pagination}>
        {totalArr.map((item, index) => {
          if (index == image) {
            return (
              <div
                className={[styles.pgnItem, styles.fill].join(" ")}
                key={index}
              ></div>
            );
          } else {
            return (
              <div
                className={[styles.pgnItem, styles.outLine].join(" ")}
                key={index}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
}
