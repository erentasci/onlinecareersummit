import React, { useState } from "react";
import ArrowQuestion from "../../Media/arrowFAQ.png";
import "./Question.css";

const Question = ({ question }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`question ${isActive ? "isActive" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="questionTop">
        <h3>{question.title}</h3>
        <img
          src={ArrowQuestion}
          alt="Question Arrow"
          className={`questionArrow ${isActive ? "isActiveArrow" : ""}`}
        />
      </div>
      {isActive && <p>{question.answer}</p>}
    </div>
  );
};

export default Question;
