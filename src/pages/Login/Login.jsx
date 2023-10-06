import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useState } from "react";
import ResetModal from "./ResetModal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Login = () => {
   const [showPass, setShowPass] = useState(false);
   const { emailPassSignIn } = useAuth();
   const [modalOpen, setModalOpen] = useState(false);

   const openModal = () => {
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const location = useLocation();
   const from = location.state?.pathname || "/";
   const navigate = useNavigate();

   //    here the sign in function
   const onSubmit = (data) => {
      emailPassSignIn(data.email, data.password)
         .then((userCredential) => {
            const loggedUser = userCredential.user;

            Swal.fire({
               position: "top-end",
               icon: "success",
               title: `${loggedUser?.displayName} Log In Successful`,
               showConfirmButton: false,
               timer: 1000,
            });
            navigate(from);
         })
         .catch((error) => {
            toast.error(error.message);
         });
   };

   // https://i.ibb.co/6Hwv8zd/Contact-1.png
   return (
      <div
         className="hero min-h-screen flex justify-center md:justify-normal bg-fixed bg-left"
         style={{ backgroundImage: "url('https://i.ibb.co/VvQnfwp/Home-1.png')" }}
      >
         <div className="hero-content flex-col lg:w-1/2">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold my-8">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-[350px] lg:w-[512px] shadow-2xl bg-base-100 text-xl">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">
                              Email<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <input
                           type="text"
                           placeholder="Email"
                           className="input input-bordered rounded-full"
                           {...register("email", { required: true })}
                        />
                        {errors.email && (
                           <span className="text-red-500 text-base">Enter Your Email First</span>
                        )}
                     </div>
                     <div className="form-control relative">
                        <label className="label">
                           <span className="label-text">
                              Password<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <input
                           type={`${showPass ? "text" : "password"}`}
                           placeholder="Password"
                           className="input input-bordered rounded-full"
                           {...register("password", {
                              required: true,
                              pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                           })}
                        />

                        <p
                           className="absolute top-1/2 right-5 opacity-50 cursor-pointer"
                           onClick={() => setShowPass(!showPass)}
                        >
                           {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </p>

                        {errors.password && errors.password.type === "required" && (
                           <span className="text-red-500 text-base">Password is required.</span>
                        )}
                        {errors.password && errors.password.type === "pattern" && (
                           <span className="text-red-500 text-base">
                              Password must be at least 8 characters long. Password must contain at least one
                              capital letter and one special character.
                           </span>
                        )}
                        <label className="label">
                           <button
                              className="label-text-alt link link-hover"
                              onClick={(e) => {
                                 e.preventDefault();
                                 openModal();
                              }}
                           >
                              Forgot password?
                           </button>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[#ffb038] hover:bg-[#ffbe5d] rounded-full">
                           Login
                        </button>
                     </div>
                     <div>
                        <p className="text-lg font-semibold">
                           New here?{" "}
                           <Link to="/register" className="text-[#ff9a04] hover:underline">
                              {" "}
                              Register Now!
                           </Link>
                        </p>
                     </div>
                  </div>
               </form>
               <SocialLogin></SocialLogin>
            </div>
         </div>
         <ResetModal isOpen={modalOpen} closeModal={closeModal}></ResetModal>
      </div>
   );
};

export default Login;
