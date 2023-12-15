import React from "react";
import style from "./Profile.module.css";

type Props = {
  textname?: string;
  textblur?: string;
  icon?: React.ReactNode;
  avatar?: string;
};
export default function Profile({
  textname = "Yolanda",
  textblur = "",
  icon,
  avatar,
}: Props) {
  const avatarStyle = {
    borderRadius: textblur ? "50%" : "0px",
  };

  return (
    <div className={style.container}>
      <div className={style.containerBody}>
        <img className={style.avatar} src={avatar} alt="" style={avatarStyle} />
        <div>
          <div className={style.textName}>{textname}</div>
          <div className={style.textBlur}>{textblur}</div>
        </div>
        <div className={style.Icon}>{icon}</div>
      </div>
    </div>
  );
}
