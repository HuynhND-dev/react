import React, { useState } from "react";

type Props = {
  questionContent?: string;
  answers?: string[];
  correctAnswers?: string[];
};

const alphabet = ["A", "B", "C", "D", "E"];

export default function MutipleChoice({
  questionContent,
  answers,
  correctAnswers,
}: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [result, setResult] = useState("");

  const handleCheckboxChange = (answer: string) => {
    if (selectedAnswers.includes(answer)) {
      // Nếu đáp án đã chọn, loại bỏ nó khỏi danh sách các đáp án đã chọn
      setSelectedAnswers(selectedAnswers.filter((a) => a !== answer));
    } else {
      // Nếu đáp án chưa chọn, thêm vào danh sách các đáp án đã chọn
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const handleClick = () => {
    // Kiểm tra xem các đáp án đã chọn có đúng không
    const correct = selectedAnswers.every((answer) =>
      correctAnswers?.includes(answer)
    );

    // Hiển thị kết quả
    if (correct) {
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }
  };

  return (
    <div>
      <h2>{questionContent}</h2>
      <hr />
      <div>
        {answers?.map((answer, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name="answer"
              value={answer}
              onChange={() => handleCheckboxChange(answer)}
              checked={selectedAnswers.includes(answer)}
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
