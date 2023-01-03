import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BottomNav from "./BottomNav";
import { BrowserRouter } from "react-router-dom";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BottomNav />
      <StrictMode>
      <App />
      </StrictMode> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)