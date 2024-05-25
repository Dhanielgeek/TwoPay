import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader"
import Menu from "./Menu"


const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[10%] h-[100%] bg-red-500">
        <Menu/>
      </div>
      <div className="w-screen h-screen bg-green-500">
        <DashHeader/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard