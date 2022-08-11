import React from 'react';
import { AiOutlineSearch, AiOutlineMenuFold } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-none">
                    <Link to={'/'} class="btn btn-ghost font-bold text-orange-700 text-2xl">W_2_N</Link>
                </div>

                {/* searchBar */}
                <div class="form-control navbar-center ml-10">
                    <div class="input-group">
                        <input type="text" placeholder="Search…" class="input input-bordered" />
                        <button class="btn btn-square">
                            <AiOutlineSearch />
                        </button>
                    </div>
                </div>

                <div class="ml-auto gap-4">

                    {/* Catagories */}
                    <div class="flex-row items-center justify-center ">
                        <button class="btn btn-square btn-ghost">
                            <AiOutlineMenuFold className='text-xl' />
                        </button>
                        <span className='text-xl font-bold -ml-1'>Catagories</span>
                    </div>

                    {/* Bell */}
                    <button class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span class="badge badge-xs badge-success indicator-item"></span>
                        </div>
                    </button>

                    {/* Head */}
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;