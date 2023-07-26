'use client';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import bell from '../../Assets/svg/bell.svg';
import clock from '../../Assets/svg/clock.svg';
import share from '../../Assets/svg/share.svg';
import oct from '../../Assets/svg/artificium.svg';
import send from '../../Assets/svg/send.svg';
import mic from '../../Assets/svg/mic.svg';
import menu from '../../Assets/Images/menu.png';
import Sidebar from '../Sidebar/Sidebar';
import Questions from './Questions';

const TestLabExample = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleSubmitAnswer = () => {
    navigate('/questions-result')
  }

  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto '>
        <div className='bg-[#1A1D21CC] sm:p-[24px] p-[12px_14px] rounded-[20px] md:sticky top-0'>
          <div className='sm:flex justify-between items-center pb-[24px]'>
            <div className='flex items-start gap-3'>
              <button className='lg:hidden mt-[8px]' onClick={() => setActive(!active)}>
                <img src={menu} alt='menu' className='w-[16px]' />
              </button>
              <div>
                <h1 className='text-[20px] font-bold mb-1 text-white md:pl-[21px] lg:pl-[21px]'>Welcome Back, Tyler!</h1>
              </div>
            </div>
            <div className='flex md:gap-[44px] gap-[20px] sm:mt-0 mt-[26px]'>
              <div className='flex gap-[10px]'>
                <div className='relative'>
                  <img src={bell} alt='bell' />
                  <div className='bg-[#FD0606] w-[14px] h-[14px] border-[4px] border-[#131619] rounded-full absolute right-[-8px] top-[-4px]' />
                </div>
                <p className='text-[#686B6E] text-[14px] font-semibold'>Alerts</p>
              </div>
              <div className='flex gap-[10px]'>
                <div className='relative'>
                  <img src={clock} alt='clock' />
                  <div className='bg-[#4AC97E] w-[14px] h-[14px] border-[4px] border-[#131619] rounded-full absolute right-[-8px] top-[-4px]' />
                </div>
                <p className='text-[#686B6E] text-[14px] font-semibold'>Schedule</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src={share} alt='share' />
                <p className='text-[#686B6E] text-[14px] font-semibold'>Share</p>
              </div>
            </div>
          </div>
          <div className='flex items-start pt-[24px] sm:ml-0 ml-[-12px]'>
            <img src={oct} alt='oct' />
            <p className='text-[#B6F09C] text-[14px] contents'><span className='sm:pr-[20px] pr-[4px] md:pl-[12px] lg:pl-[12px] block text-[#E8E9E9]'>:</span>TestLab / SIx-Sigma Practice Test</p>
          </div>
        </div>
        <div className='sm:mt-[35px] mt-[26px] xl:px-[48px]'>
          <div className='sm:mt-[20px] mt-[26px] xl:px-[74px]'>
            <h1 className='sm:text-[28px] text-[28px] mb-[12px] font-bold text-white'>Test Lab</h1>
            <div className="sm:mt-[35px] mt-[35px] w-full bg-[#6F736D] h-2 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
              <div className={`bg-[#B6F09C] h-2 rounded-tl-lg rounded-tr-lg w-[85%] `}></div>
            </div>
          </div>
          <div className='sm:mt-[40px] mt-[40px] xl:px-[74px]'>
            <h1 className='sm:text-[28px] text-[28px] mb-[12px] font-bold text-white'>Six Sigma Methodology</h1>
            <p className='md:w-[80%] lg:w-[80%] text-[#9B9C9E] sm:text-[16px] text-[16px] font-[500] tracking-[.15px] leading-[24px]'>20 Questions</p>
          </div>
        </div>

        <div className='sm:mt-[35px] mt-[26px] xl:px-[48px]'>
          <div className='sm:mt-[20px] mt-[26px] xl:px-[74px]'>
            <Questions />
          </div>
        </div>

        <div className='sm:mt-[35px] mt-[26px] md:mr-[100px] xl:px-[48px]'>
          <button className='mt-[31px] bg-[#B6F09C] h-12 py-2 px-6 max-w-[182px] ml-auto w-full rounded-lg text-[#0C1132] font-semibold flex justify-between items-center' onClick={handleSubmitAnswer}>Submit Answers </button>
        </div>

        <div className='xl:px-[48px] md:sticky bottom-0'>
          <div>
            <div className='bg-[#131619] rounded-[20px] py-[10px] relative mt-[49px]'>
              <img src={mic} alt='mic' className='absolute top-[10px] sm:left-[24px] left-[6px] ' />
              <input placeholder='What can i help you with today?' className='text-[#9B9C9E] bg-transparent w-full outline-none sm:p-[12px_96px] p-[12px_58px]' />
              <img src={send} alt='send' className='absolute top-[10px] sm:right-[24px] right-[6px] ' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default TestLabExample