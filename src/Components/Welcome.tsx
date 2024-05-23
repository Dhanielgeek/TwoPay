import Logo from '../assets/bank-icon-9.png'
import Wel from '../assets/app-monetization-concept-illustration_114360-7584-removebg-preview.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Welcome = () => {


  const Navigate = useNavigate()


  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
    close: {
      opacity: 0,
      y: "100px",
    },
  };



  return (
    <div
     className="w-[100%] h-[100vh] bg-[#ebebeb] flex flex-col justify-around items-center">
      <motion.div 
      variants={motionVariant} 
      initial="close" 
      animate="open"   
       className='w-[30%] h-[90%] bg-[#2E54E3] flex-col flex justify-around items-center rounded-md phone:w-[90%] tab:w-[70%]'>
      <div className="w-[100%] h-[15%] px-7">
        <div className="w-[17%] h-[100%] flex justify-center items-center flex-col ">
          <img src={Logo} alt="" className='w-[100%] h-[70%] object-contain' />
          <p className=' text-sm text-white font-semibold'>TwoPay</p>
        </div>
      </div>
      <div className='w-[100%] h-[45%]'>
        <img src={Wel} alt="" className='w-[100%] h-[100%] object-cover' />
      </div>
      <div className='w-[100%] h-[15%] font-medium text-white flex-col flex justify-center gap-2 items-start px-7'>
        <h3 className='text-2xl'>Hello Welcome ! 👋</h3>
        <p className='text-sm smallPhone:text-[10px]'>Welcome to TwoPay, The BEST Banking system</p>
      </div>
      <div className='w-[100%] h-[18%] flex flex-col justify-around items-center'>
        <button className='w-[90%] h-[39%] bg-[#4D91FF] rounded-md  text-base font-semibold text-white' onClick={()=>Navigate('/login')}>Login</button>
        <button className='w-[90%] h-[39%] bg-[#4D91FF] rounded-md  text-base font-semibold text-white' onClick={()=>Navigate('/signup')}>Sign Up</button>
      </div>
      </motion.div>
    </div>
  )
}

export default Welcome