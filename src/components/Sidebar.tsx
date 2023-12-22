import { Profile } from "./Profile";
import { Dispatch, FC, SetStateAction, } from "react";
import { sideLinks } from "../assets/utlity";
import { PiPower } from "react-icons/pi";
import React from "react";

interface SideProps {
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}

export const Sidebar: FC<SideProps> = ({ setShowSidebar, showSidebar }) => {


    return (

        <aside className={`drop-shadow-2xl flex justify-center md:justify-start px-5 md:px-0 fixed h-[100vh] bg-white top-0 xl:relative w-[250px] md:min-h-fit z-50 ${showSidebar ? "w-full h-full" : "hidden xl:block"} overscroll-hidden md:overscroll-none`}>
            <button onClick={() => setShowSidebar(false)} className="absolute top-2 right-5 z-50 xl:hidden">X</button>
            <div style={{ height: "inherit" }} className="absolute  md:w-full flex flex-col items-center bg-white">
                {/* Logo show on mobile only */}
                {/* <img src="/imgs/logo.png" alt="logo" className="w-[200px] md:hidden" /> */}
                <Profile />
                <div className=" flex flex-col flex-start w-full">
                    {sideLinks?.map((linkItem) => (
                        <li
                            key={linkItem.id}
                            className="list-none flex gap-2 items-center justify-between py-3 transition-colors hover:bg-primary cursor-pointer max-w-[180px] px-2 font-medium border xl:border-l-0 rounded-e-md border-sky-500/30 my-2"
                        >
                           <span className="text-[#0079d4]">{React.createElement(linkItem?.icon)}</span>
                            <p>{linkItem.link}</p>
                        </li>
                    ))}
                </div>
                <button className="flex items-center p-2 hover:bg-primary font-bold text-[#8ab9ff] md:mt-20">Logout <PiPower /> </button>
            </div>
        </aside>


    );
};
