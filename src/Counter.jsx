import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ContextComponent from "./ContextComponent";

function Counter() {
  const { count,handleIncrease,handleDecrease } = useContext(ContextComponent);

  return (
    <>
        <div className="container">
          <h1 className="text-center my-5">Count : {count}</h1>
          <div className="text-center">
            <button className="btn btn-success" onClick={handleIncrease}>
              Increase
            </button>
            <button className="btn btn-info ms-5" onClick={handleDecrease}>
              Decrease
            </button>
          </div>
        </div>
    </>
  );
}

export default Counter;
