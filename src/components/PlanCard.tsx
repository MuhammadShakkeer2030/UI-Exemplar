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
    customstyle: string
}

export const PlanCard: FC<PlansCardProps> = ({  plan, quickPlan, customstyle }) => {
    // const { discount, plan:plan1, price, storage, support, user } = plan
    // const {  plan: plan2, support: support2, user: user2, storage: storage2 } = quickPlan

    return (
        // <div className={` ${customwidth} shadow-2xl rounded-md bg-[#ffffff]/60 p-5 `}>
        //     <div>
        //         <h2 className=" md:text-[30px] font-semibold">{plan?.plan || quickPlan?.plan}</h2>
        //         <span className="stroke-current">{plan?.discount}</span>
        //         <h4 className=" md:text-[25px] font-medium">{`${plan?.price}/mo`}  </h4>

        //         <p>{    quickPlan?.descr}</p>
        //         <button className={`flex items-center relative group w-[150px] gap-2  rounded-md my-2 py-2 px-3 ${index === 0 && "bg-green-500"} ${index === 1 && "bg-red-500/50"} ${index === 2 && "bg-yellow-500"} transition-transform  hover:bg-primary transform hover:scale-95`}>Get Started
        //             <span className="transition-all absolute z-50 right-2 opacity-100 group-hover:right-0 group-hover:opacity-100">
        //                 <BsArrowRight />
        //             </span>
        //         </button>

        //     </div>
        //     <hr className="h-[3px] bg-gray-400" />
        //     <div>
        //         <span className="text-sm">What you will get:-</span>
        //         <div className="ml-2">
        //             <p className="flex items-center gap-3  py-2 text[13px]"><CgProfile />Upto {plan?.user || quickPlan?.user} Users</p>
        //             <p className="flex items-center gap-3  py-2 text[13px]"><BsCloud />Upto {plan?.storage || quickPlan?.storage} Storage</p>
        //             <p className="flex items-center gap-3  py-2 text[13px]"><MdEmail /> {plan?.support || quickPlan?.support} Support</p>
        //         </div>
        //         <div className="text-center mt-3">
        //             <button className="underline text-[20px] font-semibold hover:bg-primary transition-colors px-5 py-3 rounded-md">EXPLORE FEATURES</button>
        //         </div>
        //     </div>
        // </div>

        <div className={`shadow-2xl rounded-md bg-opacity-60 p-5 ${customstyle}`}>
            <div>
                {quickPlan?.label && <span className={`py-[2px] px-2 rounded-full text-sm ${quickPlan?.id === 1 && "bg-[#c6ff8e]"} ${quickPlan?.id === 2 && "bg-[#8ab9ff]"}`}>{quickPlan.label}</span>}
                <h2 className="text-3xl md:text-2xl xl:text-3xl font-semibold">{plan?.plan || quickPlan?.plan}</h2>
                {plan?.discount && <span className="text-base md:text-lg line-through  decoration-red-500">{plan?.discount}/mo</span>}
                {plan?.price && <h4 className="text-2xl md:text-2xl xl:text-3xl ">${` ${plan?.price}`}<span className="md:text-xl xl:text-2xl opacity-80">/mo</span></h4>}

                <p>{quickPlan?.descr}</p>
                <button className={`flex items-center gap-2 relative group w-[150px] rounded-md my-2 py-2 px-3 ${plan?.id === 1 && "bg-[#ffe7a9]"} ${plan?.id === 2 && "bg-[#fe9494]"} ${plan?.id === 3 && "bg-[#e7a2ff]"} 
                ${quickPlan?.id === 1 && "bg-[#c6ff8e]"} ${quickPlan?.id === 2 && "bg-[#8ab9ff]"}
                transition-transform  hover:bg-primary transform hover:scale-95`}>
                    Get Started
                    <span className="absolute z-10 right-2  group-hover:right-0 group-hover:opacity-100 transition-all">
                        <BsArrowRight />
                    </span>
                </button>
            </div>
            <hr className="h-[2px] bg-gray-400" />
            <div>
                <span className="text-xs md:text-sm">What you will get:-</span>
                <div className="ml-2">
                    <p className="flex items-center gap-3 py-2 text-xs md:text-sm"><CgProfile />Upto {plan?.user || quickPlan?.user} Users</p>
                    <p className="flex items-center gap-3 py-2 text-xs md:text-sm"><BsCloud />Upto {plan?.storage || quickPlan?.storage} Storage</p>
                    <p className="flex items-center gap-3 py-2 text-xs md:text-sm"><MdEmail /> {plan?.support || quickPlan?.support} Support</p>
                </div>
                {!quickPlan && <div className="text-center mt-3">
                    <button className="text-lg md:text-xl underline font-semibold hover:bg-primary transition-colors px-5 py-3 rounded-md">EXPLORE FEATURES</button>
                </div>}
            </div>
        </div>

    );
};
