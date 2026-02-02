import { MdMenuOpen } from "react-icons/md"
import { IoMdPerson } from "react-icons/io"
import { IoMdArrowDropdown } from "react-icons/io"

interface props {
  onClick: () => void
}

const NavBar = ({ onClick }: props) => {
  return (
    <div className="h-16 text-[#EDEDED] flex items-center justify-between px-6">
      <div className="flex items-center">
        <MdMenuOpen
          size={30}
          color="white"
          className="cursor-pointer"
          onClick={onClick}
        />
        <h1 className="ms-1 font-semibold">Home</h1>
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-center bg-[#29221d] w-7 h-7 rounded-sm">
          <IoMdPerson size={20} color="#fe6c00" />
        </div>
        <div className="flex items-center ms-2 gap-1 cursor-pointer">
          <h3>Admin</h3>
          <IoMdArrowDropdown size={15} />
        </div>
      </div>
    </div>
  )
}

export default NavBar
