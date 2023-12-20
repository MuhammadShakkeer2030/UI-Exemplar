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
    index: number,
    customwidth: string
}

export const PlanCard: FC<PlansCardProps> = ({ index, plan, quickPlan, customwidth }) => {
    // const { discount, plan:plan1, price, storage, support, user } = plan
    // const {  plan: plan2, support: support2, user: user2, storage: storage2 } = quickPlan

    return (
        <div className={` ${customwidth} shadow-2xl rounded-md bg-[#ffffff]/60 p-5 `}>
            <div>
                <h2 className=" md:text-[30px] font-semibold">{plan?.plan || quickPlan?.plan}</h2>
                <span className="stroke-current">{plan?.discount}</span>
                <h4 className=" md:text-[25px] font-medium">{`${plan?.price}/mo`}  </h4>

                <p>{    quickPlan?.descr}</p>
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
                    <p className="flex items-center gap-3  py-2 text[13px]"><CgProfile />Upto {plan?.user || quickPlan?.user} Users</p>
                    <p className="flex items-center gap-3  py-2 text[13px]"><BsCloud />Upto {plan?.storage || quickPlan?.storage} Storage</p>
                    <p className="flex items-center gap-3  py-2 text[13px]"><MdEmail /> {plan?.support || quickPlan?.support} Support</p>
                </div>
                <div className="text-center mt-3">
                    <button className="underline text-[20px] font-semibold hover:bg-primary transition-colors px-5 py-3 rounded-md">EXPLORE FEATURES</button>
                </div>
            </div>
        </div>
    );
};
