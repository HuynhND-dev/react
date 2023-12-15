import React from "react";
import styles from "./RankBar.module.css";

type Props = {
  icon?: React.ReactNode;
  title?: string;
  rank?: number;
  color?: string;
};

export default function RangeBar({
  icon,
  title = "html",
  rank = 60,
  color = "gray",
}: Props) {
  return (
    <div className={styles.rankContainer}>
      <div
        className={styles.rank}
        style={{ width: rank + "%", maxWidth: 300, backgroundColor: color }}
      ></div>
    </div>
  );
}
