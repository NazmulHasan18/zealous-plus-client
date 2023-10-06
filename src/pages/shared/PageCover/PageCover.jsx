import { Parallax } from "react-parallax";

const PageCover = ({ title, subTitle }) => {
   return (
      <div>
         <Parallax
            bgImage="https://i.ibb.co/V01shdB/instructors-banner-2.png"
            bgImageAlt="the cat"
            strength={200}
         >
            <div className=" m-40 flex justify-center items-center flex-col" style={{ height: "300px" }}>
               <h2 className="text-6xl font-bold mb-5">{title}</h2>
               <p className="text-2xl px-6 py-5 font-semibold border-t-4">{subTitle}</p>
            </div>
         </Parallax>
      </div>
   );
};

export default PageCover;
