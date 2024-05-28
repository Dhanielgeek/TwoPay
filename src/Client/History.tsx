import './style.css';

const History = () => {
  return (
    <div className="w-[100%] h-[88%] overflow-y-scroll scrollbar-thin flex flex-col justify-around items-center p-4 phone:scrollbar-none">
      <div className="w-[100%] h-[20%] flex justify-center items-center">
        <h3 className="text-2xl font-semibold">Transaction History</h3>
      </div>
      <div className="w-[90%] h-[70%] rounded-lg overflow-y-scroll scrollbar-thin phone:w-[100%] phone:scrollbar-none">
      <div className='w-[100%] h-[10%] bg-gray-200 flex justify-around items-center'>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[16px] font-semibold phone:text-[12px]'>Date</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[16px] font-semibold phone:text-[12px]'>Amount</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[16px] font-semibold phone:text-[12px]'>Type</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[16px] font-semibold phone:text-[12px]'>Description</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[16px] font-semibold phone:text-[12px]'>Status</p>
        </div>

      </div>
      <div className='w-[100%] h-[15%] border flex justify-around items-center'>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>26/05/2021</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>₦ 12,00.00</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>Bills</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>Mobile data</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-semibold text-green-500'>Successful</p>
          </div>
      </div>
      <div className='w-[100%] h-[15%] border flex justify-around items-center'>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>26/05/2021</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>₦ 30,00.00</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>Withdraw</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>For Food</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-semibold text-red-500'>Failed</p>
          </div>
      </div>
      <div className='w-[100%] h-[15%] border flex justify-around items-center'>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>26/05/2021</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>₦ 30,00.00</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>Deposit</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-medium phone:text-[12px] phone:text-center smallPhone:text-[12px]'>Transport</p>
        </div>
        <div className='w-[10%] h-[100%] flex justify-center items-center'>
          <p className='text-[14px] font-semibold text-yellow-500'>Pending</p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default History;
