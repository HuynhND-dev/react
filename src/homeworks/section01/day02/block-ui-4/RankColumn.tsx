import React from "react";
import styles from "./RankColumn.module.css";

type Props = {
  color?: string;
  rank?: number;
  title?: string;
  size?: number;
  font?: number;
};

export default function RankColumn({
  color,
  rank = 0,
  title,
  size = 30,
  font = 12,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.rankContainer} style={{ width: size }}>
        <div
          className={styles.rank}
          style={{ height: rank + "%", maxHeight: 300, backgroundColor: color }}
        ></div>
      </div>
      <div className={styles.title} style={{ fontSize: font }}>
        {title}
      </div>
    </div>
  );
}
