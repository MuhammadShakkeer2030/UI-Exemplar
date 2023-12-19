import { FC } from "react";
import { BsArrowRight, BsCloud } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { PlanProps, QuickPlanProps } from "../assets/utlity";

interface StyleProps {
    w: string | undefined
}
interface PlansCardProps {
    plan: PlanProps | undefined,
    quickPlan: QuickPlanProps | undefined
    style?: StyleProps | undefined
    index: number
}

export const PlanCard: FC<PlansCardProps> = ({ index, plan, quickPlan, style }) => {
    // const { discount, plan:plan1, price, storage, support, user } = plan
    // const {  plan: plan2, support: support2, user: user2, storage: storage2 } = quickPlan
    console.log(style.w)

    return (
        <div className={`w-[${style?.w || "100%"}] shadow-2xl rounded-md bg-[#ffffff]/60 p-5 `}>
            <div>
                <h2 className=" md:text-[30px] font-semibold">Basic</h2>
                <span className="stroke-current">98.9</span>
                <h4 className=" md:text-[25px] font-medium">$50/mo</h4>


                <button className={`flex items-center relative group w-[150px] gap-2  rounded-md my-2 py-2 px-3 ${index === 0 && "bg-green-500"} ${index === 1 && "bg-red-500/50"} ${index === 2 && "bg-yellow-500"} transition-transform  hover:bg-primary transform hover:scale-95`}>Get Started
                    <span className="transition-all absolute z-50 right-2 opacity-100 group-hover:right-0 group-hover:opacity-100">
                        <BsArrowRight />
                    </span>
                </button>

            </div>
            <hr className="h-[3px] bg-gray-400" />
            <div>
                <span className="text-sm">What you will get:-</span>
                <div className="ml-2">
                    <p className="flex items-center gap-3 font-medium py-2 text[13px]"><CgProfile /> Upto 25 users </p>
                    <p className="flex items-center gap-3 font-medium py-2 text[13px]"><BsCloud /> Upto 25bg storage </p>
                    <p className="flex items-center gap-3 font-medium py-2 text[13px]"><MdEmail /> Email support </p>
                </div>
                <div className="text-center mt-3">
                    <button className="underline text-[20px] font-semibold hover:bg-primary transition-colors px-5 py-3 rounded-md">EXPLORE FEATURES</button>
                </div>
            </div>
        </div>
    );
};
