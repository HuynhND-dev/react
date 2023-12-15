import React from "react";
import styles from "./Search.module.css";
type Props = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text?: string;
  fontWeight?: string;
  color?: string;
  fontSize?: number;
  bgIcon?: string;
  radiusIcon?: number;
};

export default function Search({
  iconLeft,
  iconRight,
  text,
  fontWeight = "regular",
  color = "black",
  fontSize = 14,
  radiusIcon = 0,
  bgIcon,
}: Props) {
  return (
    <div className={styles.container}>
      {iconLeft && <div className={styles.iconLeft}>{iconLeft}</div>}
      <div
        className={styles.textSearch}
        style={{ color: color, fontSize: fontSize, fontWeight: fontWeight }}
      >
        {text}
      </div>
      {iconRight && (
        <div
          className={styles.iconRight}
          style={{ borderRadius: radiusIcon, background: bgIcon }}
        >
          {iconRight}
        </div>
      )}
    </div>
  );
}
