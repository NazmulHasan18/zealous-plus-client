import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useQuery } from "react-query";
import { getReviews } from "../../../API/api";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
   const { data: reviews, isLoading } = useQuery(["reviews"], getReviews);
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
      <div className="mb-10 max-w-screen-2xl mx-auto">
         <SectionTitle title="Students Reviews" subTitle="What our students says"></SectionTitle>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
               <SwiperSlide key={review._id}>
                  <div className="relative p-4 lg:p-0 text-center">
                     <img
                        className="hidden lg:block"
                        src="https://i.ibb.co/7Q093hJ/wepik-geometric-positive-customer-review-twitter-post-20230612024601djt8.png"
                        alt=""
                     />
                     <div className="lg:absolute left-1/2 top-1/4">
                        <h2 className="text-4xl font-bold lg:w-2/3">{review.user_name}</h2>
                        <p className="lg:w-2/3 text-black text-xl font-semibold">
                           &rdquo;{review.review}&rdquo;
                        </p>
                        <hr className="lg:w-2/3 border-2 border-gray-400 mt-10 mb-6" />
                        <div className="flex justify-center items-center lg:w-2/3 flex-col">
                           <ReactStars size={30} value={review.rating} edit={false} />
                        </div>
                        <p className="font-bold lg:w-2/3">
                           {review.rating === 5
                              ? "Best Experience"
                              : review.rating < 5 || review.rating > 3
                              ? "Good Experience"
                              : "Bad Experience"}
                        </p>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Reviews;
