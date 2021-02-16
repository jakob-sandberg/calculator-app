import ButtonsContainer from "../components/ButtonsContainer"
import { calculator } from "../css/Calculator.module.css"
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