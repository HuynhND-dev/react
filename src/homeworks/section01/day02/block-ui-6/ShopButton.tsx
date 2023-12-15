import React from "react";
import styles from "./ShopButton.module.css";
import { FaShoppingCart } from "react-icons/fa";

type Props = { icon?: React.ReactNode; text?: string };

export default function ShopButton({ icon, text }: Props) {
  return (
    <div className={styles.container}>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
