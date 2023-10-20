import React from "react";
import ReactDOM from "react-dom/client";
import All from "./All";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";





ReactDOM.createRoot(document.querySelector('#root')).render(
    <BrowserRouter>
    <ScrollToTop/>
    <All/>
    </BrowserRouter>
)

