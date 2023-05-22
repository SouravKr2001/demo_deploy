import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Project from './Component/Project';
import About from './Component/About';

import { BrowserRouter,Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element ={<Greet/>} />
        <Route path="/project" element ={<Project/>} />
        <Route path="/about" element ={<About/>} />

      </Routes>
    </div>
  );
}

export default App;
