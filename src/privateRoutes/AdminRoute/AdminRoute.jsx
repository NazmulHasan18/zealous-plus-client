import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
const AdminRoute = ({ children }) => {
   const { user, loading } = useAuth();

   const { role, roleLoading } = useRole();

   if (loading) {
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
   if (roleLoading) {
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

   // if (isLoading) {
   //    return (
   //       <>
   //          <span className="loading-lg loading loading-spinner text-primary"></span>
   //          <span className="loading-lg loading loading-spinner text-secondary"></span>
   //          <span className="loading-lg loading loading-spinner text-accent"></span>
   //          <span className="loading-lg loading loading-spinner text-neutral"></span>
   //          <span className="loading-lg loading loading-spinner text-info"></span>
   //          <span className="loading-lg loading loading-spinner text-success"></span>
   //          <span className="loading-lg loading loading-spinner text-warning"></span>
   //          <span className="loading-lg loading loading-spinner text-error"></span>
   //       </>
   //    );
   // }

   if (user && role === "admin") {
      return children;
   }

   return <Navigate to="/" replace={true}></Navigate>;
};

export default AdminRoute;
