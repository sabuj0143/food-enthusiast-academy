import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isInstructor = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#acaa33]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">

                    {
                        isInstructor ? <>
                            <li><NavLink to="/dashboard/addClass">
                                <FaUtensils></FaUtensils> ADD AN CLASS
                            </NavLink></li>
                            <li><NavLink to="/dashboard/manageItem">
                                <FaWallet></FaWallet> MY CLASS
                            </NavLink></li>
                            <li><NavLink to="/dashboard/history">
                                <FaBook></FaBook> TOTAL ENROLLED STUDENTS
                            </NavLink></li>
                            <li><NavLink to="/dashboard/allUsers">
                                <FaUsers></FaUsers> FEEDBACK
                            </NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/userhome">
                                <FaHome></FaHome> User Home
                            </NavLink></li>
                            <li><NavLink to="/dashboard/reservations">
                                <FaCalendarAlt></FaCalendarAlt> Reservations
                            </NavLink></li>
                            <li><NavLink to="/dashboard/history">
                                <FaWallet></FaWallet> Payment History
                            </NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myCart">
                                    <FaShoppingCart /> My Classes
                                </NavLink>
                            </li>
                        </>
                    }


                    <div className="divider"></div>

                    <li><NavLink to="/">
                        <FaHome></FaHome>  Home
                    </NavLink></li>
                    {/* <li><NavLink to="/menu">
                        Our Classes
                    </NavLink></li> */}



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;