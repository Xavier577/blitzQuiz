import { MouseEventHandler } from "react";
import { Options } from "./types";

export interface UIIconComponent {
  variant?: "big" | "normal";
  className?: string;
  clickAction?: MouseEventHandler<SVGSVGElement>;
}

export interface Question {
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

export interface QuestionBoxProp {
  question: string;
  questionId: number;
}

export interface QuizProp {
  quizData?: Question;
}

export interface QuizData {
  data: Question[];
}
