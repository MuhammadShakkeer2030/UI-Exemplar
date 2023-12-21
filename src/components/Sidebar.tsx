import { Profile } from "./Profile";
import { Dispatch, FC, SetStateAction, } from "react";
import { sideLinks } from "../assets/utlity";
import { PiPower } from "react-icons/pi";

interface SideProps {
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}

export const Sidebar: FC<SideProps> = ({ setShowSidebar, showSidebar }) => {


    return (
        // <aside className={` shadow-2xl flex justify-center absolute md:relative  w-[200px]   h-[90vh]  z-50 ${showSidebar ? "block" : "hidden md:block"} `}>


        //     <button onClick={() => setShowSidebar(false)} className={`absolute top-2  right-2 md:hidden`}>X</button>


        //     <div style={{ height: "inherit" }} className="absolute w-[200px] flex flex-col items-center bg-white">
        //         {/* logo show on mubile only */}
        //         {/* <img src="/imgs/logo.png" alt="logo" className="w-[200px] md:hidden" /> */}

        //         <Profile />
        //         <div className="w-[200px] flex flex-col flex-start" >
        //             {sideLinks?.map((link) => <li key={link.id} className="list-none flex gap-2 items-center justify-between py-3 transition-colors hover:bg-primary cursor-pointer  max-w-[180px] px-2 font-medium border-2 border-sky-500/30 my-2">
        //                 <span>{`Icon`}</span>
        //                 <p>{link.link}</p>
        //             </li>)}
        //         </div>

        //         <button className="flex items-center p-2 hover:bg-primary font-bold text-[#8ab9ff] md:mt-20">Logout <PiPower /> </button>
        //     </div>
        // </aside>

        //     background: white;
        // height: 100vh;
        // position: fixed;
        // top: 0;
        <aside className={`shadow-2xl flex justify-start px-5 md:px-0 fixed h-[100vh] bg-white top-0 lg:relative w-[200px] md:h-[90vh] z-50 ${showSidebar ? "w-full h-full" : "hidden lg:block"} overscroll-hidden md:overscroll-none`}>
            <button onClick={() => setShowSidebar(false)} className="absolute top-2 right-5 z-50 lg:hidden">X</button>
            <div style={{ height: "inherit" }} className="absolute  md:w-full flex flex-col items-center bg-white">
                {/* Logo show on mobile only */}
                {/* <img src="/imgs/logo.png" alt="logo" className="w-[200px] md:hidden" /> */}
                <Profile />
                <div className=" flex flex-col flex-start">
                    {sideLinks?.map((link) => (
                        <li
                            key={link.id}
                            className="list-none flex gap-2 items-center justify-between py-3 transition-colors hover:bg-primary cursor-pointer max-w-[180px] px-2 font-medium border-2 border-sky-500/30 my-2"
                        >
                            <span>{`Icon`}</span>
                            <p>{link.link}</p>
                        </li>
                    ))}
                </div>
                <button className="flex items-center p-2 hover:bg-primary font-bold text-[#8ab9ff] md:mt-20">Logout <PiPower /> </button>
            </div>
        </aside>


    );
};
