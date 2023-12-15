import React from "react";
import style from "./Calendar.module.css";

type Props = {
  textMonth?: string;
  textDay?: string;
  textDayItem?: string;
  textTime?: string;
};

export default function Calendar({
  textDay = "23",
  textDayItem = "Wednesday",
  textMonth = "Jun",
  textTime = "08:00 PM - 18:30 PM",
}: Props) {
  return (
    <div className={style.container}>
      <div className={style.containerBody}>
        <div>
          <div className={style.textMonth}>{textMonth}</div>
          <div className={style.textDay}>{textDay}</div>
        </div>
        <div className={style.icon}></div>
        <div className={style.containerTextRight}>
          <div className={style.textDayItem}>{textDayItem}</div>
          <div className={style.textTime}>{textTime}</div>
        </div>
      </div>
    </div>
  );
}
