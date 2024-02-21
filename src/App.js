import './App.css';
import Header from "./components/Header/Header";
import Board from "./components/board/Board";
import InstructionsPanel from "./components/InstructionsPanel/InstructionsPanel";

function App() {
  return (
      <div className="App">
        <div className="main">
          
          <Header />
          <hr/>
          <Board />
          <hr />
          <InstructionsPanel />
        </div>
      </div>
  );
}

export default App;
