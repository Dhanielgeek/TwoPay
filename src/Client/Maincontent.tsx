import Chart from "./Chart"
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { TbTransferIn,TbDeviceMobilePause,TbTransferOut } from "react-icons/tb";


const Maincontent = () => {

const [ShowBalance, setShowBalance] = useState<boolean>(false)


const HandleShow = ()=>{
  setShowBalance(!ShowBalance)
}



  return (
    <div className="w-[100%]  h-[88vh] scroll scrollbar-thin scrollbar-track-transparent overflow-y-scroll ">
    <div className="w-[100%] h-[75%]  flex justify-around items-center">
      <div className="w-[35%] h-[90%] flex justify-around items-center flex-col">
        <div className="w-[100%] h-[45%]  flex justify-around items-center flex-col">
          <div className="w-[91%] h-[90%] bg-[#fdfdf7] shadow-md rounded-md px-3 flex flex-col justify-around items-start">
            <h2 className="text-xl font-semibold">Account Balance</h2>
            <div className="w-[100%]  h-[30%] flex justify-start gap-4 items-center">
            {
              ShowBalance ? <p className="text-3xl">********</p> :   <p className="text-3xl ">₦ 10,000.00</p>
            }
              {
                ShowBalance ? <FaRegEyeSlash onClick={HandleShow} className="cursor-pointer text-2xl"/> :    <FaRegEye onClick={HandleShow} className="cursor-pointer text-2xl"/>

              }
           
              
            </div>
            <p className="text-[#9fb5eb]">Last Updated: 12:00 PM</p>
          </div>
        </div>
        <div className="w-[90%] h-[40%]  flex flex-col justify-around items-start rounded-md">
          <div className="w-[100%] h-[20%] ">
            <p className=" font-semibold">Transaction History</p>
          </div>
          <div className="w-[100%] h-[80%]  scroll  overflow-y-scroll scrollbar-track-gray-300 scrollbar-thin">
            <div className="w-[100%] h-[45%] flex justify-around items-center border rounded-md">
              <div className="w-[40px] h-[40px] bg-green-100 rounded-full flex justify-center items-center">
                <TbTransferIn className=" text-green-500 text-2xl"/>
              </div>
              <div className="w-[45%] h-[90%]  flex justify-center items-start flex-col">
                <p className="text-[14px] font-medium">Transfer to Daniel Ben</p>
                <p className="text-gray-400">May 26th, 12:15</p>
              </div>
              <div className="w-[28%] h-[90%]  flex justify-center flex-col items-center">
                <p className="text-[16px] font-bold">₦ 3,100.00</p>
                <p className="font-semibold text-green-500">Successful</p>
              </div>
            </div>
            <div className="w-[100%] h-[45%] flex justify-around items-center border mt-2 rounded-md">
              <div className="w-[40px] h-[40px] bg-green-100 rounded-full flex justify-center items-center">
                <TbDeviceMobilePause className=" text-green-500 text-2xl"/>
              </div>
              <div className="w-[45%] h-[90%]  flex justify-center items-start flex-col">
                <p className="text-[14px] font-medium">Mobile Data</p>
                <p className="text-gray-400">May 26th, 12:15</p>
              </div>
              <div className="w-[28%] h-[90%]  flex justify-center flex-col items-center">
                <p className="text-[16px] font-bold">₦ 500.00</p>
                <p className="font-semibold text-green-500">Successful</p>
              </div>
            </div>
            <div className="w-[100%] h-[45%] flex justify-around items-center border mt-2 rounded-md">
              <div className="w-[40px] h-[40px] bg-green-100 rounded-full flex justify-center items-center">
                <TbTransferOut className=" text-green-500 text-2xl"/>
              </div>
              <div className="w-[45%] h-[90%]  flex justify-center items-start flex-col">
                <p className="text-[14px] font-medium">Mobile Data</p>
                <p className="text-gray-400">May 26th, 12:15</p>
              </div>
              <div className="w-[28%] h-[90%]  flex justify-center flex-col items-center">
                <p className="text-[16px] font-bold">₦ 12,00.00</p>
                <p className="font-semibold text-red-500">Declined</p>
              </div>
            </div>
          </div>
    
        </div>
      </div>
      <div className="w-[50%] h-[85%] flex justify-center items-center">
        <Chart/>
      </div>
    </div>
    <div className="w-[100%] h-[70%] bg-purple-700"></div>
    </div>
  )
}

export default Maincontent