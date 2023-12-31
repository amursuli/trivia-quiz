export interface TriviaQuizDto {
  response_code: number;
  results: Result[];
}

export interface Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  allAnswers: string[];
  selectedAnswer: string;
}
