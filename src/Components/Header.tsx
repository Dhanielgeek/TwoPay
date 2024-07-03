import logo from '../assets/bank-icon-9.png'
import { MdOutlineSegment,MdClear  } from "react-icons/md"
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {

const [Toggle, setToggle] = useState<boolean>(false)

const HandleToogle = ()=>{
    setToggle(!Toggle)
}


  return (
    <div className="w-full h-[10vh] bg-[#031335] shadow-md flex justify-around items-center max-md:justify-between">
        <div className="w-[10%] h-full flex justify-center gap-2 items-center max-md:w-[40%]">
        <img src={logo} alt="twopaylogo" className="w-[50%] h-[80%] object-contain" />
        <p className=' font-semibold text-white text-lg'>TwoPay</p>
        </div>
        <div className="w-[40%] h-full text-white font-medium flex justify-around items-center max-md:hidden">
            <nav className='cursor-pointer'>How it Works</nav>
            <nav className='cursor-pointer'>About</nav>
            <nav className='cursor-pointer'>Services</nav>
            <nav className='cursor-pointer'>Contact</nav>
        </div>
        <div className="w-[10%] h-full flex justify-center items-center max-md:hidden">
            <button className=' py-2 px-8 rounded bg-blue-500 text-white font-semibold hover:bg-[#031335] transition-all duration-300'>Sign in</button>
        </div>
        <div className='w-[20%] h-full hidden justify-center relative items-center max-md:flex'>
        <motion.div
          whileTap={{ scale: 0.9 }} 
          onClick={HandleToogle}
        >
            {
                Toggle ? <MdClear className='text-4xl text-white' onClick={HandleToogle}/> : <MdOutlineSegment className='text-4xl text-white' onClick={HandleToogle}/>
            }

        </motion.div>
        <AnimatePresence>
       
        {
            Toggle ? <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
             className='HeaderMenu w-[23.3rem] h-[34rem] bg-[#031335] flex flex-col justify-around items-center absolute top-16 right-[3px]'>
                 <div className="w-[100%]  h-[80%] text-white font-medium flex flex-col justify-around items-start px-32">
            <nav className='cursor-pointer'>How it Works</nav>
            <nav className='cursor-pointer'>About</nav>
            <nav className='cursor-pointer'>Services</nav>
            <nav className='cursor-pointer'>Contact</nav>
        </div>
        <div className="w-[90%] h-[14%] flex justify-start px-20 items-center">
            <button className=' py-4 px-24 rounded bg-blue-500 text-white font-semibold hover:bg-[#031335] transition-all duration-300'>Sign in</button>
        </div>
             </motion.div> : null
        }
        
        </AnimatePresence>
     
        </div>
    </div>
  )
}

export default Header