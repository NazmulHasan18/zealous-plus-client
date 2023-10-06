import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useRole = () => {
   const { user } = useAuth();
   const token = localStorage.getItem("jwt-token");
   const { data: loggedUser, isLoading: roleLoading } = useQuery(["role", user?.email], async () => {
      const res = await axios.get(`http://localhost:5000/user/${user?.email}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
   });
   const role = loggedUser?.role;
   return { loggedUser, role, roleLoading };
};

export default useRole;
