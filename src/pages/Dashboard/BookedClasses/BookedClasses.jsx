import useAuth from "../../../hooks/useAuth";
import { apiInstance } from "../../../API/api";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BookedClasses = () => {
   const { user } = useAuth();
   const navigate = useNavigate();

   const { classes, loadingClasses, refetchClasses } = useSelectedClasses();

   const handelDeleteClass = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
         if (result.isConfirmed) {
            const res = await apiInstance.delete(`/selected_class/${id}?email=${user?.email}`);
            if (res.data.deletedCount >= 1) {
               refetchClasses();
               Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
            console.log(res.data);
            return res.data;
         }
      });
   };

   const totalPrice = classes?.reduce((accumulator, currentClass) => accumulator + currentClass.price, 0);

   const handelCreateOrderId = async (data) => {
      const {
         data: { key },
      } = await axios.get("https://zealous-plus-server.vercel.app/get-key");
      console.log(data, key);
      axios
         .post("https://zealous-plus-server.vercel.app/create-orderId", { price: data.price })
         .then((res) => {
            console.log(res.data);
            const options = {
               key,
               amount: res.data.amount,
               currency: "INR",
               name: data.class_name,
               description: "Test Transaction",
               image: data.image,
               order_id: res.data.id,
               handler: async function (response) {
                  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
                  const { data: res } = await apiInstance.post(
                     "https://zealous-plus-server.vercel.app/checkout",
                     {
                        name: user.displayName,
                        email: user.email,
                        id: data._id,
                        razorpay_payment_id,
                        razorpay_order_id,
                        razorpay_signature,
                        classes: [data],
                     }
                  );
                  console.log(res);

                  apiInstance
                     .patch("/classes", { classes: [data] })
                     .then((res) => {
                        console.log(res.data);
                     })
                     .catch((err) => {
                        console.log(err);
                     });

                  apiInstance
                     .post("/students_classes", { classes: [data], student_email: user?.email })
                     .then((res) => {
                        console.log(res.data);
                        if (classes.length === 1) {
                           apiInstance.delete(`/classes?id=${classes[0]._id}`).then((res) => {
                              console.log(res.data);
                           });
                        } else if (classes.length > 1) {
                           apiInstance.delete(`/classes?email=${user.email}`).then((res) => {
                              console.log(res.data);
                           });
                        }
                        navigate("/dashboard/payment-success");
                     })
                     .catch((err) => {
                        console.log(err);
                     });
               },
               prefill: {
                  name: user.displayName,
                  email: user.email,
               },
               notes: {},
               theme: {
                  color: "#3399cc",
               },
            };
            const razor = new window.Razorpay(options);

            razor.open();
         })
         .catch((err) => console.log(err));
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

   //    TODO: Implement payment methods

   return (
      <div className="mb-24">
         <SectionTitle title="All Selected Class" subTitle="Pay your class to enroll"></SectionTitle>
         <div className="flex justify-around">
            <p className="text-xl">
               Total Price:
               <span className="font-bold"> ${totalPrice}</span>
            </p>
            <Link to="/dashboard/payment" state={{ price: totalPrice, classes: classes }}>
               <button className="btn btn-warning mb-4"> Pay All</button>
            </Link>
         </div>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr className="text-center">
                     <th>#</th>
                     <th>Name</th>
                     <th>Teacher</th>
                     <th className="text-end">Price</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {classes?.map((classs, index) => (
                     <tr key={classs._id} className="text-center">
                        <td>{index + 1}</td>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={classs.image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold text-lg">{classs.class_name}</div>
                                 <div className="text-sm font-semibold">{classs.duration} month</div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <h4 className="text-lg font-bold">{classs.teacher.name}</h4>
                           <p>{classs.teacher.email}</p>
                        </td>
                        <td className="text-end">&#8377; {classs.price} </td>
                        <td>
                           <span className="bg-yellow-300 py-2 px-4 font-semibold rounded-md">
                              {classs.status}
                           </span>
                        </td>
                        <th>
                           {/* <Link to="/dashboard/payment" state={{ price: classs.price, classes: [classs] }}> */}
                           <button
                              className="btn btn-xs btn-warning"
                              onClick={() => handelCreateOrderId(classs)}
                           >
                              Pay Now
                           </button>
                           {/* </Link> */}
                           <button
                              className="btn btn-xs btn-error ml-4"
                              onClick={() => handelDeleteClass(classs._id)}
                           >
                              Cancel
                           </button>
                        </th>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default BookedClasses;
