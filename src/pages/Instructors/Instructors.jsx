import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { useQuery } from "react-query";
import { fetchInstructors } from "../../API/api";
import InstructorCard from "../shared/InstructorCard/InstructorCard";
import PageCover from "../shared/PageCover/PageCover";

const Instructors = () => {
   const { data: instructors, isLoading } = useQuery("instructors", fetchInstructors);

   if (isLoading) {
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

   return (
      <div>
         <PageCover title="Instructors" subTitle="All Your Instructors Are In Single Page"></PageCover>
         <SectionTitle title="All Instructors" subTitle="Don't Trim Your Dream Let It Grow"></SectionTitle>
         <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 mb-24">
            {instructors.map((instructor, index) => (
               <InstructorCard instructor={instructor} index={index} key={instructor._id}></InstructorCard>
            ))}
         </div>
      </div>
   );
};

export default Instructors;
