import { calculator } from "../css/Calculator.module.css"
import Display from "./Display";

function Calculator () {
  return ( 
    <div className={calculator}>
      <Display />
      <h2>This is Button comp</h2>
    </div>
   );
}
 
export default Calculator;