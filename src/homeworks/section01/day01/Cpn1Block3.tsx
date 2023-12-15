import React from "react";
import styles from "./Cpn1Block3.module.css";
type Props = {
  minutes?: number;
  rightIcon?: React.ReactNode;
  leftFlag?: string;
  rightFlag?: string;
  leftScore?: number;
  rightScore?: number;
  leftName?: string;
  rightName?: string;
  colorMinute?: string;
};

export default function cpn1Block3({
  minutes,
  rightFlag,
  rightIcon,
  rightName,
  rightScore,
  leftFlag,
  leftName,
  leftScore,
  colorMinute,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navLeft}>{minutes}'</div>
        <div className={styles.navRight}>{rightIcon}</div>
      </div>
      <div className={styles.score}>
        <div className={styles.leftTeam}>
          <div className={styles.leftName}>{leftName}</div>
          <div className={styles.leftFlag}>
            <img src={leftFlag} alt="" />
          </div>
        </div>
        <div className={styles.scoreNumber}>
          <div className={styles.leftScoreNumber}>{leftScore}</div>:
          <div className={styles.rightScoreNumber}>{rightScore}</div>
        </div>
        <div className={styles.rightTeam}>
          <div className={styles.rightFlag}>
            <img src={rightFlag} alt="" />
          </div>
          <div className={styles.rightName}>{rightName}</div>
        </div>
      </div>
    </div>
  );
}
