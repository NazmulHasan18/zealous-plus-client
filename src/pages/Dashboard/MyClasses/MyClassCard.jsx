import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MyClassCard = ({ classs }) => {
   const { class_name, teacher, image, _id, duration } = classs;

   return (
      <div>
         <motion.div whileHover={{ scale: 1.1 }}>
            <div className="card  md:card-side bg-blue-400 shadow-xl">
               <figure>
                  <img src={image} alt="Movie" className="md:h-60 md:w-96" />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">{class_name}</h2>
                  <p>Teacher: {teacher.name}</p>
                  <p>Duration:{duration}</p>
                  <div className="card-actions justify-end">
                     <Link to={`/dashboard/my_class/${_id}`}>
                        <button className="btn btn-primary">View Class</button>
                     </Link>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default MyClassCard;
