import React from "react";
import getQuestions from "./editablefiles/questions";

export default function QuizQuestion() {
  const questions = getQuestions();

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <label>{question.label}</label>
          <br />
          <input type="radio" name={`q${index + 1}`} value="a" /> {question.a}
          <br/>
          <input type="radio" name={`q${index + 1}`} value="b" /> {question.b}
          <br/>
          <input type="radio" name={`q${index + 1}`} value="c" /> {question.c}
          <br/>
          <input type="radio" name={`q${index + 1}`} value="d" /> {question.d}
          <br/>
          <br/>
        </div>
      ))}
    </div>
  );
}


       