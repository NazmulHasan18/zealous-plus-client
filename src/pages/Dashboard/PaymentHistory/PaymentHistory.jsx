import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import { apiInstance } from "../../../API/api";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
   const { user } = useAuth();

   const { data: payments, isLoading } = useQuery(["payments", user?.email], async () => {
      const res = await apiInstance.get(`/payments/${user?.email}`);
      return res.data;
   });

   if (isLoading) {
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
      <div className="mb-20">
         <SectionTitle title="Payment History"></SectionTitle>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr className="text-center">
                     <th>#</th>
                     <th>Name</th>
                     <th>Transaction ID</th>
                     <th>Item Quantity</th>
                     <th>Status</th>
                     <th>Amount</th>
                  </tr>
               </thead>
               <tbody>
                  {payments?.map((payment, index) => (
                     <tr key={payment._id} className="text-center">
                        <td>{index + 1}</td>
                        <td>
                           <div>
                              <div className="font-bold text-lg">{payment.user.name}</div>
                           </div>
                        </td>
                        <td>
                           <h4 className="text-lg font-bold">{payment.TransactionId}</h4>
                        </td>
                        <td> {payment.classes?.length}</td>
                        <td>
                           <span className="bg-green-300 py-2 px-4 font-semibold rounded-md">Paid</span>
                        </td>
                        <td>
                           <span className="py-2 px-4 font-semibold rounded-md">
                              $ {payment.price || "None"}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default PaymentHistory;
