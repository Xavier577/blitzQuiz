import { FC } from "react";
import { QuestionBoxProp } from "../../../types/interfaces";
import ProgressBar from "../ProgressBar/ProgressBar";

const Question: FC<QuestionBoxProp> = ({ question, questionId }) => {
  return (
    <div>
      <div>
        <h1>Question {questionId} </h1>
        <ProgressBar />
      </div>
      <span>{question}</span>
    </div>
  );
};

export default Question;
