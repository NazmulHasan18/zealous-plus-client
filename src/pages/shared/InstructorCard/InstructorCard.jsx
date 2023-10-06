import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor, index }) => {
   const { name, current_students, _id, languages_taught, teaching_experience, profile_picture } = instructor;

   return (
      <div data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`} data-aos-duration="2000">
         <motion.div whileHover={{ scale: 1.1 }}>
            <div className="card mx-auto card-compact max-w-96 bg-orange-50 shadow-xl rounded-none">
               <figure>
                  <img src={profile_picture} alt={name} />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>
                     <span className="font-semibold">Language Taught:</span>{" "}
                     {languages_taught.map((language, index) => (
                        <span key={index}> {language},</span>
                     ))}
                  </p>
                  <p>
                     <span className="font-semibold">Experience: </span>
                     {teaching_experience}
                  </p>
                  <p>
                     <span className="font-semibold">Guided: </span>
                     {current_students} Student {"(Last Months)"}
                  </p>
                  <div className="card-actions justify-end">
                     <Link to={`/instructor/${_id}`}>
                        <button className="btn btn-outline border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-none">
                           See Classes &gt;
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default InstructorCard;
