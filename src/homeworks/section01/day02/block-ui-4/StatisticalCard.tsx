import React from "react";
import styles from "./StatisticalCard.module.css";
import RankColumn from "./RankColumn";
type Props = {
  title?: string;
  data?: string;
};
export default function StatisticalCard({ title, data }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.data}>{data}</div>
      </div>
      <div className={styles.rank}>
        <RankColumn color="#F75354" title="mon" rank={30} />
        <RankColumn color="#51D567" title="tue" rank={20} />
        <RankColumn color="#FCD518" title="wed" rank={60} />
        <RankColumn color="#33C8DD" title="thu" rank={80} />
        <RankColumn color="#F78153" title="fri" rank={70} />
      </div>
    </div>
  );
}
