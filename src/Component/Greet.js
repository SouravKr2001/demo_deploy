import React from 'react'
import { Link, Route, Routes } from "react-router-dom";

function Greet() {
  return (
    <div className='greet'>

        <h1>Sourav Kumar    </h1>
      
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        </ul>
    </div>
  )
}

export default Greet