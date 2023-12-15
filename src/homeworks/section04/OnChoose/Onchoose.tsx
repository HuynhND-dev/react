import React from "react";
import styles from "./OnChoose.module.css";

type Props = {
  questionContent?: string;
  answers?: string[];
  correctAnswer?: string;
};

const alphabet = ["A", "B", "C", "D", "E"];

export default function Onchoose({
  questionContent,
  answers,
  correctAnswer,
}: Props) {
  const [uesrAnswer, setUserAnswer] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleClick = () => {
    if (uesrAnswer === correctAnswer) {
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }
  };

  return (
    <div className={styles.container}>
      <h2>{questionContent}</h2>
      <hr />
      <div>
        {answers?.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              name="answer"
              value={answer}
              onChange={() => setUserAnswer(answer)}
            />
            <strong>
              {alphabet[index]}.{answer}
            </strong>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleClick}>Kiểm Tra</button>
      </div>
      <div>{result && <p>{result}</p>}</div>
    </div>
  );
}
