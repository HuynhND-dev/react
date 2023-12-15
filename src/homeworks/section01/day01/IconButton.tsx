import React from "react";
import styles from "./IconButton.module.css";

type Props = {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  outLine?: boolean;
};

export default function IconButton({
  text = "button Text",
  iconLeft,
  iconRight,
  outLine = false,
}: Props) {
  return (
    <div>
      {outLine ? (
        <div className={styles.outLineContainer}>
          {iconLeft && <div className={styles.outLineIconLeft}>{iconLeft}</div>}
          <div className={styles.outLineButtonText}>{text}</div>
          {iconRight && (
            <div className={styles.outLineIconRight}>{iconRight}</div>
          )}
        </div>
      ) : (
        <div className={styles.container}>
          {iconLeft && <div className={styles.iconLeft}>{iconLeft}</div>}
          <div className={styles.buttonText}>{text}</div>
          {iconRight && <div className={styles.iconRight}>{iconRight}</div>}
        </div>
      )}
    </div>
  );
}
