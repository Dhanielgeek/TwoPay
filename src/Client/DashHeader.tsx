import React, { useState, useRef } from "react";
import { Modal } from "antd";
import { FaRegBell, FaCaretDown } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import { PiGearSix } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Mobile from "./Mobile";

const DashHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleUserIconClick = () => {
    setIsModalVisible(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="w-[100%] h-[15%] bg-white border-gray-100 border-b-2 justify-between flex phone:h-[10%]">
        <Mobile/>
      <div className="w-[30%] h-[100%] flex justify-center items-center phone:hidden">
        <h2 className="text-xl">
          Welcome <span className="font-semibold text-2xl">Daniel 👋</span>
        </h2>
      </div>
      <div className="w-[37%] h-[100%] flex justify-center items-center phone:w-[36%] phone:justify-around">
        <div className="w-[60%] h-[100%] flex justify-center gap-6 items-center phone:w-[90%]">
          <div className="w-[40px] h-[40px] bg-slate-200 rounded-full flex justify-center items-center phone:hidden">
            <FaRegBell className="text-2xl" />
          </div>
          <div className="w-[60%] h-[50%] flex justify-around items-center phone:w-[80%] ">
            <div
              className="w-[40px] h-[40px] border rounded-full flex justify-center items-center cursor-pointer phone:w-[50px] phone:h-[50px]"
              onClick={handleUserIconClick}
            >
              {userImage ? (
                <img
                  src={userImage}
                  alt="User"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <FaCircleUser className="text-5xl" />
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
            <div className=" font-semibold phone:hidden smallPhone:hidden">Daniel Ben</div>
            <div className="w-[10%] h-[40%] flex relative justify-center items-center phone:w-[90%]">
              <FaCaretDown
                className="text-2xl cursor-pointer"
                onClick={handleShowMenu}
              />
              <AnimatePresence>
                {showMenu && (
                  <motion.div
                    className="w-[15rem] h-[13rem] flex justify-around items-start px-4 flex-col bg-white shadow-md absolute top-12 right-[-7px]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-[90%] h-[20%] gap-3 rounded-md transition-all transform duration-300 cursor-pointer px-5 flex justify-start items-center hover:bg-[#CCCCCC]">
                      <AiOutlineUser className="text-2xl" />
                      <p className="text-xl">My Profile</p>
                    </div>
                    <div className="w-[90%] h-[20%] justify-start px-5 gap-3 rounded-md transition-all cursor-pointer transform duration-300 hover:bg-[#CCCCCC] flex items-center">
                      <PiGearSix className="text-2xl" />
                      <p className="text-lg">Settings</p>
                    </div>
                    <div className="w-[90%] h-[20%] justify-start px-5 gap-3 rounded-md transition-all cursor-pointer transform duration-300 hover:bg-[#CCCCCC] flex items-center">
                      <PiSignOut className="text-2xl" />
                      <p className="text-xl">Log Out</p>
                    </div>
                    <div className="w-[90%] h-[20%] justify-start px-5 gap-3 rounded-md transition-all cursor-pointer transform duration-300  hover:bg-[#CCCCCC] hidden items-center phone:flex">
                      <FaRegBell className="text-2xl" />
                      <p className="text-xl">Notifications</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Add Image"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Do you want to add an image?</p>
      </Modal>
    </div>
  );
};

export default DashHeader;
