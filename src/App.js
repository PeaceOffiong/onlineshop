import React from 'react';
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import { Home, Cart, ErrorPage } from "./Pages/Index";
import { Navbar } from "./components/index";
import "./CSS/Index.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element = {<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
