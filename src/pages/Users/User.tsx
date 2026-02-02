import { IoMdPerson } from "react-icons/io"
import ActionsBtn from "../../components/ActionsBtn"
import RobotsTable from "../../components/RobotsTable"

const User = () => {
  return (
    <div>
      {/* userDetails */}
      <div className="w-full px-3 py-5 rounded-xl shadow-2xl bg-[#191A21] border-b border-[#46484F]">
        <div className="flex  gap-4">
          <IoMdPerson size={40} className="text-[#fe6c00]" />

          <div className="flex flex-col gap-1 text-[#ededed] text-sm">
            <h3>Name</h3>
            <h4>email</h4>
            <p>phone</p>
          </div>
        </div>
      </div>

      {/* User Customise */}
      <ActionsBtn />

      {/* Tabel Robot */}
      <RobotsTable />
    </div>
  )
}

export default User
