import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { apiInstance } from "../../API/api";
import axios from "axios";

const Profile = () => {
   const { user, verifyEmail, updateUser, updateNewEmail } = useAuth();
   const { loggedUser } = useRole();

   const updateEmail = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      apiInstance
         .patch(`/user/${loggedUser._id}?email=${loggedUser?.email}`, { email })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => console.log(err));
      updateNewEmail(email)
         .then(() => {
            Swal.fire({
               position: "center",
               icon: "success",
               title: `Your Email Update Successful`,
               showConfirmButton: false,
               timer: 1000,
            });
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const updateName = async (e) => {
      e.preventDefault();

      const name = e.target.name.value;
      apiInstance
         .patch(`/user/${loggedUser._id}?email=${loggedUser?.email}`, { name: name })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => console.log(err));
      updateUser({ name: name })
         .then(() => {
            Swal.fire({
               position: "center",
               icon: "success",
               title: `Your Name Update Successful`,
               showConfirmButton: false,
               timer: 1000,
            });
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const updatePhoto = async (e) => {
      e.preventDefault();

      const photo = e.target.photo.files;
      const formData = new FormData();
      formData.append("image", photo[0]);

      try {
         const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgbbApiKey}`,
            formData,
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            }
         );

         const newImage = response.data.data.url;
         if (newImage) {
            apiInstance
               .patch(`/user/${loggedUser._id}?email=${loggedUser?.email}`, { user_image: newImage })
               .then((res) => {
                  console.log(res);
               })
               .catch((err) => console.log(err));

            updateUser({ photoUrl: newImage })
               .then(() => {
                  Swal.fire({
                     position: "center",
                     icon: "success",
                     title: `Your Photo Update Successful`,
                     showConfirmButton: false,
                     timer: 1000,
                  });
               })
               .catch((err) => {
                  console.log(err);
               });
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="container mx-auto min-h-screen pt-24 pb-6">
         <div className="md:grid grid-cols-3 gap-6">
            <div className="border-8 h-full p-5 rounded-md min-h-[80vh]">
               <div>
                  <div className="flex items-center justify-center">
                     <img
                        src={user?.photoURL}
                        className="rounded-full h-52 w-52 mb-4 object-contain"
                        alt=""
                     />
                  </div>
                  <div className="text-center">
                     <h2 className="text-2xl font-bold">{user?.displayName}</h2>
                     <p className="mb-4">{user?.email}</p>

                     {user?.emailVerified ? (
                        <p className="text-success font-bold">Your email is verified.</p>
                     ) : (
                        <button className="btn btn-warning" onClick={verifyEmail}>
                           Verify Email
                        </button>
                     )}
                  </div>
               </div>
            </div>
            <div className="col-span-2 border-8 rounded-md p-5">
               <h2 className="text-xl font-bold text-blue-400">Update Profile</h2>
               <div>
                  <form onSubmit={updateName}>
                     <div className="form-control lg:w-1/2">
                        <label className="label">
                           <span className="label-text">
                              Update Your Name<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <div className="md:flex gap-6">
                           <input
                              type="text"
                              placeholder="Update Your Name"
                              className="input-warning input input-bordered rounded-full"
                              name="name"
                              required
                           />
                           <button type="submit" className="btn btn-warning rounded-full">
                              Update Name
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
               <div>
                  <form onSubmit={updateEmail}>
                     <div className="form-control lg:w-1/2">
                        <label className="label">
                           <span className="label-text">
                              Update Your Email<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <div className="md:flex gap-6">
                           <input
                              type="text"
                              placeholder="Update Your Email"
                              className="input-warning input input-bordered rounded-full"
                              name="email"
                              required
                           />
                           <button type="submit" className="btn btn-warning rounded-full">
                              Update Email
                           </button>
                        </div>
                     </div>
                  </form>
               </div>

               <div>
                  <form onSubmit={updatePhoto}>
                     <div className="form-control lg:w-1/2">
                        <label className="label">
                           <span className="label-text">
                              Update Your Photo<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <div className="md:flex gap-6">
                           <input
                              type="file"
                              className="file-input file-input-bordered file-input-warning min-w-fit rounded-full"
                              placeholder="Select your photo"
                              name="photo"
                              required
                           />
                           <button type="submit" className="btn btn-warning rounded-full">
                              Update Photo
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
