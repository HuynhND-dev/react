import React from "react";
import style from "./Dashboard.module.css";

type Props = {
  textHDLeft?: string;
  textHdright?: string;
  textItem?: string;
  textBlur?: string;
  textpercent?: string;
};

export default function Dashboard({
  textBlur = "Business management service",
  textHDLeft = "Highlight",
  textHdright = "Feeds",
  textItem = "Dashboard",
  textpercent = "80%",
}: Props) {
  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <div className={style.boderItemHeaderLeft}>{textHDLeft}</div>
        <div className={style.boderItemHeaderRight}>{textHdright}</div>
        <div>&bull;&bull;&bull;</div>
      </div>
      <div className={style.containerBody}>
        <div className={style.textDashboard}> {textItem}</div>
        <p className={style.text}> {textBlur} </p>
      </div>
      <div className={style.containerFooter}>
        <div className={style.itemLoading}>
          <div
            className={style.loading}
            style={{
              backgroundColor: "#8dd794",
              width: 300 + "%",
              maxWidth: 300,
            }}
          ></div>
        </div>
        <div>{textpercent}</div>
      </div>
    </div>
  );
}
