import React from "react";
import style from "./Weatherforecast.module.css";
import { IoIosPartlySunny } from "react-icons/io";

type Props = {
  textpoison?: string;
};

export default function Weatherforecast({ textpoison = "32" }: Props) {
  return (
    <div className={style.container}>
      <div className={style.containerBody}>
        <div className={style.boderName}>
          <div className={style.textName}> Seatle</div>
          <div className={style.textItem}> Cloudy</div>
        </div>
        <div className={style.boderPoison}>
          <div className={style.textPoison}>{textpoison}&deg;</div>
        </div>
        <div className={style.avatar}>
          <IoIosPartlySunny size={50} />
        </div>
      </div>
    </div>
  );
}
