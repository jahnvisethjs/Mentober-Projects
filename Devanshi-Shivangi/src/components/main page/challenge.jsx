import React from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import picture from "./meditation.svg"
export default function main() {
    return (
        <div className="mainintro challenge">
            <img src={picture} alt="relax" height="200px" width="200px"/>
           <h2 className="rainbow-text ">  Lets start this journey of self developement together.</h2>
            <h1 className="rainbow-text "> Today</h1>
        </div>)
}
