import { useFetchQuestionsQuery } from "../../Redux/features/questions/questions-api";

const Quiz = () => {
  const { data, isFetching } = useFetchQuestionsQuery();
  return (
    <div>
      <h1>Questions</h1>
      <p>
        {isFetching ? "...loading" : <pre>{JSON.stringify(data, null, 4)}</pre>}
      </p>
    </div>
  );
};

export default Quiz;
