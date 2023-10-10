import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { apiInstance } from "../../../../API/api";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const MyClassUpdate = () => {
   const { id } = useParams();
   console.log(id);

   const { data, isLoading } = useQuery(["data", id], async () => {
      const res = await apiInstance.get(`/class/${id}`);
      return res.data;
   });

   if (isLoading) {
      return <p>loading...</p>;
   }

   console.log(data);

   return (
      <div className="container mx-auto">
         <SectionTitle title={"Class Details"}></SectionTitle>

         <div>
            <p>coming soon....</p>
         </div>
      </div>
   );
};

export default MyClassUpdate;
