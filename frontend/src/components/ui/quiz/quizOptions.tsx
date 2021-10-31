import { FC } from "react";
import { Options } from "../../../types/types";

const QuizOptions: FC<{ options: Options; key: number | string }> = ({
  options,
  key,
}) => {
  return (
    <div>
      {options
        ? Object.entries(options).map((option) => (
            <div className="answerBox" key={key}>
              <span className="option">{option[0]}</span>
              <span className="answer">{option[1]}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default QuizOptions;
