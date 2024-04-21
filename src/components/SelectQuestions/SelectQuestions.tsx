import "./selectQuestions.css";
import { QuestionToSelect } from "../QuestionToSelect/QuestionToSelect";
import { useQuestionContext } from "../../context/QuestionContext";

export const SelectQuestions = () => {
  const { questions } = useQuestionContext();

  return (
    <div className="select-questions-container">
      <h1>Виберіть питання для тесту</h1>
      {questions.map((question) => (
        <QuestionToSelect key={question.question} question={question} />
      ))}
    </div>
  );
};
