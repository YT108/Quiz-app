import React, { useReducer, useMemo, useState } from "react";
import questionsData from "../data/questions.json";
import QuestionCard from "./QuestionCard.jsx";
import { Page, Container, Button, Select, Title } from "../styles";

function makeInitialState(questions) {
  return {
    currentIndex: 0,
    answers: Array(questions.length).fill(null),
    finished: false,
    questions,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "ANSWER": {
      const updated = [...state.answers];
      updated[state.currentIndex] = action.payload;
      return { ...state, answers: updated };
    }
    case "NEXT":
      return {
        ...state,
        currentIndex: Math.min(state.currentIndex + 1, state.answers.length - 1),
      };
    case "PREV":
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      };
    case "FINISH":
      return { ...state, finished: true };
    case "SET_DIFFICULTY":
      return makeInitialState(action.payload);
    case "RESTART":
      return makeInitialState(state.questions);
    default:
      return state;
  }
}

export default function Quiz() {
  const [difficulty, setDifficulty] = useState("easy");

  const filteredQuestions = useMemo(
    () => questionsData.filter((q) => q.difficulty === difficulty),
    [difficulty]
  );

  const [state, dispatch] = useReducer(
    reducer,
    filteredQuestions,
    makeInitialState
  );

  const { currentIndex, answers, finished, questions } = state;
  const currentQuestion = questions[currentIndex];

  const score = useMemo(
    () =>
      answers.filter((a, i) => a === questions[i].correctIndex).length,
    [answers, questions]
  );

  const handleDifficultyChange = (e) => {
    const newDifficulty = e.target.value;
    setDifficulty(newDifficulty);
    const newQuestions = questionsData.filter((q) => q.difficulty === newDifficulty);
    dispatch({ type: "SET_DIFFICULTY", payload: newQuestions });
  };

  if (questions.length === 0) {
    return (
      <Page>
        <Container>
          <Title>No questions found for this difficulty!</Title>
        </Container>
      </Page>
    );
  }

  // ✅ Results Page with Summary
  if (finished) {
    return (
      <Page>
        <Container>
          <Title>🎉 Quiz Finished</Title>
          <p>
            ✅ You scored <strong>{score}</strong> / {questions.length}
          </p>

          <div style={{ textAlign: "left", marginTop: "1rem" }}>
            {questions.map((q, i) => {
              const isCorrect = answers[i] === q.correctIndex;
              return (
                <div
                  key={i}
                  style={{
                    background: isCorrect ? "#e6ffe6" : "#ffe6e6",
                    padding: "1rem",
                    margin: "0.5rem 0",
                    borderRadius: "8px",
                  }}
                >
                  <p><strong>Q{i + 1}:</strong> {q.question}</p>
                  <p>
                    Your Answer:{" "}
                    <strong>
                      {q.options[answers[i]] ?? "Not answered"}
                    </strong>{" "}
                    {isCorrect ? "✅" : "❌"}
                  </p>
                  {!isCorrect && (
                    <p>
                      Correct Answer: <strong>{q.options[q.correctIndex]}</strong>
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <Button onClick={() => dispatch({ type: "RESTART" })}>
            🔄 Restart Quiz
          </Button>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        <Title>Quiz App</Title>

        <Select value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>

        <p>
          Question {currentIndex + 1} of {questions.length}
        </p>

        <QuestionCard
          data={currentQuestion}
          selected={answers[currentIndex]}
          onSelect={(val) => dispatch({ type: "ANSWER", payload: val })}
        />

        <div>
          <Button
            onClick={() => dispatch({ type: "PREV" })}
            disabled={currentIndex === 0}
          >
            Previous
          </Button>

          {currentIndex < questions.length - 1 ? (
            <Button
              onClick={() => dispatch({ type: "NEXT" })}
              disabled={answers[currentIndex] === null}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={() => dispatch({ type: "FINISH" })}
              disabled={answers[currentIndex] === null}
            >
              Finish
            </Button>
          )}
        </div>
      </Container>
    </Page>
  );
}
