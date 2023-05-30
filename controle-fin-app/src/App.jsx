import React from "react";
import GlobalStyle from "./Styles/global";
import Header from "./Components/Header/Header";
import Resume from "./Components/Resume";
import Form from "./Components/Form/Form";

function App() {

  return (
    <>
      <Header/>
      <Resume/>
      <Form/>
      <GlobalStyle/>
    </>
  )
}

export default App
