//react, componentes, estáticos
import { useContext, useEffect } from "react";

import Welcome from "./components/Welcome";
import Questions from "./components/Questions";

import "./App.css";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //* embaralhar as perguntas
    dispatch({type:"REORDER_QUESTIONS"})
  });

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
