import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="relative">
         <img src="/404page.svg" className="max-h-screen mx-auto" alt="" />
         <Link to="/">
            <button className="btn btn-warning absolute bottom-4 right-1/2">
               <FaArrowLeft></FaArrowLeft> Go to Home
            </button>
         </Link>
      </div>
   );
};

export default Error;
