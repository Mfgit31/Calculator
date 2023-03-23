import { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {

  const [ text, setText ] = useState("");
  const [ result, setResult ] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  }

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input)); 
  }

  const resetInput = () => {
    setText("");
    setResult("");
  }
  
  const buttonColor = "#f2a33c"

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleCLick={addToText} />
          <Button symbol="8" handleCLick={addToText} />
          <Button symbol="9" handleCLick={addToText} />
          <Button symbol="/" color={buttonColor} handleCLick={addToText} />
          </div>
          <div className="row">
          <Button symbol="4" handleCLick={addToText} />
          <Button symbol="5" handleCLick={addToText} />
          <Button symbol="6" handleCLick={addToText} />
          <Button symbol="*" color={buttonColor} handleCLick={addToText} />
          </div>
          <div className="row">
          <Button symbol="1" handleCLick={addToText} />
          <Button symbol="2" handleCLick={addToText} />
          <Button symbol="3" handleCLick={addToText} />
          <Button symbol="+" color={buttonColor} handleCLick={addToText}/>
          </div>
          <div className="row">
          <Button symbol="0" handleCLick={addToText} />
          <Button symbol="." handleCLick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleCLick={addToText} />
        </div>
        <Button symbol="Clear" color="grey" handleClick={resetInput} />
      </div>
    </div>
  );
}

export default App;
