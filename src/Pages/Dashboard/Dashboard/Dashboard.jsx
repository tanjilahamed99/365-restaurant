import { FaBars, FaBook, FaCalendar, FaCoffee, FaHome, FaPeopleArrows, FaPhone, FaShopify, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import UseAdmin from "../../../Hooks/useAdmin/UseAdmin";


const Dashboard = () => {

    const isAdmin = true 

    return (
        <div className="flex  gap-10 justify-center mx-auto container">
            <div className="w-[20%] list-none bg-[#D1A054] min-h-screen">
                <div className="my-10 space-y-2 text-center">
                    <h2 className="font-semibold text-2xl">BISTRO BOSS</h2>
                    <h2 className="font-semibold">Restaurant</h2>
                </div>

                <ul className="space-y-5 pl-10">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink
                                    to="/dashboard/adminHome"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaHome className="text-3xl"></FaHome>
                                        Admin Home</h2>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/addItems"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaCoffee className="text-3xl"></FaCoffee>
                                        Add Items</h2>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/menageItems"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaBars className="text-3xl"></FaBars>
                                        Menage Items</h2>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/allUsers"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaBook className="text-3xl"></FaBook>
                                        Menage Bookings</h2>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/allUsers"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaPeopleArrows className="text-3xl"></FaPeopleArrows>
                                        All Users</h2>
                                </NavLink>
                            </li>

                        </> : <><li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                <h2 className="flex items-center mx-auto  text-xl gap-2"><FaHome className="text-3xl"></FaHome>
                                    User Home</h2>
                            </NavLink>
                        </li>
                            <li>
                                <NavLink
                                    to="/dashboard/payment"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaCalendar className="text-3xl"></FaCalendar>
                                        reservation</h2>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/payment"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaWallet className="text-3xl"></FaWallet>
                                        payment history</h2>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/carts"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaShoppingCart className="text-3xl"></FaShoppingCart>
                                        My Carts</h2>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/carts"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaHome className="text-3xl"></FaHome>
                                        Add Review</h2>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/carts"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <h2 className="flex items-center mx-auto  text-xl gap-2"><FaHome className="text-3xl"></FaHome>
                                        My Bookings</h2>
                                </NavLink>
                            </li></>
                    }
                    <hr className="w-[90%] " />
                    
                    <div className="space-y-5">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                <h2 className="flex items-center mx-auto  text-xl gap-2"><FaHome className="text-3xl"></FaHome>
                                    Home</h2>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/menu"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                <h2 className="flex items-center mx-auto  text-xl gap-2"><FaBars className="text-3xl"></FaBars>
                                    Menu</h2>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                <h2 className="flex items-center mx-auto  text-xl gap-2"><FaShopify className="text-3xl"></FaShopify>
                                    Shop</h2>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                <h2 className="flex items-center mx-auto  text-xl gap-2"><FaPhone className="text-3xl"></FaPhone>
                                    Contact</h2>
                            </NavLink>
                        </li>
                    </div>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;