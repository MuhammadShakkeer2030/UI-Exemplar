import { planItems, quickPlans } from "../assets/utlity";
import { PlanCard } from "./PlanCard";

export function Hero() {
    return (
        <div className="w-full md:w-[80%] h-auto bg-white">
            <div className="w-[350px] md:w-auto py-5 m-auto ">
                <h3 className="text-[30px] font-bold text-center mb-4 md:mb-0">Choose a plan that's right for you!</h3>
            </div>

            <div className="flex justify-end ">
                {/* slide button */}
                <div className="border-4 rounded-full">
                    <button className=" bg-primary px-4 py-2 rounded-full font-semibold text-[10px] md:text-[15px]">Monthly</button><button className="  px-4 py-2 rounded-full relative font-semibold text-[10px] md:text-[15px]">Annually <span className="text-green-500 tex-[3px] md:text-[5px] absolute top-0 right-2">-10%</span> </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-3 mt-5">
                {planItems?.map((plan, index) => <PlanCard key={index} plan={plan} quickPlan={undefined} index={index}  customwidth={'w-[400px] md:w-[350px]'} />)}


            </div>
            <div className="flex flex-col md:flex-row  items-center gap-3 mt-4">

                {quickPlans?.map((plan, index) => <PlanCard key={index} quickPlan={plan} plan={undefined} index={index} customwidth={"w-full md:w-1/2"}/>)}
            </div>
        </div>
    )
}
