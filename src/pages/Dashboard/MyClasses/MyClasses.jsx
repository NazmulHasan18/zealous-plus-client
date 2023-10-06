import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import { apiInstance } from "../../../API/api";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import ClassCard from "../../shared/ClassCard/ClassCard";

const MyClasses = () => {
   const { user } = useAuth();

   const { data: myClasses, isLoading } = useQuery(["myClasses", user?.email], async () => {
      const res = await apiInstance.get(`/my_classes/${user?.email}`);
      return res.data;
   });

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

   console.log(myClasses);

   return (
      <div className="mb-24">
         <SectionTitle title="My Classes"></SectionTitle>
         <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mx-auto">
            {myClasses?.map((classs) => (
               <ClassCard classs={classs} key={classs._id}></ClassCard>
            ))}
         </div>
      </div>
   );
};

export default MyClasses;
