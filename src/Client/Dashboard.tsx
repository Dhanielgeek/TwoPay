import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader"
import Menu from "./Menu"


const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[15%] h-[100%] phone:hidden">
        <Menu/>
      </div>
      <div className="w-screen h-screen">
        <DashHeader/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard