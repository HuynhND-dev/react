import React from "react";
import styles from "./Cpn2Block3.module.css";

type Props = {
  img?: string;
  iconTitle?: React.ReactNode;
  iconSubLeft?: React.ReactNode;
  iconSubRight?: React.ReactNode;
  title?: string;
  subTitle?: string;
};
export default function Cpn2Block3({
  iconTitle,
  iconSubLeft,
  iconSubRight,
  img,
  title,
  subTitle,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleText}>{title}</div>
          <div className={styles.titleIcon}>{iconTitle}</div>
        </div>
        <div className={styles.subTitle}>
          <div className={styles.subTitleText}>
            <span className={styles.subTitleLeftIcon}>{iconSubLeft}</span>
            {subTitle}
          </div>
          <div className={styles.subTitleRightIcon}>{iconSubRight}</div>
        </div>
      </div>
    </div>
  );
}
