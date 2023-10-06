// import { useQuery } from "react-query";
// import { fetchInstructors } from "../../../API/api";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// import InstructorCard from "../../shared/InstructorCard/InstructorCard";

const PopularInstructors = () => {
   // todo: Instructors will display later.
   // const { data: instructors, isLoading } = useQuery("instructors", fetchInstructors);

   // if (isLoading) {
   //    return (
   //       <>
   //          <span className="loading-lg loading loading-spinner text-primary"></span>
   //          <span className="loading-lg loading loading-spinner text-secondary"></span>
   //          <span className="loading-lg loading loading-spinner text-accent"></span>
   //          <span className="loading-lg loading loading-spinner text-neutral"></span>
   //          <span className="loading-lg loading loading-spinner text-info"></span>
   //          <span className="loading-lg loading loading-spinner text-success"></span>
   //          <span className="loading-lg loading loading-spinner text-warning"></span>
   //          <span className="loading-lg loading loading-spinner text-error"></span>
   //       </>
   //    );
   // }

   return (
      <div className="w-[375px] lg:w-auto mx-auto overflow-x-hidden">
         <SectionTitle
            title="Popular Teacher"
            subTitle="Unlock Fluent Proficiency with Our Esteemed Language Learning Instructors"
         />

         <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 container mx-auto">
            {/* {instructors.slice(0, 6).map((instructor, index) => (
               <InstructorCard instructor={instructor} index={index} key={instructor._id}></InstructorCard>
            ))} */}
            <p>All Instructors are coming soon...</p>
         </div>
         <div className="text-center my-10">
            <Link to="/instructors">
               <button className="button">
                  All Instructors <FaArrowRight className="text-xl inline"></FaArrowRight>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default PopularInstructors;
