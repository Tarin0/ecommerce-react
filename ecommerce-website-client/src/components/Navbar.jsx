import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [darkMode,setDarkMode] = useState(false);

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
        }
        
    },[darkMode])
    const handleLogout = () => {
        logOut().then((result) => console.log(result));
    };
    
    return (
        <div>
            <div className="navbar flex flex-col lg:flex-row bg-blue-200 dark:bg-black">
                <div className="flex-1">
                    <img className="h-24 w-24 rounded-full" src="https://i.ibb.co/VVQ3P9q/nan-logo2.jpg" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-xl text-orange-900">
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/addProduct">
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">
                                My Cart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Contact Us
                            </NavLink>
                        </li>
                        {
                            user?.email ?
                            <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full -pb-10">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={handleLogout}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                                :
                                <li>
                                    <NavLink to="/login">
                                        Login
                                    </NavLink>
                                </li>

                        }
                        <li>
                            <button 
                            onClick={()=>{
                                setDarkMode(!darkMode);
                            }} 
                            className="bg-black dark:bg-white dark:text-black text-white rounded">
                                {darkMode ? 'Light' : 'Dark'} Mode
                                </button>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;