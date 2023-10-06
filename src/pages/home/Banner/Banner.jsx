import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";

// https://i.ibb.co/rkFr4gr/Nazmul1.png
// https://i.ibb.co/D9Zx7P3/Shaila1.png
// https://i.ibb.co/9h25X8G/Sojib1.png

const Banner = () => {
   return (
      <div>
         <Swiper
            pagination={true}
            modules={[Pagination]}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className="mx-auto p-5 pt-20 lg:p-24 bg-orange-100">
                  <div className="max-w-screen-2xl mx-auto ">
                     <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                        <div className="lg:w-3/5 mt-10 lg:mt-auto">
                           <h1 className="font-jose font-bold text-5xl lg:text-9xl">
                              Learn a English <br />
                              <span className="text-orange-500 font-mont font-semibold italic">
                                 with Shaila
                              </span>
                           </h1>
                           <p className="text-3xl font-bold mt-6 lg:mt-20">
                              Unlock the Power of English: Your Path to Language Mastery!
                           </p>
                           <p className="text-2xl mt-10">
                              &quot;Elevate your English proficiency with our comprehensive learning
                              programme. Gain fluency, confidence, and limitless opportunities, Start your
                              language journey today!&quot;
                           </p>
                        </div>
                        <div>
                           <img
                              src="https://i.ibb.co/D9Zx7P3/Shaila1.png"
                              className="lg:h-[500px] lg:w-[500px]"
                              alt=""
                           />
                        </div>
                     </div>
                     <div className="lg:py-10">
                        <Link to="/classes">
                           <button className="btn btn-outline text-orange-600 btn-xs text-base md:text-xl sm:btn-sm md:btn-md lg:btn-lg btn-warning font-bold">
                              Enroll Now!
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="relative mx-auto p-5 pt-20 lg:p-24 bg-yellow-100">
                  <div className="max-w-screen-2xl mx-auto ">
                     <div className="relative max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
                        <div className="lg:w-3/5 mt-10 lg:mt-auto">
                           <h1 className="font-jose font-bold text-5xl lg:text-9xl">
                              Learn a Spanish <br />
                              <span className="text-orange-500 font-mont font-semibold italic">
                                 with Nazmul
                              </span>
                           </h1>
                           <p className="text-3xl font-bold mt-6 lg:mt-20">
                              Discover The Beauty of Spanish: Your Path to Fluency and cultural Immersion!
                           </p>
                           <p className="text-2xl mt-10">
                              &quot;Immerse yourself in the richness of the Spanish Language. Learn, Converse
                              and embrace a vibrant culture. Begin your Spanish language adventure now!&quot;
                           </p>
                        </div>
                        <div>
                           <img
                              src="https://i.ibb.co/rkFr4gr/Nazmul1.png"
                              className="lg:h-[500px] lg:w-[500px]"
                              alt=""
                           />
                        </div>
                     </div>
                     <div className="lg:py-10">
                        <Link to="/classes">
                           <button className="btn btn-outline text-orange-600 btn-xs text-base md:text-xl sm:btn-sm md:btn-md lg:btn-lg btn-warning font-bold">
                              Enroll Now!
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="relative mx-auto p-5 pt-20 lg:p-24 bg-yellow-50">
                  <div className="max-w-screen-2xl mx-auto ">
                     <div className="relative max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
                        <div className="lg:w-3/5 mt-10 lg:mt-auto">
                           <h1 className="font-jose font-bold text-5xl lg:text-9xl">
                              Learn a Hindi <br />
                              <span className="text-orange-500 font-mont font-semibold italic">
                                 with Shojib
                              </span>
                           </h1>
                           <p className="text-3xl font-bold mt-6 lg:mt-20">
                              Unleash the Magic of Hindi: Master the Language and Connect with a Rich
                              Heritage!
                           </p>
                           <p className="text-2xl mt-10">
                              &quot;Embark on a transformative journey into the enchanting world of Hindi.
                              Develop fluency, cultural understanding, and forge meaningful connections. Start
                              your Hindi language exploration today!&quot;
                           </p>
                        </div>
                        <div>
                           <img
                              src="https://i.ibb.co/9h25X8G/Sojib1.png"
                              className="lg:h-[500px] lg:w-[500px]"
                              alt=""
                           />
                        </div>
                     </div>
                     <div className="lg:py-10">
                        <Link to="/classes">
                           <button className="btn btn-outline text-orange-600 btn-xs text-base md:text-xl sm:btn-sm md:btn-md lg:btn-lg btn-warning font-bold">
                              Enroll Now!
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;
