import React from "react";
import styles from "./ImageViewer.module.css";

type Props = {
  img?: string[];
};

export default function ImageViewer({ img }: Props) {
  const [image, setImage] = React.useState(2);
  let length = img?.length;
  console.log(img);
  console.log(length);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {img && <img src={img[image]} alt="" />}
        <div className={styles.imgSmall}>
          {img?.map((item, index) => {
            if (index == image) {
              return (
                <img
                  src={item}
                  className={styles.active}
                  onClick={() => {
                    setImage(index);
                  }}
                />
              );
            } else {
              return (
                <img
                  src={item}
                  className={styles.inActive}
                  onClick={() => {
                    setImage(index);
                  }}
                />
              );
            }
          })}
        </div>
      </div>
      <div className={styles.control}>
        <button
          onClick={() => setImage(image - 1)}
          disabled={image < 1 ? true : false}
        >
          Prev
        </button>
        {image + 1} / {length}
        <button
          onClick={() => setImage(image + 1)}
          disabled={image + 1 == length ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}
