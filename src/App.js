import React from "react";
import { Routes, Route } from "react-router-dom";

//ADD TOAST NOTIFICATIONS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//IMPPORT COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import WeekView from "./components/WeekView/WeekView";
import AddHabit from "./components/AddHabit/AddHabit";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddHabit />}></Route>
        <Route path="/weekview/:id" element={<WeekView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
