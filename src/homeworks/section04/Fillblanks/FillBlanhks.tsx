import React, { useState } from "react";

type Props = {
  questionContent?: string;
  blanks?: string[];
  correctAnswers?: string[];
};

export default function FillInBlanks({
  questionContent,
  blanks,
  correctAnswers,
}: Props) {
  const [userAnswers, setUserAnswers] = useState(
    Array(blanks?.length).fill("")
  );
  const [result, setResult] = useState("");

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isCorrect = userAnswers.every(
      (answer, index) =>
        answer.trim().toLowerCase() ===
        correctAnswers?.[index]?.trim().toLowerCase()
    );

    if (isCorrect) {
      setResult("Correct!");
    } else {
      setResult("Incorrect. Please try again.");
    }
  };

  return (
    <div>
      <h2>{questionContent}</h2>
      <form onSubmit={handleSubmit}>
        {questionContent &&
          blanks &&
          questionContent
            .split("___")
            .map((part, index) => (
              <React.Fragment key={index}>
                {blanks.length > index && (
                  <input
                    type="text"
                    value={userAnswers[index]}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                )}
              </React.Fragment>
            ))}
        <button type="submit">Submit</button>
      </form>
      <div>{result && <p>{result}</p>}</div>
    </div>
  );
}
