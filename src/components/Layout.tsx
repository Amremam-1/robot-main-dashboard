import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { useState } from "react"
import DesktopSidebar from "./DasktopSideBar"
import MobileSidebar from "./MobileSidebar"

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true)

  const handleClick = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className="min-h-screen primary-color">
      <div className="hidden md:block">
        <DesktopSidebar openSidebar={openSidebar} />
      </div>

      <div className="block md:hidden">
        <MobileSidebar openSidebar={openSidebar} />
      </div>

      <div
        className={`
          flex flex-col transition-all duration-300
          ${openSidebar ? "ml-12 md:ml-65" : "ml-0"}          
        `}
      >
        <NavBar onClick={handleClick} />

        <main className="flex-1 p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
