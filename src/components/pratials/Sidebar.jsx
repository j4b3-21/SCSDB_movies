import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    const feeds = [
        {
            icon: <i className="ri-fire-fill"></i>,
            title: "Trending",
            path: "/trending"
        },
        {
            icon: <i className="ri-bard-fill"></i>,
            title: "Popular",
            path: "/popular"
        },
        {
            icon: <i className="ri-movie-2-fill"></i>,
            title: "Movies",
            path: "/movies"
        },
        {
            icon: <i className="ri-tv-2-fill"></i>,
            title: "TV Shows",
            path: "/shows"
        },
        {
            icon: <i className="ri-team-fill"></i>,
            title: "People",
            path: "/people"
        },
    ];
    return (
        <div className="h-full w-[20%] border-r-1 border-white p-5 pl-10 text-2xl ">
            <h1 className="text-white ">
                <i className="ri-tv-fill text-[#6556CD] mr-3 "></i>
                <span className='font-bold'> SCSDB.</span>
            </h1>
            <div>
                <h1 className='text-xl text-white mt-10'>New Feeds</h1>
                <div className='ml-5  list-none text-zinc-400   '>
                    {feeds.map((item) => (
                        <li   key={item.title}>
                            <Link
                                to={item.path}
                                className="flex hover:bg-[#6556CD] items-center gap-3 text-xl p-2 mt-10 rounded-md "
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </div>
            </div>
            <hr className="text-white mt-10"/>
            <div className="text-xl text-white mt-10">
                <h1>Website information</h1>
            </div>
            <div className='ml-5  list-none text-zinc-400   '>
                    <li>
                        <Link on
                            to="/about"
                            className="flex items-center gap-3 text-xl p-2 mt-10 rounded-md hover:bg-[#6556CD]"
                        >
                            <i className="ri-error-warning-fill"></i>
                            <span>About SCSDB</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="flex items-center gap-3 text-xl p-2 mt-10 rounded-md hover:bg-[#6556CD]"
                        >
                            <i className="ri-phone-fill"></i>
                            <span>Contact Us</span>
                        </Link>
                    </li>
            </div>
        </div>
    );
};

export default Sidebar;
