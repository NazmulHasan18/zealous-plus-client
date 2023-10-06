import { FaBookReader, FaLaptop, FaPlayCircle, FaUsers } from "react-icons/fa";

const Info1 = () => {
   return (
      <div
         className="container my-8 px-5 lg:mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4"
         data-aos="zoom-in"
         data-aos-duration="1500"
      >
         <div>
            <p className="flex gap-4 items-center text-2xl font-semibold">
               <span className="p-6 text-gray-700 text-3xl bg-gray-200 rounded-full">
                  <FaLaptop></FaLaptop>
               </span>
               Online Tutoring
            </p>
         </div>
         <div>
            <p className="flex flex-row-reverse md:flex-row gap-4 items-center text-2xl font-semibold">
               <span className="p-6 text-green-600 text-3xl bg-green-200 rounded-full">
                  <FaBookReader></FaBookReader>
               </span>
               30+ Courses
            </p>
         </div>
         <div>
            <p className="flex gap-4 items-center text-2xl font-semibold">
               <span className="p-6 text-red-700 text-3xl bg-red-200 rounded-full">
                  <FaPlayCircle></FaPlayCircle>
               </span>
               Lifetime Access
            </p>
         </div>
         <div>
            <p className="flex gap-4 flex-row-reverse md:flex-row items-center text-2xl font-semibold">
               <span className="p-6 text-sky-700 text-3xl bg-sky-200 rounded-full">
                  <FaUsers></FaUsers>
               </span>
               3000+ Students
            </p>
         </div>
      </div>
   );
};

export default Info1;
