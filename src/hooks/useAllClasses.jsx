import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useAllClasses = () => {
   const { user } = useAuth();
   const {
      data: classes,
      isLoading: loadingClasses,
      refetch: refetchClasses,
   } = useQuery(["classes", user?.email], async () => {
      const res = await axios.get(`https://zealous-plus-server-6hfivgot4-nazmulhasan18.vercel.app/classes`);
      return res.data;
   });
   return { classes, loadingClasses, refetchClasses };
};

export default useAllClasses;
