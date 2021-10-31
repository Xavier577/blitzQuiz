import { useAppDispatch, useAppSelector } from "../../Redux/app/hooks";
import QuizComponent from "../../components/ui/quiz";
import {
  increment,
  decrement,
} from "../../Redux/features/questions/currentQuestion-slice";
import { useFetchQuestionsQuery } from "../../Redux/features/questions/questions-api";

const Quiz = () => {
  const { data, isFetching } = useFetchQuestionsQuery();

  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector((state) => state.currentQuestion);

  const goToNext = () => {
    if (data) {
      dispatch(increment(data));
    }
  };

  const goToPrev = () => {
    if (data) {
      dispatch(decrement());
    }
  };

  return (
    <div>
      {isFetching ? (
        "...loading"
      ) : (
        <QuizComponent quizData={data?.[currentQuestion.index]} />
      )}
      <button onClick={goToPrev}>prev </button>
      <button onClick={goToNext}> next</button>
    </div>
  );
};

export default Quiz;
