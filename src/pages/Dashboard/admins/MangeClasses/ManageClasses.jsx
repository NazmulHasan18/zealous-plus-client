import Swal from "sweetalert2";
import useAllClasses from "../../../../hooks/useAllClasses";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { apiInstance } from "../../../../API/api";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import FeedbackModal from "./FeedbackModal";

const ManageClasses = () => {
   const { user } = useAuth();
   const { classes, loadingClasses, refetchClasses } = useAllClasses();
   const [_id, setId] = useState("");

   const [modalOpen, setModalOpen] = useState(false);

   const openModal = (id) => {
      setId(id);
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };

   const handelStatus = (id, status) => {
      console.log(id, status);
      Swal.fire({
         title: "Are you sure?",
         text: `Do you want to ${status}?`,
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: `Yes, ${status}`,
      }).then(async (result) => {
         if (result.isConfirmed) {
            const res = await apiInstance.patch(`/class/${id}?email=${user?.email}`, {
               status: status,
               reviewed: true,
            });
            refetchClasses();
            if (res.data.modifiedCount > 0) {
               Swal.fire("Status Updated!", `Class is ${status}!`, "success");
            }
         }
      });
   };

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
         <SectionTitle title="Manage All Classes"></SectionTitle>
         <div className="overflow-x-auto mb-20">
            <table className="table table-zebra text-center">
               {/* head */}
               <thead className="bg-orange-500 text-black py-4">
                  <tr>
                     <th>#</th>
                     <th>Class Name</th>
                     <th>Instructor</th>
                     <th>Available Seats</th>
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
                        <td>
                           <p className="text-lg font-semibold">{classs.teacher.name}</p>
                           <p>{classs.teacher.email}</p>
                        </td>
                        <td>{classs.total_seats}</td>
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
                           <button
                              className={`${
                                 classs.status === "approved" || classs.status === "denied" || classs.reviewed
                                    ? "btn-disabled bg-opacity-40"
                                    : ""
                              } btn btn-success btn-xs`}
                              onClick={() => handelStatus(classs._id, "approved")}
                           >
                              Approved
                           </button>
                           <button
                              className={`${
                                 classs.status === "approved" || classs.status === "denied" || classs.reviewed
                                    ? "btn-disabled bg-opacity-40"
                                    : ""
                              } btn btn-error btn-xs mx-3 `}
                              onClick={() => handelStatus(classs._id, "denied")}
                           >
                              Deny
                           </button>
                           <button className="btn btn-warning btn-xs" onClick={() => openModal(classs._id)}>
                              Feedback
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <FeedbackModal _id={_id} isOpen={modalOpen} closeModal={closeModal}></FeedbackModal>
      </div>
   );
};

export default ManageClasses;
