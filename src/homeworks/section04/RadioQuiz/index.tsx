import React from "react";
import styles from "./RadioQuiz.module.css";
type Props = { question?: string[] };

export default function RadioQuiz({ question = ["ac", "ca", "ác"] }: Props) {
  return (
    <div className={styles.container}>
      <h2>câu hỏi</h2>
      {question?.map((item, index) => {
        return (
          <div className={styles.formControl}>
            <input type="radio" id={item} name="item" />{" "}
            <label htmlFor={item}>{item}</label>
          </div>
        );
      })}
      <div className={styles.submit}>
        <button>submit</button>
      </div>
    </div>
  );
}
