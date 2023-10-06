import { useQuery } from "react-query";
import useAuth from "./useAuth";
import { apiInstance } from "../API/api";

const useSelectedClasses = () => {
   const { user } = useAuth();
   const {
      data: classes,
      isLoading: loadingClasses,
      refetch: refetchClasses,
   } = useQuery(["classes", user?.email], async () => {
      const res = await apiInstance.get(`/selected_classes?email=${user?.email}`);
      return res.data;
   });
   return { classes, loadingClasses, refetchClasses };
};

export default useSelectedClasses;
