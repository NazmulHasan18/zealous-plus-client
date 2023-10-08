import { Link } from "react-router-dom";

// https://i.ibb.co/rkFr4gr/Nazmul1.png
// https://i.ibb.co/D9Zx7P3/Shaila1.png
// https://i.ibb.co/9h25X8G/Sojib1.png

const Banner = () => {
   return (
      <div>
         <div className="relative mx-auto p-5 pt-20 lg:p-24 bg-[#754ffe]">
            <div className="max-w-screen-2xl mx-auto ">
               <div className="relative max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
                  <div className="lg:w-4/6 pr-10 mt-10 lg:mt-auto">
                     <h1 className="font-bold text-5xl lg:text-6xl text-white">
                        Welcome to Zealous Plus Learning Application
                     </h1>
                     <p className="text-2xl font-semibold mt-6 text-gray-400 lg:mt-20">
                        Hand-picked Instructor and expertly crafted courses, designed for the modern students
                        and entrepreneur.
                     </p>
                     <div className="lg:py-10">
                        <Link to="/classes">
                           <button className="btn btn-outline btn-xs text-base md:text-xl sm:btn-sm md:btn-md lg:btn-lg btn-natural font-bold">
                              Enroll Now!
                           </button>
                        </Link>
                     </div>
                  </div>

                  <img src="https://i.ibb.co/zZ9LKGF/hero-img.png" className="lg: lg:w-[500px]" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
