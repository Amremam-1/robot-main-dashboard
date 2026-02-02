const ActionsBtn = () => {
  return (
    <div className="flex items-center gap-4 justify-between md:flex-row flex-col mt-8 text-color">
      <button className="w-full md:w-1/3 bg-[#fe6c00] px-3 py-1.5 rounded-sm cursor-pointer">
        Scan QR Code
      </button>
      <button className="w-full flex-1 border-color py-1.5 px-3 rounded-sm cursor-pointer">
        Delete Account
      </button>
    </div>
  )
}

export default ActionsBtn
