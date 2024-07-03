import { IoMdArrowDropright } from "react-icons/io";
import { RiVerifiedBadgeLine } from "react-icons/ri";


const Hero = () => {
  return (
    <div className="w-full h-[43rem] z-30 bg-[#031335] flex justify-around items-center">
    <div className="w-[46%] h-[80%] flex flex-col justify-around items-center max-md:w-[100%]">
        <div className="w-full h-[100%] flex justify-center max-md:gap-2 flex-col items-start px-14 max-md:px-4">
            <div className="w-[60%] h-[8%] text-white font-semibold rounded-full bg-blue-300 flex justify-center gap-4 items-center max-md:w-[90%] max-md:justify-start px-5">
                <RiVerifiedBadgeLine  className="text-2xl"/>
                <p className="">Your Most Trusted Banking App</p>
            </div>
            <div className="w-[90%] h-[35%] flex justify-start items-center max-md:h-[30%]">
                <p className="text-[2.4rem] font-bold text-white max-md:text-4xl">Save Smart. Invest Wisely.Track Easily, <span className="text-blue-500">Spend Easily</span></p>
            </div>
            <div className="w-full h-[14%] flex justify-start items-center">
         <p className=" text-gray-300 text-xl max-md:text-sm">Empowering Your Financial Journey with Smart Tools and Insights</p>
        </div>
        <div className="w-full h-[10%]  flex justify-start items-center">
            <button className="py-2 px-7 rounded text-white font-semibold gap-2 bg-blue-500 flex justify-center items-center">Open an Account<IoMdArrowDropright/> </button>
        </div>
        </div>
    </div>
    <div className=" HeroImage w-[46%] h-[70%] flex justify-center items-center max-md:hidden"></div>
    </div>
  )
}

export default Hero