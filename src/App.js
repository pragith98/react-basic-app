import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
