import  ReactDOM  from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./main.js";



ReactDOM.render(

    <BrowserRouter><App/></BrowserRouter>,document.getElementById('root')
)