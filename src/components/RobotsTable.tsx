import { robotsData, type Robot } from "../data/users"

const RobotsTable = () => {
  return (
    <div className="mt-10 relative overflow-x-auto secondary-color shadow-2xl border-[0.5px] border-[#46484F] text-[#ededed]">
      <table className="w-full text-sm text-left">
        <thead className="text-sm border-b border-[#46484F]">
          <tr>
            <th className="px-6 py-3 font-medium">Serial Number</th>
            <th className="px-6 py-3 font-medium">Actions</th>

            <th className="px-6 py-3 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {robotsData.map((user: Robot) => (
            <tr
              key={user.id}
              className="border-b border-[#46484F] hover:bg-[#1f2028] transition"
            >
              <td className="px-6 py-4">{user.serialNumber}</td>
              <td className="px-6 py-4">Unbind</td>

              <td className="px-6 py-4 text-right">
                <button className="bg-[#2b2d34] border cursor-pointer border-[#46484F] px-4 py-1 rounded-md hover:bg-[#fe6c00] hover:text-white transition">
                  Unbind
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RobotsTable
