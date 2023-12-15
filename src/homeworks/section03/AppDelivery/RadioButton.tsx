import React from "react";
import styles from "./RadioButton.module.css";
import classNames from "classnames";
type Props = { icon?: string; text?: string; checked?: boolean };

export default function RadioButton({ icon, text, checked }: Props) {
  const active = classNames(styles.container, {
    [styles.checked]: checked,
  });
  return (
    <div className={active}>
      <div className={styles.text}>
        <span className={styles.icon}>
          <img src={icon} alt="" />
        </span>
        {text}
      </div>
      <div className={styles.radioContainer}>
        <div className={styles.radioBorder}></div>
        <div className={styles.radioChecked}></div>
      </div>
    </div>
  );
}
