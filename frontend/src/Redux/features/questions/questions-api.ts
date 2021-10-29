import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Question {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: string;
}

export const apiSlice = createApi({
  reducerPath: "question-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchQuestions: builder.query<Question[], string | void>({
        query(path = "/questions") {
          return `${path}`;
        },
      }),
    };
  },
});

export const { useFetchQuestionsQuery } = apiSlice;
