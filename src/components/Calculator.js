import { calculator } from "../css/Calculator.module.css"
import ButtonsContainer from "./ButtonsContainer";
import Display from "./Display";

function Calculator () {
  return ( 
    <div className={calculator}>
      <Display />
      <ButtonsContainer />
    </div>
   );
}
 
export default Calculator;