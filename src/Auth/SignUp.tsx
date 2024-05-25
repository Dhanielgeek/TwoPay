import Logo from '../assets/bank-icon-9.png'
import { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {

  const [Show, setShow] = useState<boolean>(false)
  const [confirmShow, setconfirmShow] = useState<boolean>(false)


  const HandleShow = ()=>{
    setShow(!Show)
  }


  const HandleConfirm = ()=>{
    setconfirmShow(!confirmShow)
  }

  return (
    <div className="w-[100%] h-[55rem] bg-[#ebebeb] flex justify-center items-center">
      <div className="w-[33%] h-[85%] bg-[#2E54E3] rounded-md flex-col flex justify-around items-center phone:w-[90%]">
      <div className="w-[100%] h-[13%] px-7">
        <div className="w-[17%] h-[100%] flex justify-center items-center flex-col ">
          <img src={Logo} alt="" className='w-[100%] h-[70%] object-contain' />
          <p className=' text-sm text-white font-semibold'>TwoPay</p>
        </div>
      </div>
      <div className='w-[100%] h-[5%]  flex justify-start px-7 items-center'>
        <p className='text-lg font-semibold text-white'>Create an Account Now</p>
      </div>
      <form action="" className='w-[90%] h-[75%] flex justify-around items-center flex-col'>
        <div className='w-[100%] h-[15%]  flex justify-around items-start flex-col'>
          <label htmlFor="" className='text-[15px] text-white'>First Name</label>
          <input type="text" className='w-[100%] h-[54%] bg-[#fdfdf7] outline-none rounded-md px-3' placeholder='Your FirstName' />
        </div>
        <div className='w-[100%] h-[15%]  flex justify-around items-start flex-col'>
          <label htmlFor="" className='text-[15px] text-white'>Last Name</label>
          <input type="text" className='w-[100%] h-[54%] bg-[#fdfdf7] outline-none rounded-md px-3' placeholder='Your LastName' />
        </div>
        <div className='w-[100%] h-[15%]  flex justify-around items-start flex-col'>
          <label htmlFor="" className='text-[15px] text-white'>Email</label>
          <input type="text" className='w-[100%] h-[54%] bg-[#fdfdf7] outline-none rounded-md px-3' placeholder='Your Email' />
        </div>
        <div className='w-[100%] h-[15%]  flex justify-around items-start flex-col'>
          <label htmlFor="" className='text-[15px] text-white'>Phone Number</label>
          <input type="text" className='w-[100%] h-[54%] bg-[#fdfdf7] outline-none rounded-md px-3' placeholder='Enter Phone number' />
        </div>
        <div className='w-[100%] h-[15%] flex justify-around items-start flex-col smallPhone:h-[16%%]'>
          <label htmlFor="" className='text-[15px] font-medium text-white'>Password</label>
          <div className='w-[100%] h-[54%] bg-[#FDFDF7] rounded-md flex  px-4 justify-center items-center'>
          <input type={`${Show ? "text" : "password"}`} className='w-[100%] h-[100%] rounded-lg outline-none  bg-[#FDFDF7] ' placeholder='Password' />
         
          {
            Show ?    <FaRegEye onClick={HandleShow} className='cursor-pointer'/> : <FaRegEyeSlash onClick={HandleShow} className='cursor-pointer'/>
          }
          
          </div>

        </div>
        <div className='w-[100%] h-[15%] flex justify-around items-start flex-col smallPhone:h-[16%]'>
          <label htmlFor="" className='text-[15px] font-medium text-white'>Confirm</label>
          <div className='w-[100%] h-[54%] bg-[#FDFDF7] rounded-md flex  px-4 justify-center items-center'>
          <input type={`${confirmShow ? "text" : "password"}`} className='w-[100%] h-[100%] rounded-lg outline-none  bg-[#FDFDF7] ' placeholder='Confirm password' />
         
          {
            confirmShow ?    <FaRegEye onClick={HandleConfirm} className='cursor-pointer'/> : <FaRegEyeSlash onClick={HandleConfirm} className='cursor-pointer'/>
          }
          
          </div>

        </div>
        <div className='w-[100%] h-[20%] flex justify-around items-center flex-col'>
          <button className='w-[100%] h-[40%] bg-[#4D91FF] rounded-md font-medium text-lg text-white'>Create Account</button>
          <p className='text-white font-medium smallPhone:text-sm'>Already have an account? <span className=' cursor-pointer text-yellow-500 font-semibold'>Login</span> </p>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SignUp