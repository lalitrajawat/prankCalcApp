import { useState } from "react";
import "./body.css";

function Body() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    setDisplay((prev) => {
      if (prev === "0") return value;
      return prev + value;        
    });
  };

function finalPrank() {
  const equation = display;
  setTimeout(() => {
    setDisplay("Hello World!");
  });

  setTimeout(() => {
    try {
      setDisplay(eval(equation));
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setDisplay("Error");
    }
  }, 2000);
}


  return (
    <div className="calc">
      <div className="display">
        <div className="history" id="history"></div>
        <div className="current" id="current">{display}</div>
      </div>

      <div className="keys">
        <button onClick={() => setDisplay("0")}>AC</button>
        <button onClick={() => handleClick("±")}>±</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button className="op" onClick={() => handleClick("÷")}>÷</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="op" onClick={() => handleClick("×")}>×</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="op" onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="op" onClick={() => handleClick("+")}>+</button>

        <button className="wide" onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="eq" onClick={finalPrank}>=</button>
      </div>
    </div>
  );
}

export default Body;
