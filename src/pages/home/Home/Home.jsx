import Banner from "../Banner/Banner";
import Marquee from "react-fast-marquee";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchQuotes } from "../../../API/api";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import Reviews from "../Reviews/Reviews";
import AddReview from "../AddReview/AddReview";
import Info1 from "../Info1/Info1";
import JoinUs from "../JoinUs/JoinUs";
import Different from "../Different/Different";

const Home = () => {
   const [time, setTime] = useState();
   useEffect(() => {
      const timer = setInterval(() => {
         setTime(moment().format("LTS"));
      }, 1000);
      return () => {
         clearInterval(timer);
      };
   }, []);
   const { isLoading, data: quotes } = useQuery("quotes", fetchQuotes);
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
      <div>
         <Banner></Banner>
         <div className="flex lg:text-xl lg:-mt-24 lg:mb-20 max-w-screen-2xl font-semibold mx-auto">
            <p className="bg-orange-600 text-white py-1  lg:w-[230px]  px-4 lg:py-4 lg:px-10 z-40">{time}</p>
            <Marquee>
               <p className="shadow-2xl">
                  &rdquo;{quotes.text}&rdquo;-{" "}
                  <span>
                     <i>{quotes.author}</i>
                  </span>{" "}
               </p>
            </Marquee>
         </div>
         <Info1></Info1>
         <PopularClasses></PopularClasses>
         <JoinUs></JoinUs>
         <PopularInstructors></PopularInstructors>
         <Different></Different>
         <Reviews></Reviews>
         <AddReview></AddReview>
      </div>
   );
};

export default Home;
