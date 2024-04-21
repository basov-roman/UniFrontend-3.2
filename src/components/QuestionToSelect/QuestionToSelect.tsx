import React, { useState, useRef } from "react";
import { useQuestionContext } from "../../context/QuestionContext";
import { Question } from "../../interfaces/Question";
import "./questionToSelect.css";

interface QuestionToSelectProps {
  question: Question;
}

export const QuestionToSelect = ({ question }: QuestionToSelectProps) => {
  const { selectedQuestions, setSelectedQuestions } = useQuestionContext();
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const toggleSelect = () => {
    if (isSelected) {
      setSelectedQuestions(selectedQuestions.filter((q) => q !== question));
    } else {
      setSelectedQuestions([...selectedQuestions, question]);
    }
    setIsSelected(!isSelected);
  };

  const handleDivClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !isSelected;
      toggleSelect();
    }
  };

  return (
    <div className="question-to-select-container" onClick={handleDivClick}>
      <input
        type="checkbox"
        onChange={toggleSelect}
        checked={isSelected}
        ref={checkboxRef}
      />
      <h3>{question.question}</h3>
    </div>
  );
};
