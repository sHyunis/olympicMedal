import React, { useState } from "react";
import Header from "./components/header/Header";
import InputData from "./components/inputData/InputData";
import Result from "./components/result/result";
import "./styles/App.css";

const App = () => {
  const [result, setResult] = useState([]);

  // 새로운 국가, 메달개수 추가 함수
  const addResult = (newResult) => {
    setResult((prevResult) => [...prevResult, newResult]);
  };

  return (
    <>
      <div className="wrap">
        <div className="background-img">
          <Header />
        </div>
        <div className="wrapper">
          <InputData onAddResult={addResult} />

          {result.length > 0 && <Result result={result} />}
        </div>
      </div>
    </>
  );
};

export default App;
