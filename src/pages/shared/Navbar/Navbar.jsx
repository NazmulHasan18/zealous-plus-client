import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { AiFillSetting } from "react-icons/ai";
import Toggle from "react-toggle";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useRole from "../../../hooks/useRole";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";

const Navbar = () => {
   const { user, logOut } = useAuth();
   const [toggle, setToggle] = useState(false);
   const [setting, setSetting] = useState(false);
   const { toggleTheme } = useContext(ThemeContext);

   useEffect(() => {
      themeChange(false);
   }, []);

   const { role } = useRole();

   const handelLogOut = () => {
      logOut()
         .then(() => {
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "User Log Out Successful",
               showConfirmButton: false,
               timer: 1000,
            });
         })
         .catch((error) => {
            toast.error(error.message);
         });
   };

   const navs = (
      <>
         <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
               Home
            </NavLink>
         </li>
         <li>
            <NavLink to="/instructors" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
               Instructors
            </NavLink>
         </li>
         <li>
            <NavLink to="/classes" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
               Classes
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/how-to-select-course"
               className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
               How to select course
            </NavLink>
         </li>
         {user ? (
            <>
               <li>
                  <NavLink
                     to={`/dashboard/${
                        role === "user"
                           ? "my_classes"
                           : role === "instructor"
                           ? "instructor_classes"
                           : "manage_users"
                     }`}
                     className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
                  >
                     Dashboard
                  </NavLink>
               </li>

               <li>
                  <NavLink
                     to="/profile"
                     className={({ isActive }) => (isActive ? "ring ring-warning ring-offset-base-100" : "")}
                  >
                     <div className="avatar">
                        <div className="w-12 rounded-full ring-offset-2">
                           <img src={user.photoURL} title={user?.displayName} />
                        </div>
                     </div>
                  </NavLink>
               </li>
            </>
         ) : (
            <li>
               <NavLink to="/login" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
                  Login
               </NavLink>
            </li>
         )}

         <li tabIndex={0}>
            <details className="dropdown dropdown-end">
               <summary className="btn btn-ghost text-xl" onClick={() => setSetting(!setting)}>
                  <AiFillSetting className={`${setting && "rotate-45"}`}></AiFillSetting>
               </summary>
               <ul className="p-2 shadow menu dropdown-content bg-white text-black rounded-box w-52">
                  <li>
                     <label>
                        {/* !TODO: Theme is not working */}
                        <Toggle
                           onClick={toggleTheme}
                           icons={{
                              checked: <FaSun />,
                              unchecked: <FaMoon />,
                           }}
                        />
                        <span>Theme</span>
                     </label>
                  </li>
                  {user && (
                     <li>
                        <button
                           className="btn btn-sm text-white bg-[#ffb038] hover:bg-[#ffbe5d] rounded-full"
                           onClick={handelLogOut}
                        >
                           Log Out
                        </button>
                     </li>
                  )}
               </ul>
            </details>
         </li>
      </>
   );

   return (
      <div className="navbar bg-black bg-opacity-50 text-white z-30 text-xl font-semibold fixed">
         <div className="navbar-start flex-grow">
            <div className="dropdown text-black">
               <label tabIndex={0} className="btn btn-circle swap swap-rotate lg:hidden">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" onClick={() => setToggle(!toggle)} />

                  {/* hamburger icon */}
                  <svg
                     className="swap-off fill-current"
                     xmlns="http://www.w3.org/2000/svg"
                     width="32"
                     height="32"
                     viewBox="0 0 512 512"
                  >
                     <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* close icon */}
                  <svg
                     className="swap-on fill-current"
                     xmlns="http://www.w3.org/2000/svg"
                     width="32"
                     height="32"
                     viewBox="0 0 512 512"
                  >
                     <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
               </label>
               <ul
                  tabIndex={1}
                  className={`menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50 ${
                     !toggle && "hidden"
                  }`}
               >
                  {navs}
               </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-2xl">
               <img src="./Tube.png" alt="Zealous Plus" className="h-12" />
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center">{navs}</ul>
         </div>
      </div>
   );
};

export default Navbar;
