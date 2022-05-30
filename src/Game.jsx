import React, { useState } from "react";
import questions from "./QuestionsList";
function Game() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  let [currentBtnID,setCurrentBtnID]=useState('');
  function handleAnswer(isCorrect,id) {
    if (isCorrect) 
    {
      setCurrentBtnID= document.getElementById(id);
      setCurrentBtnID.style.background='green'
 
      setScore((s) => s + 1)
    }
    else
    {
      setCurrentBtnID= document.getElementById(id);
      setCurrentBtnID.style.background='red'
    }

    if (currentIndex === questions.length - 1) setQuizFinished(true);
    else 
    {
     setTimeout(function()
     {
      setCurrentBtnID.style.background='none'
      setCurrentIndex((index) => index + 1)
     },1000)
      
    };
  }

  return (
    <div className="app">
      {quizFinished ? (
        <div className="score-section">
          You scored{" "}
          <div data-testid="score" style={{ margin: "10px" }}>
            {score}
          </div>{" "}
          out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentIndex + 1}/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentIndex].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentIndex].answerOptions.map((answer, i) => {
              return (
                <button
                  data-testid={i + 1}
                  key={i}
                  id={i}
                  onClick={() => handleAnswer(answer.isCorrect,i)}
                >
                  {answer.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Game;