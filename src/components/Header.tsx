import { BsBell,  BsMenuButtonFill } from "react-icons/bs"
import { IoChevronDownSharp, } from "react-icons/io5"

interface HeaderProps {
    toggleMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
    return (
        <header className="flex justify-between items-center px-5  w-full">

            <img src="/imgs/logo.png" alt="logo" className=" w-[100px] md:w-[150px] " />

            {/* dropdown menu */}
            <div className="flex  gap-4">
                <div className="w-[250px] h-[50px] bg-white rounded-md flex gap-3 items-center justify-center">
                    <img src="/imgs/logo.png" alt="logo" className="rounded-full w-[40px] h-[40px]" />
                    <h5 className="text-[15px]">XYZ Enterprice Pvt. Ltd</h5>
                </div>
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-md cursor-pointer">
                    <IoChevronDownSharp />
                </div>
            </div>


            <button className="group">
                <BsBell className="text-[20px] " />
                <div className="w-4 h-4 rounded-full bg-red-500 text-[10px] group-hover:animate-pulse">3</div>
            </button>
            <button className="md:hidden" onClick={toggleMenu}><BsMenuButtonFill /></button>
        </header>
    )
}
