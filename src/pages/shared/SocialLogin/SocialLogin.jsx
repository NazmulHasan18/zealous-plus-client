import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../../../API/api";

const SocialLogin = () => {
   const { googleLogin } = useAuth();

   const location = useLocation();
   const from = location.state?.pathname || "/";
   console.log(from);
   const navigate = useNavigate();

   const handelGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            const user = result.user;
            const userData = {
               name: user.displayName,
               email: user.email,
               number: user.number || null,
               gender: user.gender || null,
               user_image: user.photoURL,
               role: "user",
            };
            createUser(userData);
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: `${user?.displayName} Log In Successful`,
               showConfirmButton: false,
               timer: 1000,
            });
            navigate(from);
         })
         .catch((error) => {
            toast.error(error.message);
         });
   };
   return (
      <div className="w-full">
         <div className="divider mx-5">
            <span className="text-lg font-mont">OR</span>
         </div>
         <div className="mx-auto w-64 mb-10 mt-4">
            <button className="btn w-full rounded-full btn-primary" onClick={handelGoogleLogin}>
               <FaGoogle className=" text-xl"></FaGoogle> Sign Up With Google
            </button>
         </div>
      </div>
   );
};

export default SocialLogin;
