import React from "react";
import styles from "./Pay.module.css";
import ButtonOutLine from "./ButtonOutLine";
import RadioButton from "./RadioButton";
import { AiFillAccountBook, AiOutlineLeft } from "react-icons/ai";

type Props = {};

export default function Pay({}: Props) {
  const logoMyCard = [
    "images/appmobile/MasterCard.png",
    "images/appmobile/Google.png",
  ];
  const logoNewCard = [
    "images/appmobile/Apple.png",
    "images/appmobile/Visa.png",
    "images/appmobile/Paypal.png",
    "images/appmobile/Google.png",
  ];
  const [myCard, setMycard] = React.useState("");
  const [newCard, setNewcard] = React.useState("");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.btnBack}>
          {" "}
          <AiOutlineLeft />
        </div>
        <h2>MY CARD</h2>
      </div>
      <div className={styles.choiceContainer}>
        {["Master Card", "Google Pay"].map((item, index) => {
          if (item == myCard) {
            return (
              <RadioButton
                icon={logoMyCard[index]}
                text={item}
                checked
                key={index}
              />
            );
          }
          return (
            <div
              onClick={() => {
                setMycard(item);
              }}
              key={index}
            >
              <RadioButton icon={logoMyCard[index]} text={item} />
            </div>
          );
        })}
      </div>
      <div className={styles.label}>Add new card</div>
      <div className={styles.choiceContainer}>
        {["Apple Pay", "Visa", "Paypal", "Google Pay"].map((item, index) => {
          if (item == newCard) {
            return (
              <RadioButton
                icon={logoNewCard[index]}
                text={item}
                checked
                key={index}
              />
            );
          }
          return (
            <div
              onClick={() => {
                setNewcard(item);
              }}
              key={index}
            >
              <RadioButton icon={logoNewCard[index]} text={item} />
            </div>
          );
        })}
      </div>
      <div className={styles.btnSubmit}></div>
    </div>
  );
}
