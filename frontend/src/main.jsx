import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { createRoot } from 'react-dom/client'
import {AppProvider} from "./store/appContext.jsx";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
