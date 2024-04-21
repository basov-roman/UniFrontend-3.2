import "./testQuestionsListItem.css";
import { Question } from "../../interfaces/Question";

interface TestQuestionsListItemProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
}

export const TestQuestionsListItem = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}: TestQuestionsListItemProps) => {
  const handleAnswerChange = (index: number) => {
    onSelectAnswer(index);
  };

  return (
    <div className="test-question-list-item-wrapper">
      <h3>{question.question}</h3>
      <ul>
        {question.answers.map((answer, index) => (
          <div
            key={answer.answer}
            className="answer-container"
            onClick={() => handleAnswerChange(index)}
          >
            <input
              type="radio"
              name={question.question}
              value={index.toString()}
              checked={selectedAnswer === index}
              onChange={() => handleAnswerChange(index)}
            />
            <li>{answer.answer}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
