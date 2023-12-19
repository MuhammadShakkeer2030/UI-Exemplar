import { useState } from "react"
import { Header, Hero, Sidebar } from "../paths"


const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(true)
    const toggleMenu = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <div className="bg-primary flex flex-col ">
            <div>
                <Header toggleMenu={toggleMenu} />


                {showSidebar && <Sidebar showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar} />}
            </div>
            <div className="mt-2 md:mt-10 relative">
                <Hero />

            </div>

        </div>
    )
}

export default Dashboard