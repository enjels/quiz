//react, componentes, estáticos
import { useContext } from "react";

import Welcome from "./components/Welcome";
import Questions from "./components/Questions";

import "./App.css";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
    </div>
  );
}

export default App;
