import { useMemo, useState } from "react"
import { usersData } from "../../data/users"
import type { User } from "../../data/users"
import SearchInput from "../../components/SearchInput"

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchTerm, setSearchTerm] = useState("")

  const rowPerPage = 6

  const filteredUsers: User[] = useMemo(() => {
    return usersData.filter((user) =>
      `${user.name} ${user.email} ${user.phone}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const totalPages = Math.ceil(filteredUsers.length / rowPerPage)

  const startIdx = (currentPage - 1) * rowPerPage
  const endIdx = startIdx + rowPerPage

  const currentUsers: User[] = filteredUsers.slice(startIdx, endIdx)

  return (
    <>
      <SearchInput
        onSearch={(value) => {
          setSearchTerm(value)
        }}
      />

      {/* table */}
      <div className="relative overflow-x-auto secondary-color shadow-2xl border-[0.5px] border-[#46484F] text-[#ededed]">
        <table className="w-full text-sm text-left">
          <thead className="text-sm border-b border-[#46484F]">
            <tr>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Email</th>
              <th className="px-6 py-3 font-medium">Phone</th>
              <th className="px-6 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user: User) => (
              <tr
                key={user.id}
                className="border-b border-[#46484F] hover:bg-[#1f2028] transition"
              >
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-[rgb(254,108,0)] text-white px-4 py-1 rounded-md text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}

            {currentUsers.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-400">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-4 text-sm text-[#ededed] mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="disabled:opacity-40 hover:text-white px-2 py-1 secondary-color rounded-md border border-[#46484F]"
        >
          &lt; Previous
        </button>

        <span className="px-3 py-1 border border-[#46484f] rounded-md">
          {currentPage}
        </span>

        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="disabled:opacity-40 hover:text-white px-2 py-1 secondary-color rounded-md border border-[#46484F]"
        >
          Next &gt;
        </button>
      </div>
    </>
  )
}

export default Dashboard
