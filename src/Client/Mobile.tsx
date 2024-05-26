import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import { PiSwap } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiHandDepositFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../assets/bank-icon-9.png';

const Mobile: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  type MenuItem = {
    name: string;
    icon: React.ElementType;
    path: string;
  };

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: MdOutlineDashboard, path: '/main/over' },
    { name: 'Deposit', icon: PiHandDepositFill, path: '/main/deposit' },
    { name: 'Withdraw', icon: BiMoneyWithdraw, path: '/main/withdraw' },
    { name: 'Transfer', icon: PiSwap, path: '/main/transfer' },
    { name: 'Pay-Bills', icon: GiPayMoney, path: '/main/pay-bills' },
    { name: 'History', icon: MdHistory, path: '/main/history' },
    { name: 'Profile', icon: RiAccountPinCircleFill, path: '/main/acct' }
  ];

  const handleMenuClick = (path: string, index: number) => {
    setSelectedMenu(index);
    navigate(path);
  };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="w-[20%] h-[100%] hidden  justify-center items-center relative phone:flex smallPhone:flex ">
      {toggleMenu ? (
        <MdOutlineClear className="text-3xl" onClick={handleToggle} />
      ) : (
        <IoIosMenu className="text-3xl" onClick={handleToggle} />
      )}
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            className="w-[18rem] h-[37rem] absolute top-[4.4rem] right-[-203px] smallPhone:h-[26rem] smallPhone:top-[4.2rem]"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-[100%] h-[100%] bg-[#2E54E3] rounded-sm flex flex-col justify-around">
              <div className="w-[100%] h-[20%] flex flex-col justify-center items-start px-6">
                <img src={Logo} alt="TwoPay Logo" className='w-[30%] h-[60%] object-contain' />
                <h2 className='text-lg font-bold text-white'>TwoPay</h2>
              </div>
              <div className='w-[100%] h-[80%] flex flex-col items-start justify-around'>
                <div className='w-[100%] h-[85%] items-start flex-col flex justify-around px-1'>
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className={`w-[100%] h-[15%] flex justify-center items-center cursor-pointer transition-all transform duration-300 rounded-md font-semibold hover:bg-[#03045E] ${
                        selectedMenu === index ? 'bg-[#03045E] text-white' : 'text-[#cee4f3]'
                      }`}
                      onClick={() => handleMenuClick(item.path, index)}
                    >
                      <div className='w-[70%] gap-3 flex justify-start items-center'>
                        <item.icon className='text-xl' />
                        <div className="text-lg">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
