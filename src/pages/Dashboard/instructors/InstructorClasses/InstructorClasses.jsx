import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useInstructorClasses from "../../../../hooks/useInstructorClasses";

const InstructorClasses = () => {
   const { classes, loadingClasses } = useInstructorClasses();
   if (loadingClasses) {
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
         <SectionTitle title="My Added Classes" subTitle="All the class added by me"></SectionTitle>
         <div className="overflow-x-auto mb-20">
            <table className="table table-zebra text-center">
               {/* head */}
               <thead className="bg-orange-500 text-black py-4">
                  <tr>
                     <th>#</th>
                     <th>Class Name</th>
                     <th>Current Student</th>
                     <th>Feedback</th>
                     <th className="text-end">Price</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {classes.map((classs, index) => (
                     <tr key={classs._id}>
                        <td>{index + 1}</td>
                        <td>
                           <div className="flex items-center justify-center gap-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={classs.image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold text-lg">{classs.class_name}</div>
                                 <div className="text-sm">Total Seats: {classs.total_seats}</div>
                              </div>
                           </div>
                        </td>
                        <td>{classs.current_students}</td>
                        <td>{classs.feedback || "No Feedback"}</td>
                        <td className="text-end">${classs.price}</td>
                        <td>
                           <p
                              className={`${
                                 classs.status === "approved"
                                    ? "bg-success"
                                    : classs.status === "pending"
                                    ? "bg-warning"
                                    : "bg-error"
                              } py-3 rounded-lg font-semibold uppercase`}
                           >
                              {classs.status}
                           </p>
                        </td>
                        <td>
                           <button className="btn btn-warning btn-xs">Update</button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default InstructorClasses;
