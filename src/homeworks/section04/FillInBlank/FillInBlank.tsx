import React, { useState } from "react";

type Props = {
  questionContent?: string;
  correctAnswer?: string;
};

export default function FillInBlank({ questionContent, correctAnswer }: Props) {
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      userAnswer.trim().toLowerCase() === correctAnswer?.trim().toLowerCase()
    ) {
      setResult("Correct!");
    } else {
      setResult("Incorrect. The correct answer is: " + correctAnswer);
    }
  };

  return (
    <div>
      <h2>{questionContent}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Enter your answer"
        />
        <button type="submit">Submit</button>
      </form>
      <div>{result && <p>{result}</p>}</div>
    </div>
  );
}
