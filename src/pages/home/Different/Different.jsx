import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const Different = () => {
   return (
      <div className="container mx-auto overflow-x-hidden" data-aos="fade-up">
         <SectionTitle
            title="Why we?"
            subTitle="We are different from other! What do we have?"
         ></SectionTitle>
         <div className="flex gap-6 flex-col lg:flex-row-reverse bg-slate-200 mx-5 lg:mx-auto">
            <img src="https://i.ibb.co/SBGQFDj/7718877.jpg" alt="" className="lg:w-1/2" />
            <div>
               <div
                  className="flex-col lg:flex-row flex justify-center gap-6 items-center p-5 m-5 rounded-[50px] bg-sky-200"
                  data-aos="fade-right"
                  data-aos-duration="2000"
               >
                  <img
                     src="https://i.ibb.co/6DQj4mV/Online-Courses-Icon-removebg-preview.png"
                     alt=""
                     className="lg:w-1/4"
                  />
                  <div>
                     <h2 className="text-3xl font-bold">We have 30+ online courses</h2>
                     <p className="font-semibold text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rem, veniam quisquam
                        eos incidunt porro nemo in.
                     </p>
                  </div>
               </div>
               <div
                  className="flex-col-reverse lg:flex-row flex justify-center gap-6 items-center p-5 m-5 rounded-[50px] bg-red-200"
                  data-aos="fade-left"
                  data-aos-duration="2000"
               >
                  <div>
                     <h2 className="text-3xl font-bold">We have experienced instructors</h2>
                     <p className="font-semibold text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rem, veniam quisquam
                        eos incidunt porro nemo in.
                     </p>
                  </div>
                  <img src="https://i.ibb.co/XyngWWW/instractors.png" alt="" className="lg:w-1/4" />
               </div>
               <div
                  className="flex-col lg:flex-row flex justify-center gap-6 items-center p-5 m-5 rounded-[50px] bg-yellow-200"
                  data-aos="fade-right"
                  data-aos-duration="2000"
               >
                  <img src="https://i.ibb.co/hdhnjBX/access.png" alt="" className="lg:w-1/4" />
                  <div>
                     <h2 className="text-3xl font-bold">You will get life time access.</h2>
                     <p className="font-semibold text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rem, veniam quisquam
                        eos incidunt porro nemo in.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Different;
