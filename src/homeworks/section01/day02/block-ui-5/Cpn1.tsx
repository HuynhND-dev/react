import React from "react";
import styles from "./Cpn1.module.css";
type Props = {
  icon?: React.ReactNode;
  title?: string;
  value?: string;
};

export default function Cpn1({ icon, title, value }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.info}>{value}</div>
    </div>
  );
}
