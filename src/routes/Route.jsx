import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import BookedClasses from "../pages/Dashboard/BookedClasses/BookedClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateRoute from "../privateRoutes/PrivateRoute/PrivateRoute";
import InstructorClasses from "../pages/Dashboard/instructors/InstructorClasses/InstructorClasses";
import AddAClass from "../pages/Dashboard/instructors/AddAClass/AddAClass";
import UserRoute from "../privateRoutes/UserRoute/UserRoute";
import InstructorRoute from "../privateRoutes/InstructorRoute/InstructorRoute";
import AdminRoute from "../privateRoutes/AdminRoute/AdminRoute";
import ManageUsers from "../pages/Dashboard/admins/ManageUsers/ManageUsers";
import Error from "../pages/home/Error/Error";
import ManageClasses from "../pages/Dashboard/admins/MangeClasses/ManageClasses";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/instructors",
            element: <Instructors></Instructors>,
         },
         {
            path: "/classes",
            element: <Classes></Classes>,
         },
         {
            path: "/instructor/:id",
            element: <Instructor></Instructor>,
         },
      ],
   },
   {
      path: "/dashboard",
      element: (
         <PrivateRoute>
            <Dashboard></Dashboard>
         </PrivateRoute>
      ),
      children: [
         // users Dashboard
         {
            path: "my_classes",
            element: (
               <UserRoute>
                  <MyClasses></MyClasses>
               </UserRoute>
            ),
         },
         {
            path: "selected_classes",
            element: (
               <UserRoute>
                  <BookedClasses></BookedClasses>
               </UserRoute>
            ),
         },
         {
            path: "payment_history",
            element: (
               <UserRoute>
                  <PaymentHistory></PaymentHistory>
               </UserRoute>
            ),
         },
         {
            path: "payment",
            element: <Payment></Payment>,
         },
         // instructors dashboard
         {
            path: "instructor_classes",
            element: (
               <InstructorRoute>
                  <InstructorClasses></InstructorClasses>
               </InstructorRoute>
            ),
         },
         {
            path: "add_class",
            element: (
               <InstructorRoute>
                  <AddAClass></AddAClass>
               </InstructorRoute>
            ),
         },
         // admin Dashboards
         {
            path: "manage_users",
            element: (
               <AdminRoute>
                  <ManageUsers></ManageUsers>
               </AdminRoute>
            ),
         },
         {
            path: "manage_classes",
            element: (
               <AdminRoute>
                  <ManageClasses></ManageClasses>
               </AdminRoute>
            ),
         },
      ],
   },
]);
