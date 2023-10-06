import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("jwt-token");

export const api = axios.create({
   baseURL: "http://localhost:5000",
});

export const apiInstance = axios.create({
   baseURL: "http://localhost:5000",
   headers: { Authorization: `Bearer ${token}` },
});
export const apiInstance2 = axios.create({
   baseURL: "http://localhost:5000",
   headers: { Authorization: `Bearer ${token}` },
});

export const fetchQuotes = async () => {
   const res = await api.get("/quotes");
   return res.data;
};

export const fetchInstructors = async () => {
   const res = await api.get("/instructors");
   return res.data;
};

export const fetchInstructorById = async (id) => {
   const res = await api.get(`/instructor/${id}`);
   return res.data;
};

export const fetchPopularClasses = async () => {
   const res = await api.get("/popular_classes");
   return res.data;
};

export const createUser = async (userData) => {
   api.post("/users", userData)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      });
};

export const addClass = async (id, email) => {
   api.post(
      `/selected_class/${id}?email=${email}`,
      {},
      {
         headers: { Authorization: `Bearer ${token}` },
      }
   )
      .then(function (response) {
         console.log(response);
         if (response?.data?.insertedId) {
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: `Class Booked Successful`,
               showConfirmButton: false,
               timer: 1000,
            });
         }
      })
      .catch(function (error) {
         console.log(error);
      });
};

export const getReviews = async () => {
   const res = await api.get("/reviews");
   return res.data;
};
