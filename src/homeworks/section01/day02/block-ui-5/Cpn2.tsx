import React from "react";
import styles from "./Cpn2.module.css";
type Props = {
  label?: string;
  icon?: React.ReactNode;
  text?: string;
  color?: string;
};

export default function Cpn2({ label = "label", icon, text, color }: Props) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.label}>{label}</div>
      <div className={styles.content}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
