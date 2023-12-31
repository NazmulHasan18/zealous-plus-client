import { Link } from "react-router-dom";

// https://i.ibb.co/rkFr4gr/Nazmul1.png
// https://i.ibb.co/D9Zx7P3/Shaila1.png
// https://i.ibb.co/9h25X8G/Sojib1.png

const Banner = () => {
   return (
      <div>
         <div className="relative mx-auto p-5 pb-0 pt-20 lg:p-16 lg:pr-8 bg-[#754ffe]">
            <div className="max-w-screen-2xl mx-auto ">
               <div className="relative max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                  <div className="lg:w-4/6 pr-10 mt-10 lg:mt-auto">
                     <h1 className="font-bold text-5xl lg:text-6xl text-white">
                        Welcome to Zealous Plus Learning Application
                     </h1>
                     <p className="text-2xl font-semibold mt-4 text-gray-400 lg:mt-20">
                        Hand-picked Instructor and expertly crafted courses, designed for the modern students
                        and entrepreneur.
                     </p>
                     <div className="lg:py-10 py-5">
                        <Link to="/login">
                           <button className="btn btn-xs text-base mr-3 md:btn-md btn-neutral font-bold">
                              Enroll Now!
                           </button>
                        </Link>
                        <Link to="/classes">
                           <button className="btn btn-xs text-base mr-3 md:btn-md btn-natural font-bold">
                              Browse Class
                           </button>
                        </Link>
                     </div>
                  </div>

                  <img src="./Home_Banner.png" className="lg:h-[600px] mb-0 lg:w-auto" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
