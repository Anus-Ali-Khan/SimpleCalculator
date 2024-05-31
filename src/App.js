import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  //Addition function
  const sum = () => {
    const answer = Number(input) + Number(result);
    setResult(answer);
  };

  //Subtraction function
  const subtraction = () => {
    const answer = Number(result) - Number(input);
    setResult(answer);
  };

  //Multiplication function
  const multiplication = () => {
    const answer = Number(result) * Number(input);
    setResult(answer);
  };

  //Division function
  const divison = () => {
    const answer = Number(result) / Number(input);
    setResult(answer);
  };

  const handleReset = () => {
    setInput("");
  };

  const handleResetResult = () => {
    setResult("");
  };

  return (
    <div className="wrapper">
      <div className="App">
        <p className="result">Result : {result}</p>
        <input
          type="number"
          className="input"
          placeholder="type number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="btn-container">
          <button className="btn" onClick={sum}>
            add
          </button>
          <button className="btn" onClick={subtraction}>
            subtract
          </button>
          <button className="btn" onClick={multiplication}>
            multiply
          </button>
          <button className="btn" onClick={divison}>
            divide
          </button>

          <button className="btn reset-btn" onClick={handleReset}>
            reset input
          </button>
          <button className="btn reset-btn" onClick={handleResetResult}>
            reset result
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
