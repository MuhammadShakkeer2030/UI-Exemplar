import { BsBell, } from "react-icons/bs"
import { IoChevronDownSharp, } from "react-icons/io5"
import { IoIosMenu } from "react-icons/io"

interface HeaderProps {
    toggleMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
    return (
        <header className="flex justify-center md:justify-between items-center md:px-5  w-[80%]">

            <img src="/imgs/logo.png" alt="logo" className=" w-[100px] md:w-[150px] " />

            {/* dropdown menu */}
            <div className="flex gap-2 md:gap-4">
                <div className="w-[150px] md:w-[250px] h-[50px] bg-white rounded-md flex gap-3 items-center justify-center">
                    <img src="/imgs/logo.png" alt="logo" className="rounded-full w-[40px] h-[40px]" />
                    <h5 className="text-[10px] md:text-[15px]">XYZ Enterprice Pvt. Ltd</h5>
                </div>
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-md cursor-pointer">
                    <IoChevronDownSharp />
                </div>
            </div>

            {/*     position: absolute;
    top: 200px;
    right: 100px;
    z-index: 99; */}
            <div className="flex">
                <button className="static lg:absolute top-[200px] right-[100px] z-50 group p-4 bg-primary">
                    <BsBell className="text-[20px] " />
                    <div className="w-4 h-4 rounded-full bg-red-500 text-[10px] group-hover:animate-pulse">3</div>
                </button>
                <button className="text-[50px] md:hidden" onClick={toggleMenu}><IoIosMenu /></button>
            </div>
        </header>
    )
}
