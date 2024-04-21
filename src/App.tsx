import { useState } from "react";
import { useQuestionContext } from "./context/QuestionContext";
import { SelectQuestions } from "./components/SelectQuestions/SelectQuestions";
import { Test } from "./components/Test/Test";

function App() {
  const [showTest, setShowTest] = useState(false);
  const { selectedQuestions } = useQuestionContext();

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="app">
      {!showTest ? <SelectQuestions /> : <Test />}
      {!showTest && selectedQuestions.length > 0 && (
        <button onClick={handleStartTest}>Start</button>
      )}
    </div>
  );
}

export default App;
