import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { apiInstance } from "../../../API/api";
import Swal from "sweetalert2";

const AddReview = () => {
   const { user } = useAuth();

   const { register, handleSubmit, reset } = useForm();

   const onSubmit = (data) => {
      data.rating = parseInt(data.rating);
      console.log(data);
      apiInstance
         .post("/review", data)
         .then(function (response) {
            console.log(response);
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Your review added successfully.",
               showConfirmButton: false,
               timer: 1500,
            });
            reset();
         })
         .catch(function (error) {
            console.log(error);
         });
   };

   return (
      <div className="container mx-auto mb-24" data-aos="zoom-in" data-aos-duration="4000">
         <SectionTitle title="Add Review" subTitle="Your Comment Is So Expensive to Us"></SectionTitle>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid mx-6 lg:mx-auto lg:grid-cols-2  gap-7">
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Enter your name.</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Your Name"
                     className="input input-bordered border-orange-500 focus:outline-orange-500"
                     {...register("user_name", { required: true, maxLength: 80 })}
                  />
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Enter your email.</span>
                  </label>
                  <input
                     type="email"
                     defaultValue={`${user ? user.email : ""}`}
                     placeholder="Enter your email"
                     className="input input-bordered border-orange-500 focus:outline-orange-500"
                     {...register("user_email", { required: true })}
                  />
               </div>

               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Enter Rating</span>
                  </label>
                  <input
                     type="number"
                     placeholder="enter rating"
                     className="input input-bordered border-orange-500 focus:outline-orange-500"
                     {...register("rating", { required: true, maxLength: 1 })}
                  />
               </div>
               <div className="form-control w-full mx-auto row-span-2">
                  <label className="label">
                     <span className="label-text">Write your review in details.</span>
                  </label>
                  <textarea
                     className="textarea h-full border-orange-500 focus:outline-orange-500"
                     placeholder="Review"
                     {...register("review", { required: true, maxLength: 500 })}
                  ></textarea>
               </div>
               <div className="w-full mx-auto">
                  {user ? (
                     <button type="submit" className="button-review">
                        Add Review
                     </button>
                  ) : (
                     <Link to="/login">
                        <button type="submit" className="button-review">
                           Add Review
                        </button>
                     </Link>
                  )}
               </div>
            </div>
         </form>
      </div>
   );
};

export default AddReview;
