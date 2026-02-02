import { useState } from "react"
import { FiSearch, FiX } from "react-icons/fi"

interface SearchInputProps {
  onSearch: (value: string) => void
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [value, setValue] = useState("")

  return (
    <div className="relative w-full max-w-md mb-4">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b8e99]">
        <FiSearch size={18} />
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => {
          const val = e.target.value
          setValue(val)
          onSearch(val)
        }}
        placeholder="Search by name, email, or phone"
        className="
          w-full bg-[#191A21] text-[#ededed]
          border border-[#46484F] rounded-lg
          pl-10 pr-10 py-2.5 text-sm
          outline-none
          transition-all duration-300
          focus:border-[#fe6c00]
          focus:ring-1 focus:ring-[#fe6c00]
          placeholder:text-[#7c7f88]
        "
      />

      {value && (
        <button
          onClick={() => {
            setValue("")
            onSearch("")
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     text-[#8b8e99] hover:text-[#fe6c00] transition"
        >
          <FiX size={16} />
        </button>
      )}
    </div>
  )
}

export default SearchInput
