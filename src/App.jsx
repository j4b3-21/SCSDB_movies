import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";

const App = () => {
    return (
        <div className="h-screen w-screen bg-[#1F1E24] flex">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </div>
    );
};

export default App;
