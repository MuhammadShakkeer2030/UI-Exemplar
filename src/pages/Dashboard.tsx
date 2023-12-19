import { useState } from "react"
import { Hero, Sidebar } from "../paths"
import { BsMenuButton } from "react-icons/bs"


const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(true)
    const toggleMenu = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <div className="bg-primary flex ">
            <div>
                {/* show logo in all devices without mubile */}
                <img src="/imgs/logo.png" alt="logo" className="hidden md:block w-[200px] " />

                <button className="md:hidden" onClick={toggleMenu}><BsMenuButton /></button>
                <Sidebar showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar} />
            </div>
            <div className="mt-10 w-full">
                <Hero />
                
            </div>

        </div>
    )
}

export default Dashboard