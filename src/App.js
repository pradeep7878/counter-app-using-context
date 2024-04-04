import React, { useContext } from "react";
import Counter from "./Counter";
import { DataProvider } from "./ContextComponent";


function App() {

  return (
    <>
      <DataProvider>
         <Counter />
      </DataProvider>
    </>
  );
}

export default App;
