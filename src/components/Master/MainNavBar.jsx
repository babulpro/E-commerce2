
import Link from 'next/link';
import React from 'react';
import Profile from '../utilits/Profile'; 
 
const MainNavBar = ({data}) => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 fixed w-full z-50 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                         
                        
                        {
                                data.length > 0 && data.map((item,index)=>(
                                    <li key={index}>
                                        <Link href={`/product/${item._id}`} key={item._id}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        {/* <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li> */}
                         
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     
                    {
                                data.length > 0 && data.map((item,index)=>(
                                    <li key={index}>
                                        <Link href={`/product/${item._id}`} key={item._id}>{item.name}</Link>
                                    </li>
                                ))
                            }
                    {/* <li>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li> */}
                     
                    </ul>
                </div>
                <div className="navbar-end">
                        <Profile/>
                </div>
            </div>   
        </div>
    );
};

export default MainNavBar;