import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="text-5xl font-bold">
            <div className="navbar bg-base-100 px-8 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link>Instructors</Link></li>
                            <li><Link to="classes">Classes</Link></li>
                        </ul>
                    </div>
                    <a className="normal-case text-2xl">Enthusiast-Academy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li><Link to="/classes">Classes</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex items-center md:gap-3">
                            <div>
                                <img className='w-[50px] h-[50px] rounded-full' src={user?.photoURL} alt="" />
                            </div>

                            <Link onClick={handleLogOut} className="btn btn-outline">Log Out</Link>
                        </div> : <>
                            <Link to="/login"> <a className="btn btn-outline">Login</a></Link>
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

export default Header;