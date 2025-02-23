import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import SignUp from "./Views/SignUp/SignUp";
import Cuestionario from "./Components/Cuestionario/Cuestionario";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/simulador" element={ <Home /> }></Route>
        <Route path="/iniciar-sesion" element={ <Login /> }></Route>
        <Route path="/registro" element={ <SignUp /> }></Route>
        <Route path="/cuestionario" element={ <Cuestionario /> }></Route>

        <Route path="/*" element={ <Login /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;