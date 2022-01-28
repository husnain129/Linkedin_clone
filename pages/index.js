import { useContext } from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Rightbar from '../components/Rightbar/Rightbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { DesignContext } from '../context/DesignCTX'
export default function Home() {
  const { focus, toggleFocus } = useContext(DesignContext)
  return (
    <div className="relative flex min-h-screen flex-col justify-between">
      <div
        className={`absolute z-50 mt-[9vh] h-[91vh] w-full ${
          focus ? 'flex' : 'hidden'
        }`}
        onClick={toggleFocus}
        style={{ background: 'rgba(0,0,0,.6)' }}
      ></div>
      <div className="h-[8vh] w-full">
        <Header />
      </div>
      <div className="flex h-auto flex-col items-center justify-between bg-[#F3F2EF] sm:items-center sm:justify-center tab:flex-row tab:items-start tab:justify-center md:flex-row md:items-start md:justify-between">
        <div className="flex w-full flex-[1] sm:flex-[1] tab:flex-[.31] md:flex-[.25] ">
          <Sidebar />
        </div>
        <div className="flex w-full flex-[1] sm:flex-[1] tab:flex-[.69] md:h-auto md:flex-[.42]">
          <Main />
        </div>
        <div className="hidden h-auto w-full flex-[.33] sm:hidden md:flex">
          <Rightbar />
        </div>
      </div>
    </div>
  )
}
