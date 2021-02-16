import Button from "../components/Button"
import { useState } from "react"
import { buttons } from "../css/ButtonsContainer.module.css"

function ButtonsContainer ()  {
  const [buttonsValues, setButtonsValues] = useState([
    7, 8, 9, "/", 4, 5, 6, "x", 1, 2, 3, "-", "clear", 0,  "+", "="
  ])

  return ( 
    <div className={buttons}>
      {buttonsValues.map((value) => (
        <Button />
      ))}
      
    </div>
   );
}
 
export default ButtonsContainer;