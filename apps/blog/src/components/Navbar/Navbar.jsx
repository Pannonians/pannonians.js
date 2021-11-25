import React from 'react'
import "./style.css"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert("Searched");
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (

        <div className="navbar">
            <ul className="navbarMenu">
                <li>
                    <NavLink to="/home">Home</NavLink>
                    {/* <NavLink to="/about-us">About Us</NavLink> */}
                    <a href="https://pannonians.com/#contact">Contact Us</a>
                    <NavLink to="/postForm">Create Post</NavLink>
                    <NavLink to="/allPosts">All Posts</NavLink>

                </li>
            </ul>

            <div className="search">
                <form onSubmit={submitSearch}>
                    <div className="userInfo link">
                        <input className={searchClass} type="text" placeholder="Search" /><i onClick={openSearch} className="fa fa-search searchIcon"></i>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Navbar;