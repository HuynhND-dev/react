import React from "react";
import styles from "./PercentageBar.module.css";

type Props = {
  title?: string;
  percent?: number;
  color?: string;
  percentColor?: number;
};

export default function PercentageBar({
  title = "title",
  percent = 0,
  percentColor = percent / 100,
  color = "blue",
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.range}>
        <div
          className={styles.title}
          style={{ backgroundColor: color, opacity: 0.6 }}
        >
          {title}
        </div>
        <div style={{ flex: percentColor }}>
          <div className={styles.percent} style={{ backgroundColor: color }}>
            {percent}%
          </div>
        </div>
      </div>
    </div>
  );
}
