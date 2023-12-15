import React from "react";
import style from "./Weatherweek.module.css";

type WeatherItem = {
  text?: string;
  time?: string;
};

type Props = {
  images: string[]; // Danh sách các đường dẫn đến hình ảnh
  texts: WeatherItem[];
  icon?: string;
  textheader?: string;
  textBlur?: string;
};

export default function WeatherWeek({
  images,
  texts,
  icon,
  textheader = "",
  textBlur = "",
}: Props) {
  const items = texts.map((item, index) => (
    <div key={index} className={style.boderItem}>
      <img src={images[index]} alt="" />
      <span className={style.textDay}>{item.text}</span>
      <p className={style.textTime}>{item.time}</p>
    </div>
  ));

  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <div className={style.textHeader}>
          <div className={style.text}>{textheader}</div>
          <div className={style.iconRight}>{icon}</div>
        </div>
        <div className={style.textHeaderBlur}>{textBlur}</div>
      </div>
      <div className={style.containerBody}>{items}</div>
    </div>
  );
}
