import { useState } from "react";
import { planItems, quickPlans } from "../assets/utlity";
import { PlanCard } from "./PlanCard";
import { motion } from "framer-motion";

export function Hero() {
  const [toggleColor, setToggleColor] = useState("#e3f1fe")
  const toggleHandle = () => {
    setToggleColor((prevColor) => (prevColor === '#e3f1fe' ? '#ffffff' : '#e3f1fe'));
  }
  return (
    // <div className="w-full md:w-[80%] h-auto bg-white">
    //     <div className="w-[350px] md:w-auto py-5 m-auto ">
    //         <h3 className="text-[30px] font-bold text-center mb-4 md:mb-0">Choose a plan that's right for you!</h3>
    //     </div>

    //     <div className="flex justify-end ">
    //         {/* slide button */}
    //         <div className="border-4 rounded-full">
    //             <button className=" bg-primary px-4 py-2 rounded-full font-semibold text-[10px] md:text-[15px]">Monthly</button><button className="  px-4 py-2 rounded-full relative font-semibold text-[10px] md:text-[15px]">Annually <span className="text-green-500 tex-[3px] md:text-[5px] absolute top-0 right-2">-10%</span> </button>
    //         </div>
    //     </div>
    //     <div className="flex flex-col md:flex-row justify-evenly items-center gap-3 mt-5">
    //         {planItems?.map((plan, index) => <PlanCard key={index} plan={plan} quickPlan={undefined} index={index}  customwidth={'w-[400px] md:w-[350px]'} />)}


    //     </div>
    //     <div className="flex flex-col md:flex-row  items-center gap-3 mt-4">

    //         {quickPlans?.map((plan, index) => <PlanCard key={index} quickPlan={plan} plan={undefined} index={index} customwidth={"w-full md:w-1/2"}/>)}
    //     </div>
    // </div>
    <div className={`w-full xl:w-[inherit] bg-[#ffffff] p-4`}>
      <div className="w-full md:w-[350px] py-5 px-3 md:px-0 mx-auto">
        <h3 className="text-3xl font-bold text-center mb-4 md:mb-0">Choose a plan that's right for you!</h3>
      </div>

      <div className="flex justify-center md:justify-end mb-4">
        {/* Slide button */}
        <div className="flex space-x-2 border-2 border-black p-2 rounded-full">
          <motion.button onClick={toggleHandle} className={`bg-primary px-3 md:px-8 py-2 rounded-full font-semibold text-xs md:text-base  ${toggleColor}`} whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>Monthly</motion.button>
          <motion.button onClick={toggleHandle} className={`px-3 md:px-8 py-2 rounded-full relative font-semibold text-xs md:text-base ${toggleColor === '#ffffff' ? '#e3f1fe' : '#ffffff'}`} whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} >Annually<motion.span className="text-green-500 text-xs md:text-sm absolute top-0 right-2">-10%</motion.span></motion.button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-3 mt-5">
        {planItems?.map((plan, index) => (
          <PlanCard key={index} plan={plan} quickPlan={undefined} index={index} customstyle={'w-full md:w-2/3 '} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 mt-4">
        {quickPlans?.map((plan, index) => (
          <PlanCard key={index} quickPlan={plan} plan={undefined} index={index} customstyle="w-full flex flex-col md:flex-row md:w-4/5 lg:w-[45%] xl:w-[50%] mx-2 md:mx-0" />
        ))}
      </div>
    </div>


  )
}
