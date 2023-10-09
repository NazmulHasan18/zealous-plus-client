import SectionTitle from "../shared/SectionTitle/SectionTitle";

const HowToSelectCourse = () => {
   return (
      <div className="container mx-auto">
         <SectionTitle
            title={"How to select course"}
            subTitle={"Here is a complete guide to select a course"}
         ></SectionTitle>
         <div>
            <h2 className="text-xl font-semibold">Step 1:</h2>
            <p>
               ={">"} Go on Homepage Popular Class section or on Classes Page and you will see popular classes
               and all classes.
            </p>
         </div>
         <div>
            <h2 className="text-xl font-semibold">Step 2:</h2>
            <p>={">"} You will see a add class button click on your desire class.</p>
         </div>
         <div>
            <h2 className="text-xl font-semibold">Step 3:</h2>
            <p>
               ={">"} After Click you will see your selected class on your dashboard selected class page. Here
               you need to pay for your course. you can pay for all your selected class or single class.{" "}
            </p>
         </div>
         <div className="mb-10">
            <h2 className="text-xl font-semibold">Step 4:</h2>
            <p>
               ={">"} Now complete your payment process. If you have any cupon code you can use it in payment
               page. After completing your payment you can see your class in my class page on dashboard.
               Hurrah!!! Now complete your class.
            </p>
         </div>
      </div>
   );
};

export default HowToSelectCourse;
