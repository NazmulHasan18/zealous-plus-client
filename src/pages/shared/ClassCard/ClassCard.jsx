import { motion } from "framer-motion";
import { addClass } from "../../../API/api";
import useAuth from "../../../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";

const ClassCard = ({ classs }) => {
   const { user, loading } = useAuth();
   const { class_name, teacher, current_students, total_seats, image, _id, status, price, duration } = classs;

   const handelAddClass = () => {
      if (loading) {
         return (
            <>
               <span className="loading-lg loading loading-spinner text-primary"></span>
               <span className="loading-lg loading loading-spinner text-secondary"></span>
               <span className="loading-lg loading loading-spinner text-accent"></span>
               <span className="loading-lg loading loading-spinner text-neutral"></span>
               <span className="loading-lg loading loading-spinner text-info"></span>
               <span className="loading-lg loading loading-spinner text-success"></span>
               <span className="loading-lg loading loading-spinner text-warning"></span>
               <span className="loading-lg loading loading-spinner text-error"></span>
            </>
         );
      }
      if (!user) {
         return <Navigate to="/login" replace={true}></Navigate>;
      }
      addClass(_id, user?.email);
   };

   return (
      <div data-aos="fade-up" data-aos-duration="1500">
         <motion.div whileHover={{ scale: 1.1 }}>
            <div className="card bg-gradient-to-r from-sky-400 to-sky-600 shadow-xl rounded-xl w-[350px] lg:w-auto lg:h-[600px]">
               <figure>
                  <img src={image} alt="Album" className="rounded-t-xl" />
               </figure>
               <div className="card-body  text-white">
                  <h1 className="text-4xl font-extrabold">{class_name}</h1>
                  <h2 className="text-2xl font-bold">
                     Teacher: <span className="">{teacher.name}</span>
                  </h2>

                  <p className="font-bold">
                     Current Student: <span className="font-semibold">{current_students}</span>
                  </p>
                  <div className="lg:flex gap-4">
                     <p className="font-semibold">
                        Price: <span className="">$ {price}</span>
                     </p>
                     <p className="font-semibold">
                        Duration: <span className="">{duration} Month</span>
                     </p>
                  </div>

                  <p className="font-semibold">Available Seats: {total_seats - current_students}</p>

                  <div className="flex justify-end">
                     {status !== "approved" || total_seats - current_students <= 0 ? (
                        <button className="btn btn-disabled my-5 bg-red-600  text-white border-white hover:border-none">
                           Add To Class &gt;
                        </button>
                     ) : user ? (
                        <button
                           onClick={handelAddClass}
                           className="btn bg-blue-900 my-5 hover:bg-blue-700  hover:border-none text-white"
                        >
                           Add To Class &gt;
                        </button>
                     ) : (
                        <Link to="/login">
                           <button className="btn bg-blue-900 my-5 hover:bg-blue-700  hover:border-none text-white">
                              Add To Class &gt;
                           </button>
                        </Link>
                     )}
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default ClassCard;
