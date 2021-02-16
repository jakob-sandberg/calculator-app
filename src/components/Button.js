import { button } from "../css/Button.module.css"

function Button (props) {
  return ( 
    <div className={button}>
      <span>{ props.data }</span>
    </div>
   );
}
 
export default Button;