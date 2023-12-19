import { BsMenuButton, BsMenuButtonFill } from "react-icons/bs"

interface HeaderProps {
    toggleMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
    return (
        <header className="flex justify-between px-5 bg-red-500/20 w-full">
            
            <img src="/imgs/logo.png" alt="logo" className=" w-[100px] md:w-[200px] " />
            <button className="md:hidden" onClick={toggleMenu}><BsMenuButtonFill /></button>
        </header>
    )
}
