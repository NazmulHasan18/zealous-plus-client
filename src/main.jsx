import React from "react";
import ReactDOM from "react-dom/client";
import "react-toggle/style.css";
import "swiper/css";
import "./index.css";
import "./SCSS/Custom.scss";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";

import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "./providers/ThemeProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <ThemeProvider>
               <RouterProvider router={router} />
               <ToastContainer />
            </ThemeProvider>
         </AuthProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
