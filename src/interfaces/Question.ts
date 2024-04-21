export interface Test {
  testName: string;
  questions: Question[];
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  isCorrect: boolean;
}
