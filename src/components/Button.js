import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { button } from "../css/Button.module.css"

function Button (props) {
  const { handleClick } = useContext(DataContext);

  return ( 
    <div className={button} onClick={() => handleClick(props.data)}>
      <span>{ props.data }</span>
    </div>
   );
}
 
export default Button;