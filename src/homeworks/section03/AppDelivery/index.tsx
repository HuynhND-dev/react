import React from "react";
import styles from "./app.module.css";
import { log } from "console";
import classNames from "classnames";
type Props = {};

export default function AppDelivery({}: Props) {
  let bgrImg = [
    "images/appmobile/bgrimg.png",
    "images/appmobile/bgrimg2.png",
    "images/appmobile/bgrimg3.png",
  ];
  const [page, setPage] = React.useState(1);
  // const navigateStatus = classNames({[3]: !page})
  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <div className={styles.logo}>
          <img src="images/appmobile/logo.png" alt="" />
        </div>
        <div className={styles.bgr}>
          {page === 2 ? (
            <img src="images/appmobile/bgr2.png" alt="" />
          ) : (
            <img src="images/appmobile/bgr.png" alt="" />
          )}
        </div>

        <div className={styles.bgrImg}>
          {bgrImg.map((item, index) => {
            // console.log(index);
            if (index + 1 == page) {
              return <img src={item} alt="" key={index} />;
            }
          })}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h2>Choose a Favourite Food</h2>
          </div>
          <div className={styles.subTitle}>
            When you oder Eat Steet, we’ll hook you up with exclusive coupon,
            specials and rewards
          </div>
        </div>
        <div className={styles.pagination}>
          {[1, 2, 3].map((item, index) => {
            return (
              <div
                className={
                  page == item ? styles.paginateItemActive : styles.paginateItem
                }
                key={index}
              ></div>
            );
          })}
        </div>
        {page < 3 && (
          <div className={styles.btnControlMultiple}>
            <span
              onClick={() => {
                setPage(3);
                // console.log(page);
              }}
            >
              Skip
            </span>
            <button
              onClick={() => {
                setPage(page + 1);
                // console.log(page);
              }}
            >
              Next
            </button>
          </div>
        )}

        {page === 3 && (
          <div className={styles.btnControlSingle}>
            <button
              onClick={() => {
                setPage(1);
                // console.log(page);
              }}
            >
              Get started
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
