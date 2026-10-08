import { useState } from 'react';
import "./app.css";

function CalcDisplay({ dispValue }) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, buttonClassName = 'Button', onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operation, setOperation] = useState(null);

  const numbuttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (operation === null) {
      if (operand1 === null) {
        setDisp(value);
        setOperand1(value);
      } else {
        setDisp(operand1 + value);
        setOperand1(operand1 + value);
      }
    } else {
      if (operand2 === null) {
        setDisp(value);
        setOperand2(value);
      } else {
        setDisp(operand2 + value);
        setOperand2(operand2 + value);
      }
    }
  };

  const operationButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (operand1 !== null) {
      setOperation(value);
      setDisp(value);
    }
  };

  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
  };

  const equalButtonClickHandler = (e) => {
    e.preventDefault();
    if (operand1 === null || operand2 === null || operation === null) {
      return;
    }
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    let result;
    
    if (operation === "+") {
      result = num1 + num2;
    } 
    else if (operation === "-") {
      result = num1 - num2;
    } 
    else if (operation === "x") {
      result = num1 * num2;
    } 
    else if (operation === "÷") {
      if (num2 === 0) {
        result = "Error";
      } else {
        result = num1 / num2;
      }
    }
    setDisp(result);
    setOperand1(result.toString());
    setOperand2(null);
    setOperation(null);
  };

  const showNameHandler = () => {
    setDisp("Nashly Bondoc");
  };

  return (
    <div className='App'>
      {/* ✅ Fixed: no extra spacing, all in one line */}
      <div className='NameHeader'>
        <strong>Calculator of Nashly Bondoc - WMD3A</strong>
      </div>

      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={8} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={9} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={"÷"} buttonClassName="Button Operator" onClick={operationButtonClickHandler} />
          
          <CalcButton buttonLabel={4} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={5} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={6} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={"x"} buttonClassName="Button Operator" onClick={operationButtonClickHandler} />
          
          <CalcButton buttonLabel={1} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={2} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={3} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={"-"} buttonClassName="Button Operator" onClick={operationButtonClickHandler} />
          
          <CalcButton buttonLabel={"CLR"} buttonClassName="Button ClrButton" onClick={clearButtonClickHandler} />
          <CalcButton buttonLabel={0} onClick={numbuttonClickHandler} />
          <CalcButton buttonLabel={"="} buttonClassName="Button EqualButton" onClick={equalButtonClickHandler} />
          <CalcButton buttonLabel={"+"} buttonClassName="Button Operator" onClick={operationButtonClickHandler} />
        </div>
        
        <button className="NameButton" onClick={showNameHandler}>
          Bondoc
        </button>
      </div>
    </div>
  );
}

export default App;