import { displayWrapper, display, input } from "../css/Display.module.css"
import { useContext } from "react"
import { DataContext} from "../context/DataContext"

function Display ()  {

  const { dataInput } = useContext(DataContext)
  return ( 
    <div className={displayWrapper}>
      <div className={display}>
        <span className={input}>{dataInput}</span>
      </div>
    </div>
   );
}
 
export default Display;