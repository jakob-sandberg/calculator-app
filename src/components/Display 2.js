import { displayWrapper, display, input } from "../css/Display.module.css"

function Display ()  {
  return ( 
    <div className={displayWrapper}>
      <div className={display}>
        <span className={input}>Here is the data</span>
      </div>
    </div>
   );
}
 
export default Display;