import { useState } from "react";
import { apiInstance } from "../../../API/api";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "react-query";

const MyClassDetails = () => {
   const { id } = useParams();
   const { user } = useAuth();

   const { data, isLoading } = useQuery(["class"], () =>
      apiInstance.get(`/my_class/${id}?email=${user.email}`)
   );
   const { data: classList, isLoading: isLoading2 } = useQuery(["class", data], () =>
      apiInstance.get(`/class_list?email=${data?.data?.teacher.email}&name=${data?.data?.class_name}`)
   );
   console.log(classList);
   const [videoId, setVideoId] = useState(classList?.data[0]?.video_id);
   if (isLoading || isLoading2) {
      return <p>Loading....</p>;
   }

   return (
      <div className="container mx-auto">
         <div className="py-5">
            <h2 className="text-2xl font-bold">{data?.data.class_name}</h2>
            <p className="text-lg font-semibold">By {data?.data.teacher.name}</p>
         </div>
         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10">
            <div className="relative pt-[56.25%] py-5 p-0 col-span-2">
               <iframe
                  src={`https://drive.google.com/file/d/${videoId}/preview`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  //    style={{position:absolute,top:0,left:0,width:100%,height:100%,}}
                  title="my task"
                  className="absolute top-0 left-0 w-full h-full rounded-md"
               ></iframe>
            </div>
            <div className="bg-base-300 p-6 rounded-md">
               <h2 className="text-xl mb-4 font-bold text-gray-700">Class Content</h2>
               <div className="border">
                  {classList?.data.map((topic) => {
                     return (
                        <div
                           className="flex gap-5 items-center bg-white p-3 rounded-lg shadow-md"
                           key={topic._id}
                        >
                           <img src={data?.data.image} alt="" className="w-12 h-12 rounded-md" />
                           <div>
                              <h3
                                 className="text-lg font-bold cursor-pointer hover:text-orange-600"
                                 onClick={() => setVideoId(topic.video_id)}
                              >
                                 {topic.class_title}
                              </h3>
                              <p>Date: {topic.date}</p>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyClassDetails;
