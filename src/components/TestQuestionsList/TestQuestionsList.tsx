import "./testQuestionsList.css";
import { useState } from "react";
import { TestQuestionsListItem } from "../TestQuestionsListItem/TestQuestionsListItem";
import { useQuestionContext } from "../../context/QuestionContext";

export const TestQuestionsList = () => {
  const [isTestFinished, setIsTestFinished] = useState(false);
  const { selectedQuestions } = useQuestionContext();
  const [answers, setAnswers] = useState(
    selectedQuestions.map(() => ({
      selectedAnswer: null as number | null,
    }))
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = { selectedAnswer: answerIndex };
    setAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(
      (prevIndex) => (prevIndex + 1) % selectedQuestions.length
    );
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? selectedQuestions.length - 1 : prevIndex - 1
    );
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      const currentQuestion = selectedQuestions[index];
      if (
        answer.selectedAnswer !== null &&
        currentQuestion.answers[answer.selectedAnswer].isCorrect
      ) {
        score++;
      }
    });
    return score;
  };

  const finishTest = () => {
    setIsTestFinished(true);
    const score = calculateScore();
    setCorrectAnswers(score);
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === selectedQuestions.length - 1;

  const allAnswersSelected = answers.every(
    (answer) => answer.selectedAnswer !== null
  );

  const percentage = (correctAnswers / selectedQuestions.length) * 100;

  return (
    <>
      <TestQuestionsListItem
        question={currentQuestion}
        selectedAnswer={answers[currentQuestionIndex].selectedAnswer}
        onSelectAnswer={(answerIndex) => selectAnswer(answerIndex)}
      />

      <div className="btns-container">
        <button
          onClick={goToPreviousQuestion}
          disabled={isFirstQuestion || isTestFinished}
        >
          <span>Попереднє питання</span>
        </button>
        <button
          onClick={goToNextQuestion}
          disabled={isLastQuestion || isTestFinished}
        >
          <span> Наступне питання</span>
        </button>
      </div>

      {allAnswersSelected && (
        <>
          <button onClick={finishTest} className="finish-btn">
            Завершити
          </button>
          {isTestFinished && (
            <div className="resultDiv">
              Ваш результат: {correctAnswers} з {selectedQuestions.length} (
              {percentage.toFixed(2)}%)
            </div>
          )}
        </>
      )}
    </>
  );
};
