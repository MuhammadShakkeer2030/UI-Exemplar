import { useState } from "react"
import { Header, Hero, Sidebar } from "../paths"


const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const toggleMenu = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <div className="bg-primary flex flex-col">
            <div>
                <Header toggleMenu={toggleMenu} />



            </div>
            <div className="mt-2 md:mt-5 relative flex ">
                <Sidebar showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar} />
                <Hero />

            </div>

        </div>
    )
}

export default Dashboard