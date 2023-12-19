import { planItems, quickPlans } from "../assets/utlity";
import { PlanCard } from "./PlanCard";

export function Hero() {
    return (
        <div className=" bg-white">
            <h3 className="text-[30px] font-bold text-center">Choose a plan that's right for you!</h3>

            <div className="flex justify-end ">
                {/* tslide button */}
                <div className="border-4 rounded-full">
                    <button className=" bg-primary px-4 py-2 rounded-full font-semibold">Monthly</button><button className="  px-4 py-2 rounded-full relative font-semibold">Annually <span className="text-green-500 text-[5px] absolute top-0 right-2">-10%</span> </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                {planItems && planItems?.map((plan,index) => <PlanCard key={index} plan={plan} quickPlan={undefined} />)}


            </div>
            <div className="flex flex-col md:flex-row  items-center gap-3">

                {quickPlans?.map((plan,index) => <PlanCard key={index} quickPlan={plan} plan={undefined} Style={[{w:`md:w-1/2`}]}/>)}
            </div>
        </div>
    )
}
