import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainDiv } from "./styledComponent";
import { GlobalStyle } from "./styles";
function App() {
  return (
    <>
      <GlobalStyle />
      <MainDiv>안녕ㅇㅇ</MainDiv>
      안녕하세요
    </>
  );
}

export default App;
