import { Fragment } from "react";
import classes from "../css/Ops.module.css";
const Operations = (props) => {
  const ops = ["+","-","x","÷","7","8","9","=","4","5","6","←","1","2","3","(",".","0","C",")"];
  const operatorHandler = (e) => {
    const givenOperator = e.target.value;
    switch (givenOperator) {
      case "=":
        return props.onEvalHanlder(givenOperator);
      case "C":
        return props.onResetHandler(givenOperator);
      case "←":
        return props.onRemoveHanlder(givenOperator);
      case "AC":
        return props.onResetHandler(givenOperator);
      case "x":
        return props.onValueHandler("*");
      case "÷":
        return props.onValueHandler("/");
      default:
        return props.onValueHandler(givenOperator);
    }
  };

  return (
    <Fragment>
      <div className={classes.ops}>
        {ops.map((op) => (
          <button key={op} value={op} onClick={operatorHandler}>
            {op}
          </button>
        ))}
      </div>
    </Fragment>
  );
};

export default Operations;
