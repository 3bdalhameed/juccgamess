// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTest from "./pages/Main";
import Qr from "./pages/QR";
import GotHacked from "./pages/GG";
import Try from "./pages/try";

import "./App.css";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MyTest />} />
                    <Route path="/gg" element={<GotHacked />} />
                    <Route path="/qr" element={<Qr />} />
                    <Route path="/try" element={<Try />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
