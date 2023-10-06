import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useUsers from "../../../../hooks/useUsers";
import Swal from "sweetalert2";
import { apiInstance } from "../../../../API/api";

const ManageUsers = () => {
   const { user: loggedUser } = useAuth();
   const { users, refetchUsers, loadingUsers } = useUsers();

   if (loadingUsers) {
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

   const handelUserRole = async (id, role) => {
      Swal.fire({
         title: "Are you sure?",
         text: `Do you want to update user role?`,
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Update!",
      }).then(async (result) => {
         if (result.isConfirmed) {
            const res = await apiInstance.patch(`/user/${id}?email=${loggedUser?.email}`, { role: role });
            refetchUsers();
            if (res.data.modifiedCount > 0) {
               Swal.fire("Role Updated!", `User is promoted now`, "success");
            }
         }
      });
   };

   return (
      <div>
         <SectionTitle title="Manage Users" subTitle=""></SectionTitle>
         <div className="overflow-x-auto mb-10">
            <table className="table text-center">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, index) => (
                     <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>
                           <div className="flex items-center text-start gap-4">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={user.user_image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">{user.name}</div>
                                 <div className="text-sm">{user.email}</div>
                              </div>
                           </div>
                        </td>
                        <td className="uppercase">{user.role}</td>

                        <td>
                           <button
                              onClick={() => handelUserRole(user._id, "admin")}
                              className={`${
                                 user.role === "admin" && "btn-disabled bg-opacity-40"
                              } btn btn-error btn-xs`}
                           >
                              Make Admin
                           </button>
                           <button
                              className={`${
                                 user.role === "admin" || user.role === "instructor"
                                    ? "btn-disabled bg-opacity-40"
                                    : ""
                              } btn btn-warning btn-xs ml-3`}
                              onClick={() => handelUserRole(user._id, "instructor")}
                           >
                              Make Instructor
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageUsers;
