import React from "react";
import styles from "./Rate.module.css";
import Ratting from "../../section02/RateButton";
import { AiOutlineLeft } from "react-icons/ai";
import ButtonOutLine from "./ButtonOutLine";
type Props = {};

export default function Rate({}: Props) {
  const [tip, setTip] = React.useState("No Tips");
  const ToggleEvent = (value: string) => {
    setTip(value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.btnBack}>
          <AiOutlineLeft />
        </div>
        <h2>Rider Review</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src="images/avatars/huynhnd.jpg" alt="" />
        </div>
        <div className={styles.name}>HuynhND</div>
        <div className={styles.position}>Delivery Man</div>
        <div className={styles.stt}> &bull; Order Delivered</div>
        <p>Please Rate Delivery Service</p>
        <Ratting size={40} />
      </div>
      <div className={styles.tip}>
        <p>Add Tips</p>
        <div className={styles.btnTip}>
          {/* <span className={styles.btnActive}>No Tips</span> */}
          {["No Tips", "$5", "$10", "$15", "$20"].map((item, index) => {
            if (tip == item) {
              return (
                <div key={index}>
                  {" "}
                  <ButtonOutLine text={item} active />
                </div>
              );
            }
            return (
              <div onClick={() => ToggleEvent(item)} key={index}>
                <ButtonOutLine text={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.comment}>
        <textarea placeholder="Add a comment" rows={4} cols={40} />
      </div>
      <button className={styles.btnSubmit} type="submit">
        Submit Review
      </button>
    </div>
  );
}
