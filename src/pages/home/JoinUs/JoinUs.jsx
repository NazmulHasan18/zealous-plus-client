import { FaBook, FaCheckCircle, FaSmileWink, FaUserSecret } from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const JoinUs = () => {
   return (
      <div
         className="bg-gradient-to-tl mx-auto from-[#f5ecf7] to-[#c7fffa] pt-1 overflow-x-hidden
      "
         data-aos="fade-up"
         data-aos-duration="2000"
      >
         <SectionTitle title="Join Us" subTitle="Want to join us! Here how you can do it."></SectionTitle>
         <div className="container lg:mx-auto my-10 flex justify-between gap-10 items-center px-4">
            <img
               src="https://i.ibb.co/bvJDb7H/nazmul2.png"
               alt=""
               className="border-4 border-dotted rounded-full border-red-400 hidden lg:block"
            />
            <div>
               <div data-aos="fade-left" data-aos-duration="1500">
                  <h2 className="text-4xl font-bold">Find Out Why You Should Learn From Zealous Plus</h2>
                  <p className="font-semibold text-gray-500 my-6">
                     We will provide you a perfect guideline to your dream. You will learn basic to master in
                     your selected language. And you can easily communicate in this language.
                  </p>
               </div>
               <div className="grid lg:grid-cols-2 gap-4 mb-6" data-aos="zoom-out" data-aos-duration="1500">
                  <div className="bg-green-50 p-5 flex gap-4">
                     <p className="p-5 h-16 text-2xl rounded-full bg-green-200 text-green-500">
                        <FaCheckCircle></FaCheckCircle>
                     </p>
                     <div>
                        <h3 className="text-2xl font-bold">Create Your Account</h3>
                        <p className="font-medium text-gray-500 my-4">
                           Click on login in navbar and goto register page and register.
                        </p>
                     </div>
                  </div>
                  <div className="bg-slate-100 p-5 flex gap-4">
                     <p className="p-5 h-16 text-2xl rounded-full bg-red-200 text-red-500">
                        <FaBook></FaBook>
                     </p>
                     <div>
                        <h3 className="text-2xl font-bold">Select Courses</h3>
                        <p className="font-medium text-gray-500 my-4">
                           Go to classes and select your desire class based on language. Add go to dashboard
                           and pay.
                        </p>
                     </div>
                  </div>
                  <div className="bg-orange-50 p-5 flex gap-4">
                     <p className="p-5 h-16 text-2xl rounded-full bg-orange-200 text-orange-500">
                        <FaUserSecret></FaUserSecret>
                     </p>
                     <div>
                        <h3 className="text-2xl font-bold">Complete Course</h3>
                        <p className="font-medium text-gray-500 my-4">
                           If you complete courses you will get a extra reward and it&lsquo;s a secret.
                        </p>
                     </div>
                  </div>
                  <div className="bg-blue-100 p-5 flex gap-4">
                     <p className="p-5 h-16 text-2xl rounded-full bg-blue-200 text-blue-500">
                        <FaSmileWink></FaSmileWink>
                     </p>
                     <div>
                        <h3 className="text-2xl font-bold">Success Story</h3>
                        <p className="font-medium text-gray-500 my-4">
                           We have made over 50K+ student to achieve their goal to success.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JoinUs;
