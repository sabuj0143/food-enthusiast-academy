import { FaBook, FaHome, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/adminhome">
                        <FaHome></FaHome> HOME
                    </NavLink></li>
                    <li><NavLink to="/dashboard/addItem">
                        <FaUtensils></FaUtensils> ADD AN ITEM
                    </NavLink></li>
                    <li><NavLink to="/dashboard/manageItem">
                        <FaWallet></FaWallet> MANAGE ITEMS
                    </NavLink></li>
                    <li><NavLink to="/dashboard/history">
                        <FaBook></FaBook> MANAGE BOOKINGS
                    </NavLink></li>
                    <li><NavLink to="/dashboard/allUsers">
                        <FaUsers></FaUsers> ALL USERS
                    </NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/">
                        <FaHome></FaHome>  Home
                    </NavLink></li>
                    <li><NavLink to="/classes">
                        Classes
                    </NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;