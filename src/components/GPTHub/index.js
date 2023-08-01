import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import { GPTHubButtonMenu } from './data';
import { 
  BellIcon, ClockIcon, ShareIcon, MenuIcon, MicIcon, SendIcon
} from '../Icons';

const GPTHub = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  // const handleOpenModel = (item) => {
    
  // }

  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto '>
        <div className='bg-[#1A1D21CC]  rounded-[20px] md:sticky top-0 z-[1]'>
          <div className='sm:flex justify-between items-center sm:p-[24px] p-[12px_14px_24px_14px]'>
            <div className='flex items-start gap-3'>
              <button className='lg:hidden mt-[8px]' onClick={() => setActive(!active)}>
                <img src={MenuIcon} alt='menu' className='w-[16px]' />
              </button>
              <div>
                <h1 className='text-[20px] font-bold mb-1 text-white md:pl-[0px] lg:pl-[0px]'>Edu-Tech Platform <span className='text-[#4AC97E]'></span></h1>
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
          <div className='flex flex-wrap sm:p-[0px_0px_15px_24px] p-[0px_14px_12px_14px] items-start sm:ml-0'>

          </div>
        </div>
        {/* Body Content Start */}
        <div className='m-[20px_0px] sm:m-[25px_8px_10px] flex flex-col text-center'>
          <p className='sm:text-[28px] text-[28px] font-[700] text-white mb-4'>GPT- Hub</p>
          <p className='md:px-[10rem] lg:px-[10rem] text-[#9B9C9E] sm:text-[16px] text-[16px] font-[500] tracking-[.15px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor.</p>
        </div>

        <div className="flex flex-wrap justify-center lg:w-[850px] md:w-[850px] m-auto lg:py-[3rem] md:py-[3rem] py-[1rem]">  
          {GPTHubButtonMenu.map((item, index) => (
            <div 
              key={`action-${index}`}
              onClick={() => navigate(item.url)}
              className={`${item.active ? '' : ''} lg:w-[183px] md:w-[183px] w-[260px] h-[171px] cursor-pointer rounded-[12px] border-[1px 0px 0px 0px] bg-gradient-to-[var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))] ml-[12px] mr-[12px] lg:mt-4 md:mt-4 mt-4`}
              style={
                item.active ?
                { background: item.bgColor } :
                { background: item.bgColor }
              }
            >
              <div className='flex items-center justify-center pt-[20px]'><img src={item.img} alt='arrow' className='w-[43px] h-[35px]' /></div>
              <div className={`flex flex-row justify-center pt-[8px] font-[500] text-[18px] ${item.active ? 'text-[#1B1E22]' : 'text-white'}  text-center`}>
                <span>{item.name}</span>
                {item?.rightArrow && (
                  <img src={item.rightArrow} alt='' className='pl-[10px]' />
                )}
              </div>
              <div className={`p-[8px] text-[12px] ${item.active ? 'text-[#1B1E22]' : 'text-[#A8A8A8]'} text-center whitespace-normal`}>{item.desc}</div> 
            </div> 
          ))}
        </div>

        {/* Body Content End */}

        <div className='xl:px-[48px] md:sticky bottom-0'>
          <div>
            <div className='bg-[#131619] rounded-[20px] py-[10px] relative mt-[49px]'>
              <img src={MicIcon} alt='mic' className='absolute top-[10px] sm:left-[24px] left-[6px] ' />
              <input placeholder='You can ask me anything! I am here to help.' className='text-[#9B9C9E] bg-transparent w-full outline-none sm:p-[12px_96px] p-[12px_58px]' />
              <img src={SendIcon} alt='send' className='absolute top-[10px] sm:right-[24px] right-[6px] ' />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default GPTHub;