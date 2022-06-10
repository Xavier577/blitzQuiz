export interface IQuestion {
  question: string;
  answer: {
    option: 'optionA' | 'optionB' | 'optionC' | 'optionD';
    answer: string;
  };
  options: {
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
  };
}
