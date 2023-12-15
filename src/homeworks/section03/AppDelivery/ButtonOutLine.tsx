import React from "react";
import styles from "./ButtonOutLine.module.css";
type Props = { text?: string; active?: boolean };

export default function ButtonOutLine({ text, active }: Props) {
  if (active) {
    return (
      <div className={[styles.container, styles.active].join(" ")}>{text}</div>
    );
  } else {
    return <div className={styles.container}>{text}</div>;
  }
}
