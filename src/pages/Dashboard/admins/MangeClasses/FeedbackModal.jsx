import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { apiInstance } from "../../../../API/api";
import useAuth from "../../../../hooks/useAuth";

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

const FeedbackModal = ({ isOpen, closeModal, _id }) => {
   const { user } = useAuth();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data, _id);

      Swal.fire({
         title: "Are you sure?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: `Yes`,
      }).then(async (result) => {
         if (result.isConfirmed) {
            const res = await apiInstance.patch(`/class_feedback/${_id}?email=${user?.email}`, {
               feedback: data.feedback,
            });

            if (res.data.modifiedCount > 0) {
               Swal.fire("Feedback Sent", "", "success");
            }
         }
      });

      closeModal();
   };
   return (
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
         <h2 className="text-xl mt-3">Send Feedback:</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
               className="textarea textarea-bordered lg:w-full my-5"
               type="text"
               placeholder="Message"
               {...register("feedback", { required: true })}
            />
            {errors.feedback && <span className="text-red-500 text-base">Please say something</span>}
            <div>
               <button type="submit" className="btn bg-[#ffb038] hover:bg-[#ffbe5d] rounded-full">
                  Send Email
               </button>
               <p className="btn btn-error rounded-full ml-2" onClick={closeModal}>
                  Cancel
               </p>
            </div>
         </form>
      </Modal>
   );
};

export default FeedbackModal;
