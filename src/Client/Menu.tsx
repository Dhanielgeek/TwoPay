import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/bank-icon-9.png';
import { MdOutlineDashboard } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import { PiSwap } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiHandDepositFill } from "react-icons/pi";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

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

  return (
    <div className="w-[100%] h-[100%] bg-[#2E54E3] rounded-sm flex flex-col justify-around phone:hidden">
      <div className="w-[100%] h-[20%] flex flex-col justify-center items-center">
        <img src={Logo} alt="TwoPay Logo" className='w-[100%] h-[60%] object-contain' />
        <h2 className='text-lg font-bold text-white'>TwoPay</h2>
      </div>
      <div className='w-[100%] h-[75%]'>
        <div className='w-[100%] h-[85%] items-center flex-col flex justify-around'>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`w-[90%] h-[10%] flex justify-center items-center cursor-pointer transition-all transform duration-300 rounded-md font-semibold hover:bg-[#03045E] ${
                selectedMenu === index ? 'bg-[#03045E] text-white' : 'text-[#cee4f3]'
              }`}
              onClick={() => handleMenuClick(item.path, index)}
            >
              <div className='w-[70%] gap-3 flex justify-start items-center'>
                <item.icon className='text-xl' />
                <div>{item.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-[100%] h-[15%]'></div>
      </div>
    </div>
  );
};

export default Menu;
