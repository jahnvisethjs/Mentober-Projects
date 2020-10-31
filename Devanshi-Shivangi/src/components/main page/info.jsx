import React from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sunrise from './sun.svg';
export default function main() {
    return (
        <div className="mainintro info">
           {/*The best way to have control on your emotions is to track them. We humans have so many emotions, at times it becomes very difficult to actually control them.*/}
           {/* knowing them is the first path in your journey of self developement.*/}
           <img src={sunrise}  alt="sun" height="200px" width="200px"/>
        </div>)
}
