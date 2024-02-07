import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../authprovider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [menuToggle, setMenuToggle] = useState(false);
    const handleMenu = () => {
        setMenuToggle(!menuToggle);
    }
    const [profileToggle, setProfileToggle] = useState(false);
    const handleProfileMenu = () => {
        setProfileToggle(!profileToggle);
    }
    return (
        <div className="bg-white border-b">
            <div className="navbar max-w-7xl mx-auto p-5">
                <div className="navbar-start">
                    <button className="mr-3 lg:hidden" onClick={handleMenu}>
                        {
                            menuToggle ?
                                <AiOutlineClose size={30} />

                                :
                                <AiOutlineMenu size={30} />
                        }
                    </button>
                    {
                        menuToggle &&
                        <ul className="lg:hidden text-lg absolute top-20 left-0 w-full bg-white border-b p-5 text-center z-20">
                            <li className="py-3"><Link to={'/'}>Home</Link></li>
                            <li className="py-3"><Link to={'menu'}>Menu</Link></li>
                            <li className="py-3"><Link to={'event'}>Events</Link></li>
                            <li className="py-3"><Link to={'blog'}>Blog</Link></li>
                        </ul>
                    }
                    <Link className="text-2xl font-semibold">Imaji <span className="text-custom">Cafe.</span></Link>
                </div>
                <div className="navbar-end">
                    <ul className="hidden lg:flex items-center text-lg">
                        <li className="px-3"><Link to={'/'}>Home</Link></li>
                        <li className="px-3"><Link to={'menu'}>Menu</Link></li>
                        <li className="px-3"><Link to={'event'}>Events</Link></li>
                        <li className="px-3"><Link to={'blog'}>Blog</Link></li>
                        <li className="px-3">
                            {
                                user ?
                                    <div onClick={handleProfileMenu} className="avatar relative cursor-pointer">
                                        <div className="w-12 h-12 rounded-full">
                                            {
                                                user?.photoURL ?
                                                    <img src={user.photoURL} />
                                                    :
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            }
                                        </div>
                                        {
                                            profileToggle &&
                                            <ul className="absolute right-0 top-14 w-48 p-5 bg-white border rounded-md text-sm font-semibold text-center z-30">
                                                <li className="py-2">
                                                    {
                                                        user?.displayName ?
                                                            user.displayName
                                                            :
                                                            user.email
                                                    }
                                                </li>
                                                <li className="py-2"><Link to={'/bookedorders'}>Booked Orders</Link></li>
                                                <li className="py-2"><Link>Booked Events</Link></li>
                                                <li className="py-2">
                                                    <button onClick={logOut}>Sign Out</button>
                                                </li>
                                            </ul>
                                        }
                                    </div>
                                    :
                                    <Link to={'signin'}>
                                        <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md px-7">Sign In</button>
                                    </Link>
                            }
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        {
                            user ?
                                <div onClick={handleProfileMenu} className="avatar relative cursor-pointer">
                                    <div className="w-12 h-12 rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img src={user.photoURL} />
                                                :
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        }
                                    </div>
                                    {
                                        profileToggle &&
                                        <ul className="absolute right-0 top-14 w-48 p-5 bg-white border rounded-md text-sm font-semibold text-center z-30">
                                            <li className="py-2">
                                                {
                                                    user?.displayName ?
                                                        user.displayName
                                                        :
                                                        user.email
                                                }
                                            </li>
                                            <li className="py-2"><Link to={'/bookedorders'}>Booked Orders</Link></li>
                                            <li className="py-2"><Link>Booked Events</Link></li>
                                            <li className="py-2">
                                                <button onClick={logOut}>Sign Out</button>
                                            </li>
                                        </ul>
                                    }
                                </div>
                                :
                                <Link to={'signin'}>
                                    <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md px-7">Sign In</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;