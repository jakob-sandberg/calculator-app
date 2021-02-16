import { createContext, useState } from "react"

export const DataContext = createContext();

function DataProvider (props) {
  const [dataInput, setDataInput] = useState("");

  const handleClick = (value) => {
    console.log("button pressed: ", value);
  }
  const values = {
    handleClick,
  }
  
    return(
    <DataContext.Provider value={values}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider;