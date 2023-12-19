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
        <div className={` shadow-2xl flex justify-center relative ${showSidebar && "w-[200px]"}`}>


            <button onClick={() => setShowSidebar(false)} className={`${!showSidebar && "hidden"} absolute top-2  right-2 z-50`}>X</button>


            {showSidebar && <div className="absolute z-40   ">
                {/* logo show on mubile only */}
                <img src="/imgs/logo.png" alt="logo" className="w-[200px] md:hidden" />

                <Profile />
                <div>
                    {sideLinks?.map((link) => <li key={link.id} className="list-none flex gap-2 items-center justify-between py-3">
                        <span>{`Icon`}</span>
                        <p>{link.link}</p>
                    </li>)}
                </div>

                <button className="flex items-center p-2 hover:bg-primary">Logout <PiPower /> </button>
            </div>}
        </div>
    );
};
