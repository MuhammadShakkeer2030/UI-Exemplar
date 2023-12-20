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
        <aside className={` shadow-2xl flex justify-center absolute md:relative  w-[200px]   h-[90vh]  z-50 ${showSidebar ? "block" : "hidden md:block"} `}>


            <button onClick={() => setShowSidebar(false)} className={`absolute top-2  right-2 md:hidden`}>X</button>


            <div style={{ height: "inherit" }} className="absolute w-[200px] flex flex-col items-center bg-white">
                {/* logo show on mubile only */}
                {/* <img src="/imgs/logo.png" alt="logo" className="w-[200px] md:hidden" /> */}

                <Profile />
                <div className="w-[200px] flex flex-col flex-start" >
                    {sideLinks?.map((link) => <li key={link.id} className="list-none flex gap-2 items-center justify-between py-3 transition-colors hover:bg-primary cursor-pointer w-fit px-2 font-medium">
                        <span>{`Icon`}</span>
                        <p>{link.link}</p>
                    </li>)}
                </div>

                <button className="flex items-center p-2 hover:bg-primary">Logout <PiPower /> </button>
            </div>
        </aside>
    );
};
