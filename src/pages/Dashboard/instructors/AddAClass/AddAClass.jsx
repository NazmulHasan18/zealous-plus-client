import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddAClass = () => {
   const { user } = useAuth();

   const token = localStorage.getItem("jwt-token");

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      axios
         .post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgbbApiKey}`, formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         })
         .then((res) => {
            const classs = {
               class_name: data.class_name,
               image: res.data.data.url,
               teacher: { name: data.name, email: data.email },
               current_students: 0,
               total_seats: parseInt(data.total_seats),
               status: "pending",
               price: parseFloat(data.price),
               duration: parseFloat(data.duration),
            };

            axios
               .post(
                  `https://zealous-plus-server-6hfivgot4-nazmulhasan18.vercel.app/add_class?email=${user?.email}`,
                  classs,
                  {
                     headers: { Authorization: `Bearer ${token}` },
                  }
               )
               .then(function (response) {
                  if (response?.data?.insertedId) {
                     Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Class Added Successful`,
                        showConfirmButton: false,
                        timer: 1000,
                     });
                  }
               })
               .catch(function (error) {
                  console.log(error);
               });
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="hero min-h-screen flex justify-center md:justify-normal bg-[#fff0c7]">
         <div className="hero-content flex-col w-full mx-auto shadow-2xl rounded-none shadow-slate-800">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold my-8">Add A Class</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="card flex-shrink-0 w-[350px] lg:w-[900px] text-xl">
                  <div className="card-body">
                     {/* Name and email */}
                     <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Class Name<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="text"
                              placeholder="Class Name"
                              className="input-warning input input-bordered rounded-full"
                              {...register("class_name", { required: true })}
                           />
                           {errors.class_name && (
                              <span className="text-red-500 text-base">Enter Your Class Name</span>
                           )}
                        </div>
                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Available Seats<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="number"
                              placeholder="Available Seats"
                              className="input-warning input input-bordered rounded-full"
                              {...register("total_seats", { required: true })}
                           />
                           {errors.total_seats && (
                              <span className="text-red-500 text-base">Enter Available Seats</span>
                           )}
                        </div>
                     </div>
                     {/* Password */}
                     <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Your Name<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="text"
                              placeholder="Your Name"
                              className="input-warning input input-bordered rounded-full"
                              value={user?.displayName}
                              {...register("name")}
                              readOnly
                           />
                        </div>
                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Your Email<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="email"
                              placeholder="Your Email"
                              className="input-warning input input-bordered rounded-full"
                              value={user?.email}
                              {...register("email")}
                              readOnly
                           />
                        </div>
                     </div>
                     {/* Photo URL and Gender */}
                     <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control w-full mx-auto lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Price<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="number"
                              placeholder="Class Price"
                              step="any"
                              className="input-warning input input-bordered rounded-full"
                              {...register("price", {
                                 required: true,
                              })}
                           />
                           {errors.price && (
                              <span className="text-red-500 text-base">Please Provide A valid Price!</span>
                           )}
                        </div>
                        <div className="form-control w-full lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Class Duration {"(month)"}
                                 <span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="number"
                              placeholder="Your Class Duration"
                              className="input-warning input input-bordered rounded-full"
                              {...register("duration", {
                                 required: true,
                              })}
                           />
                           {errors.duration && (
                              <span className="text-red-500 text-base">
                                 Please Provide Your Class Duration
                              </span>
                           )}
                        </div>
                     </div>
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">
                              Class Image<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <input
                           type="file"
                           className="file-input file-input-bordered file-input-warning w-full rounded-full"
                           accept="image/*"
                           {...register("image", {
                              required: true,
                           })}
                        />
                        {errors.image && (
                           <span className="text-red-500 text-base">
                              Please Provide Your Class Image URL!
                           </span>
                        )}
                     </div>
                     <div className="form-control mt-6 w-1/2 mx-auto">
                        <button type="submit" className="btn bg-[#ffb038] hover:bg-[#ffbe5d] rounded-full">
                           Add Class
                        </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddAClass;
