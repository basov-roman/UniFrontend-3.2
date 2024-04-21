import React, { createContext, useState, useContext, ReactNode } from "react";
import { Question, Test } from "../interfaces/Question";
import testQuestions from "../data/questions.json";

interface QuestionContextType {
  test: Test;
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  selectedQuestions: Question[];
  setSelectedQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

interface QuestionProviderProps {
  children: ReactNode;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

const QuestionProvider: React.FC<QuestionProviderProps> = ({ children }) => {
  const test = testQuestions;
  const [questions, setQuestions] = useState<Question[]>(
    testQuestions.questions
  );
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>(
    testQuestions.questions
  );

  return (
    <QuestionContext.Provider
      value={{
        questions,
        setQuestions,
        selectedQuestions,
        setSelectedQuestions,
        test,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error(
      "useQuestionContext must be used within a QuestionProvider"
    );
  }
  return context;
};

export { QuestionProvider, useQuestionContext };
