import React from 'react';
import {Link} from "react-router-dom";

const TopNav = () => {
    return (
        <div className="w-full h-[10vh]  relative flex justify-center items-center ">
            <i className="ri-search-2-line text-3xl text-zinc-400"></i>

            <input type="text" placeholder="Search Anything" className='w-[50%] mx-10 text-zinc-200  p-5 text-xl outline-none '/>
            <i className="ri-close-circle-fill text-3xl text-zinc-400"></i>


            <div className="w-[50%] absolute h-[50vh] bg-zinc-100 top-[90%] ">
                <Link className="p-10 w-full bg-zinc-200 flex justify-start items-center border-b-2    " to="/alsnd">
                    <img src="" alt=""/>
                    <span>hellowwww</span>
                </Link>
            </div>

        </div>
    );
};

export default TopNav;
