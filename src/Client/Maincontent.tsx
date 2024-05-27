import Chart from "./Chart"
import { FaRegEye,FaRegEyeSlash,FaMoneyBillTrendUp } from "react-icons/fa6";
import { useState } from "react";
import { TbTransferIn,TbTransferOut, TbMobiledata } from "react-icons/tb";
import Wallet from '../assets/wallet.gif'
import { GiTakeMyMoney,GiMoneyStack  } from "react-icons/gi";
import ExpenseChart from "./ExpenseChart";





const Maincontent = () => {

const [ShowBalance, setShowBalance] = useState<boolean>(true)
const [ShowSpending, setShowSpending] = useState<boolean>(true)
const [ShowSaved, setShowSaved] = useState<boolean>(true)


const HandleShow = ()=>{
  setShowBalance(!ShowBalance)
}

const HandleSpending = ()=>{
  setShowSpending(!ShowSpending)
}

const HandleSaved = ()=>{
  setShowSaved(!ShowSaved)
}




  return (
    <div className="w-[100%]  h-[88vh] scroll scrollbar-thin scrollbar-track-transparent overflow-y-scroll phone:scrollbar-none ">
    <div className="w-[100%] h-[75%]  flex justify-around items-center">
      <div className="w-[100%] h-[90%] flex justify-around items-center flex-col">
        <div className="w-[92%] h-[45%]  flex justify-around items-center flex-wrap phone:w-[95%]">
          <div className="w-[23%] h-[70%] bg-[#E0F3FF]  rounded-md px-3 flex flex-col justify-center gap-3 items-start phone:w-[45%] phone:h-[45%]">
          <div className="w-[100%] h-[35%] flex justify-between px-1 gap-3 items-center">
          <h2 className="text-[18px] font-normal text-[#7d8597] phone:text-[14px] smallPhone:text-[10px]">Total Balance</h2>
          <div className="w-[40px] h-[40px] bg-purple-300 rounded-full flex justify-center items-center smallPhone:w-[20px]  smallPhone:h-[20px]">
          <GiMoneyStack className="text-purple-600 text-2xl phone:text-sm smallPhone:text-[12px]"/>
          </div>
          </div>
            <div className="w-[100%]  h-[30%] flex justify-start gap-4 items-center">
            {
              ShowBalance ? <p className="text-2xl font-semibold phone:text-lg">********</p> :   <p className="text-2xl font-semibold phone:text-[16px]">₦ 3,234.00</p>
            }
              {
                ShowBalance ? <FaRegEyeSlash onClick={HandleShow} className="cursor-pointer text-2xl phone:text-lg smallPhone:text-sm"/> :    <FaRegEye onClick={HandleShow} className="cursor-pointer text-2xl phone:text-lg smallPhone:text-sm"/>

              }
           
              
            </div>
          </div>
          <div className="w-[23%] h-[70%] bg-[#E0F3FF] rounded-md  px-3 flex flex-col justify-center gap-2 items-start phone:w-[45%] phone:h-[45%]">
          <div className="w-[100%] h-[35%] flex justify-between px-1 gap-3 items-center">
          <h2 className="text-[18px] font-normal text-[#7d8597] phone:text-[14px] smallPhone:text-[10px]">Total Spending</h2>
          <div className="w-[40px] h-[40px] bg-red-300 rounded-full flex justify-center items-center smallPhone:w-[20px] smallPhone:h-[20px]">
          <FaMoneyBillTrendUp className="text-red-600 phone:text-sm smallPhone:text-[10px]"/>
          </div>
          </div>
          
          <div className="w-[100%]  h-[30%] flex justify-start gap-4 items-center">
            {
              ShowSpending ? <p className="text-2xl font-semibold phone:text-lg">********</p> :   <p className="text-2xl font-semibold phone:text-[16px]">₦ 5,432.00</p>
            }
              {
                ShowSpending ? <FaRegEyeSlash onClick={HandleSpending} className="cursor-pointer text-2xl phone:text-lg smallPhone:text-sm"/> :    <FaRegEye onClick={HandleSpending} className="cursor-pointer text-2xl phone:text-lg smallPhone:text-sm"/>

              }
           
              
            </div>
          </div>
          <div className="w-[23%] h-[70%] bg-[#E0F3FF] rounded-md  px-3 flex flex-col justify-center gap-3 items-start phone:w-[45%] phone:h-[45%] smallPhone:h-[47%]">
          <div className="w-[100%] h-[35%] flex justify-between px-1 gap-3 items-center">
          <h2 className="text-[18px] font-normal text-[#7d8597] phone:text-[14px] smallPhone:text-[10px]">Total Saved</h2>
          <div className="w-[40px] h-[40px] bg-green-200 rounded-full flex justify-center items-center smallPhone:w-[20px] smallPhone:h-[20px]">
          <GiTakeMyMoney className="text-green-600 text-2xl"/>
          </div>
          </div>
          <div className="w-[100%]  h-[30%] flex justify-start gap-4 items-center">
            {
              ShowSaved ? <p className="text-2xl font-semibold phone:text-lg">********</p> :   <p className="text-2xl font-semibold phone:text-[20px] smallPhone:text-[14px]">₦ 2,345.00</p>
            }
              {
                ShowSaved ? <FaRegEyeSlash onClick={HandleSaved} className="cursor-pointer text-2xl phone:text-lg smallPhone:text-sm"/> :    <FaRegEye onClick={HandleSaved} className="cursor-pointer text-2xl phone:text-lg smallPhone:text-sm"/>

              }
           
              
            </div>
          </div>
          <div className="w-[23%] h-[100%]  rounded-md  px-3 flex flex-col justify-center gap-3 items-start phone:w-[45%] phone:h-[45%]">
          <img src={Wallet} alt="" className="w-[100%] h-[100%] object-cover rounded-lg cursor-pointer" />
      
          </div>
        </div>
        <div className="w-[89%] h-[40%] flex flex-col justify-around items-start rounded-md">
          <div className="w-[100%] h-[20%] smallPhone:h-[25%]">
            <p className=" font-semibold">Recent Activity</p>
          </div>
          <div className="w-[100%] h-[80%]  scroll  overflow-y-scroll scrollbar-track-gray-300 scrollbar-thin smallPhone:h-[90%]">
          <div className="w-[100%] h-[45%] flex justify-around items-center border mt-2 rounded-md">
              <div className="w-[40px] h-[40px] bg-green-100 rounded-full flex justify-center items-center smallPhone:w-[20px] smallPhone:h-[20px]">
                <TbTransferOut className=" text-green-500 text-2xl smallPhone:text-lg"/>
              </div>
              <div className="w-[45%] h-[90%]  flex justify-center items-start flex-col">
                <p className="text-[14px] font-medium">Deposit</p>
                <p className="text-gray-400 smallPhone:text-[12px]">May 26th, 12:15</p>
              </div>
              <div className="w-[28%] h-[90%]  flex justify-center flex-col items-center">
                <p className="text-[16px] font-bold smallPhone:text-[12px]">₦ 12,00.00</p>
                <p className="font-semibold text-green-500 smallPhone:text-sm">Sucessful</p>
              </div>
            </div>
            <div className="w-[100%] h-[45%] flex justify-around items-center border mt-2 rounded-md">
              <div className="w-[40px] h-[40px] bg-green-100 rounded-full flex justify-center items-center smallPhone:w-[20px] smallPhone:h-[20px]">
                <TbTransferIn className=" text-green-500 text-2xl smallPhone:text-lg"/>
              </div>
              <div className="w-[45%] h-[90%]  flex justify-center items-start flex-col">
                <p className="text-[14px] font-medium">Transfer</p>
                <p className="text-gray-400 smallPhone:text-[12px]">May 26th, 12:15</p>
              </div>
              <div className="w-[28%] h-[90%]  flex justify-center flex-col items-center">
                <p className="text-[16px] font-bold smallPhone:text-[12px]">₦ 12,00.00</p>
                <p className="font-semibold text-red-500 smallPhone:text-sm">Declined</p>
              </div>
            </div>
            <div className="w-[100%] h-[45%] flex justify-around items-center border mt-2 rounded-md">
              <div className="w-[40px] h-[40px] bg-green-100 rounded-full flex justify-center items-center smallPhone:w-[20px] smallPhone:h-[20px]">
                <TbMobiledata className=" text-green-500 text-2xl smallPhone:text-lg"/>
              </div>
              <div className="w-[45%] h-[90%]  flex justify-center items-start flex-col">
                <p className="text-[14px] font-medium">Mobile data</p>
                <p className="text-gray-400 smallPhone:text-[12px]">May 26th, 12:15</p>
              </div>
              <div className="w-[28%] h-[90%]  flex justify-center flex-col items-center">
                <p className="text-[16px] font-bold smallPhone:text-[12px]">₦ 12,00.00</p>
                <p className="font-semibold text-yellow-500 smallPhone:text-sm">Pending</p>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
    <div className="w-[100%] h-[80%] flex justify-center items-center phone:h-[50rem] phone:flex-col">
      <div className="w-[50%] h-[100%] flex justify-center items-center phone:w-[97%] smallPhone:w-[90%]">
         <Chart/>
      </div>
      <div className="w-[50%] h-[100%] flex flex-col justify-center items-center phone:w-[100%] smallPhone:w-[80%]">
        <div className="w-[100%] h-[12%] shadow-sm  rounded-md flex justify-between gap-5 px-3 items-center">
          <h2 className="font-medium text-lg">All Expenses</h2>
          <div className="w-[40%] h-[70%] flex justify-around  items-center">
            <select name="" id="" className="w-[100%] h-[100%] border  outline-none px-2 cursor-pointer rounded-lg">
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
    </div>
        </div>
        <div className="w-[100%] h-[70%] flex justify-center items-center">
          <ExpenseChart/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Maincontent