import "./test.css";
import { TestQuestionsList } from "../TestQuestionsList/TestQuestionsList";
import { useQuestionContext } from "../../context/QuestionContext";

export const Test = () => {
  const { test } = useQuestionContext();

  return (
    <div className="test-container">
      <h1>{test.testName}</h1>
      <TestQuestionsList />
    </div>
  );
};
