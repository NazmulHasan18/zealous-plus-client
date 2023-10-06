import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const Main = () => {
   const location = useLocation().pathname;
   const [hide, setHide] = useState(false);
   const { theme } = useContext(ThemeContext);

   useEffect(() => {
      AOS.init();
   }, []);

   useEffect(() => {
      if (location === "/error") {
         setHide(true);
      } else {
         setHide(false);
      }
   }, [location]);

   return (
      <div data-theme={`${theme}`}>
         {hide || <Navbar></Navbar>}
         <Outlet></Outlet>
         {hide || <Footer></Footer>}
      </div>
   );
};

export default Main;
