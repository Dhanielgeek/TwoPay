import Logo from '../assets/bank-icon-9.png'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [Show, setShow] = useState<boolean>(false)


const HandleShow = ()=>{
  setShow(!Show)
}

const Navigate = useNavigate()

  return (
    <div className="w-[100%] h-[100vh] bg-[#ebebeb] flex justify-center items-center">
      <div className="w-[30%] h-[90%] bg-[#2E54E3] rounded-md flex flex-col justify-around items-center phone:w-[90%] ">
      <div className="w-[100%] h-[15%] px-7">
        <div className="w-[17%] h-[100%] flex justify-center items-center flex-col ">
          <img src={Logo} alt="" className='w-[100%] h-[70%] object-contain' />
          <p className=' text-sm text-white font-semibold'>TwoPay</p>
        </div>
      </div>
      <div className='w-[100%] h-[15%] flex justify-center items-start flex-col px-7'>
        <h2 className='text-2xl text-white font-medium smallPhone:text-[lg]'>Welcome Back💪</h2>
        <p className='text-sm text-white'>Login to continue</p>
      </div>
      <div className='w-[100%] h-[70%]'>
        <form action="" className='w-[100%] h-[100%]  flex flex-col justify-around items-center'>
        <div className='w-[90%] h-[24%] px-2 flex justify-around items-start flex-col smallPhone:h-[28%]'>
          <label htmlFor="" className='text-[17px] font-medium text-white smallPhone:text-[12px]'>Email</label>
          <input type="email" className='w-[100%] h-[50%] rounded-lg px-2 outline-none  bg-[#FDFDF7] ' placeholder='Enter your email' />
        </div>
        <div className='w-[90%] h-[24%] px-2 flex justify-around items-start flex-col smallPhone:h-[28%]'>
          <label htmlFor="" className='text-[17px] font-medium text-white smallPhone:text-[12px]'>Password</label>
          <div className='w-[100%] h-[49%] bg-[#FDFDF7] rounded-md flex  px-4 justify-center items-center'>
          <input type={`${Show ? "text" : "password"}`} className='w-[100%] h-[100%] rounded-lg outline-none  bg-[#FDFDF7] ' placeholder='Password' />
         
          {
            Show ?    <FaRegEye onClick={HandleShow} className='cursor-pointer'/> : <FaRegEyeSlash onClick={HandleShow} className='cursor-pointer'/>
          }
          
          </div>

        </div>
        <div className='w-[100%] h-[9%] flex justify-end items-center px-6 '>
          <p className='text-yellow-400 font-bold cursor-pointer smallPhone:text-[12px]' onClick={()=>Navigate('/forget')}>Forget Password ?</p>
        </div>
        <div className='w-[100%] h-[30%] flex justify-center gap-1 flex-col items-center'>
        <button className='w-[90%] h-[30%] bg-[#4D91FF] rounded-md  text-base font-semibold text-white smallPhone:h-[42%]'>Login</button>
        <div className='w-[90%] h-[40%]  flex justify-center items-center '>
          <p className='text-white font-medium smallPhone:text-sm'>Don't have an account ? <span className='text-yellow-400 font-semibold cursor-pointer' onClick={()=>Navigate('/signup')}>Sign Up</span> </p>
        </div>
      </div>
        </form>
      </div>

      </div>
    </div>
  )
}

export default Login