import NavgiationLinks from "./NavgiationLinks"

interface Props {
  openSidebar: boolean
}

const DesktopSidebar = ({ openSidebar }: Props) => {
  return (
    <div
      className={`
        fixed top-0 left-0 z-50
        h-screen w-65
        secondary-color text-color
        transition-transform duration-300 ease-in-out
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Top (Logo) */}
      <div className="h-16 px-6 flex items-center border-b-[0.5px] border-[#46484F]">
        <div className="flex items-center justify-center bg-[#1E2027] w-10 h-10 rounded-xl">
          <img src="/images/logo.png" alt="logo" loading="lazy" />
        </div>

        <h1 className="ms-2 font-semibold text-[#ededed] uppercase whitespace-nowrap">
          MBN <span className="text-[#fe6c00]">Robots</span>
        </h1>
      </div>

      <NavgiationLinks />
    </div>
  )
}

export default DesktopSidebar
