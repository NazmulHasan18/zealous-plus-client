import { useForm } from "react-hook-form";
import Modal from "react-modal";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

// Styling for the modal
const customStyles = {
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ffca7a",
      width: "350px",
   },
};

Modal.setAppElement("#root");

const ResetModal = ({ isOpen, closeModal }) => {
   const { resetPassword } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      resetPassword(data.email)
         .then(() => {
            Swal.fire({
               position: "center",
               icon: "success",
               title: `A email has set. Please check your mail box`,
            });
         })
         .catch((error) => {
            toast.error(error.message);
         });
      closeModal();
   };

   return (
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
         <h2 className="text-xl mt-3">Enter your email:</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               className="input input-bordered lg:w-full rounded-full my-5"
               type="email"
               {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-base">Enter Your Email First</span>}
            <button type="submit" className="btn bg-[#ffb038] hover:bg-[#ffbe5d] rounded-full">
               Send Email
            </button>
         </form>
      </Modal>
   );
};

export default ResetModal;
