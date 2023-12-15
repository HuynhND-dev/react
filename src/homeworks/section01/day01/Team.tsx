import React from "react";
import style from "./Team.module.css";

type Props = {
  avata: string[];
  text?: string;
  subTi?: string;
  background?: string;
};

export default function Team({ avata, text = "", background, subTi }: Props) {
  return (
    <div className={style.container} style={{ backgroundColor: background }}>
      <div className={style.imgContainer}>
        {avata.map((avata, index) => (
          <div className={style.avatar}>
            <img
              src={avata}
              alt=""
              key={index}
              style={{ borderColor: background }}
            />
          </div>
        ))}
      </div>
      <div>
        <div className={style.textName}> {text}</div>
        <div className={style.subitem}> {subTi}</div>
      </div>
    </div>
  );
}
