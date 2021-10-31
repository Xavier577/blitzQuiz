import { FC, Fragment } from "react";
import { QuizProp } from "../../../types/interfaces";
import QuestionBox from "./questionBox";
import QuizOptions from "./quizOptions";

const QuizComponent: FC<QuizProp> = ({ quizData }) => {
  return (
    <div>
      {quizData ? (
        <Fragment>
          <QuestionBox question={quizData.question} questionId={quizData.id} />
          <QuizOptions options={quizData.options} key={quizData.id} />
        </Fragment>
      ) : null}
    </div>
  );
};

export default QuizComponent;
