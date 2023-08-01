import React from "react";
// import { useNavigate } from "react-router-dom";
import { ShareIcon, BellIcon, ClockIcon, MenuIcon } from "../Icons";

const HeaderMenu = (props) => {
  // const navigate = useNavigate();
  const { menuList, handleSetActive, title, type } = props;
  
  return(
    <>
      <div className='bg-[#1A1D21CC]  rounded-[20px] md:sticky top-0 z-[1]'>
        <div className='sm:flex justify-between items-center sm:p-[24px] p-[12px_14px_24px_14px]'>
          <div className='flex items-start gap-3'>
            <button className='lg:hidden mt-[8px]' onClick={handleSetActive}>
              <img src={MenuIcon} alt='menu' className='w-[16px]' />
            </button>
            <div>
              <h1 className='text-[20px] font-bold mb-1 text-white md:pl-[0px] lg:pl-[0px]'>{title} : <span className='text-[#4AC97E]'>{type}</span></h1>
            </div>
          </div>
          <div className='flex md:gap-[44px] gap-[20px] sm:mt-0 mt-[26px]'>
            <div className='flex gap-[10px]'>
              <div className='relative'>
                <img src={BellIcon} alt='bell' />
                <div className='bg-[#FD0606] w-[14px] h-[14px] border-[4px] border-[#131619] rounded-full absolute right-[-8px] top-[-4px]' />
              </div>
              <p className='text-[#686B6E] text-[14px] font-semibold'>Alerts</p>
            </div>
            <div className='flex gap-[10px]'>
              <div className='relative'>
                <img src={ClockIcon} alt='clock' />
                <div className='bg-[#4AC97E] w-[14px] h-[14px] border-[4px] border-[#131619] rounded-full absolute right-[-8px] top-[-4px]' />
              </div>
              <p className='text-[#686B6E] text-[14px] font-semibold'>Schedule</p>
            </div>
            <div className='flex gap-[10px]'>
              <img src={ShareIcon} alt='share' />
              <p className='text-[#686B6E] text-[14px] font-semibold'>Share</p>
            </div>
          </div>
        </div>
        <hr className='border-[#1A1D21]' />
        <div className='flex flex-wrap sm:p-[0px_0px_24px_24px] p-[0px_14px_12px_14px] items-start sm:ml-0'>
          {menuList.map((data, key) =>
            <div key={`btn-${key}`}>
              <button key={key} className='border-[1px] border-none rounded-xl xl:p-[17px_14.48px] p-[17px_14.48px] w-[146px] h-[52px] flex gap-3 justify-between items-center text-start mx-auto sm:mt-0 mt-2 mr-2 sm:mr-[2rem] 2xl:text-[16px] text-[13px] leading-[24px]' style={{ backgroundImage: data.bgColor, color: data.color }}> 
                <span className='flex flex-row'>{data?.leftIcon && <img className='w-[22.5px] h-[22.5px]' src={data.leftIcon} alt='arrow' /> } <span className="ml-[14px]">{data.btn}</span> </span>
                <img src={data.img} alt='arrow' />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default HeaderMenu;