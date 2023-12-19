import { FC } from "react";
import { BsArrowRight, BsCloud } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { PlanProps, QuickPlanProps } from "../assets/utlity";
interface PlansCardProps {
    plan: PlanProps | undefined,
    quickPlan: QuickPlanProps | undefined
    Style?:string[]
}

export const PlanCard: FC<PlansCardProps> = ({ plan, quickPlan ,Style}) => {
    // const { discount, plan:plan1, price, storage, support, user } = plan
    // const {  plan: plan2, support: support2, user: user2, storage: storage2 } = quickPlan

    return (
        <div className={`w-full md:w-[300px] shadow-2xl rounded-md bg-[#ffffff]/60 p-5`}>
            <div>
                <h2 className="text-[30px] font-semibold">Bsic</h2>
                <span className="stroke-current">98.9</span>
                <h4 className="text-[25px] font-medium">$50/mo</h4>
                <button className="flex items-center gap-2 bg-[#ffe7a9] rounded-md py-2 px-3">Get Started <BsArrowRight /> </button>
            </div>
            <hr className="h-[2px]" />
            <div>
                <span className="text-sm">What you will get:-</span>
                <div className="ml-2">
                    <p className="flex items-center py-3 text[13px]"><CgProfile /> Upto 25 users </p>
                    <p className="flex items-center py-3 text[13px]"><BsCloud /> Upto 25bg storage </p>
                    <p className="flex items-center py-3 text[13px]"><MdEmail /> Email support </p>
                </div>
                <button className="underline text-[20px]">Explore Features</button>
            </div>
        </div>
    );
};
