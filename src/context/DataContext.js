import { createContext, useState } from "react";

export const DataContext = createContext();

function DataProvider(props) {
  const [dataInput, setDataInput] = useState("");

  const handleClick = (value) => {
    console.log("Button pressed: ", value);
    if (/\d/.test(value)) {
      setDataInput(dataInput + value);
    } else if (value === "clear") {
      setDataInput("");
    } else if (value === "=") {
      console.log("Calculating...");
      calculate(dataInput);
    } else {
      setDataInput(dataInput + ` ${value} `);
    }
  };

  const calculate = (calculation) => {
    console.log(dataInput);
    let calcArray = calculation.split(" ");
    let operatorsArray = calcArray.filter((e) => /\D/.test(e)); // Båda dessa filter kommer inte hantera decimaltal.
    let numbersArray = calcArray.filter((e) => !/\D/.test(e));
    console.log(operatorsArray);
    console.log(numbersArray);
    let result = parseInt(numbersArray[0]);
    for (let i = 0; i < numbersArray.length; i++) {
      switch (operatorsArray[i]) {
        case "+":
          result += parseInt(numbersArray[i + 1]);
          break;
        case "-":
          result -= numbersArray[i + 1];
          break;
        case "x":
          result *= numbersArray[i + 1];
          break;
        case "/":
          result /= numbersArray[i + 1];
          break;
      }
    }
    setDataInput(result);
  };

  const values = {
    handleClick,
    dataInput,
  };

  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
}

export default DataProvider;