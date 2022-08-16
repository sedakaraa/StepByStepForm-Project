import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { useState } from "react";
import Final from "./components/Final";

function App()  {

  let [form, setForm] = useState({
    name: "",
    email: "",
    soyisim:"",
    agree:"",
    favoriteColor:"",
    age:"",
    password: "",
  });

  return (
    <div className="container">
      <div className="brand-box">
        <h1>Arneca Form</h1>
        <p>This is my first form project</p>
      </div>
      <div className="magic-form">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepOne form={form} setForm={setForm}/> } />
          <Route path="/steptwo" element={<StepTwo form={form} setForm={setForm}  />} />
          <Route path="/stepthree" element={<StepThree form={form} setForm={setForm} />} />
          <Route path="/final" element={<Final form={form}/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
