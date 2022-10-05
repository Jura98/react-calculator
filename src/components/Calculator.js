import Operations from "./Operations";
import Display from "./Display";
import classes from "../css/Calculator.module.css";
import { useState } from "react";

const char_regex = /[+-/*.]/;
const num_regex = /[123456789]/;

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const liftUpValue = (e) => {
    setInput((prevState) => {
      return [...prevState, e];
    });
  };

  const liftEvaluation = () => {
    const condition = char_regex.test(input) && num_regex.test(input);
    console.log(condition)
    if (condition) {
      try {
        setResult((eval(input.join(""))).toFixed(5));
        setInput("");
      } catch (e) {
        setInput("");
        setResult("Syntax Error");
      }
    }
  };

  return (
    <div className={classes.bc}>
      <div className={classes.wrapper}>
        <Display result={result} input={input} />
        <Operations
          onValueHandler={liftUpValue}
          onResetHandler={() => setInput("")}
          onRemoveHanlder={() => setInput(input.slice(0, input.length - 1))}
          onEvalHanlder={liftEvaluation}
        />
      </div>
    </div>
  );
};

export default Calculator;
