import React from "react";
import styles from "./ButtonIcon.module.css";
type Props = { icon?: string; text?: string };

export default function ButtonIcon({ icon, text }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
