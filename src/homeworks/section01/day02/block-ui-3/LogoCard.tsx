import React from "react";
import styles from "./LogoCard.module.css";
type Props = {
  title?: string;
  subTitle?: string;
  color?: string;
  icon?: React.ReactNode;
};

export default function LogoCard({ title, subTitle, icon, color }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.cover} style={{ backgroundColor: color }}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
