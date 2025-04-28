import React from 'react';
import Sidebar from "./pratials/Sidebar.jsx";
import TopNav from "./pratials/TopNav.jsx";

const Home = () => {
    document.title="hi";
    return (
        <>
            <Sidebar/>
            <div className="h-full w-[80%] ">
                <TopNav />
            </div>
        </>
    );
};

export default Home;
