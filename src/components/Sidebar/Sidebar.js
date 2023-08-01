import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../Assets/Images/Avatar.png';
import setting from '../../Assets/Images/setting.png';
import search from '../../Assets/svg/search.svg';
import dashboard from '../../Assets/svg/dashboard.svg';
import bulb from '../../Assets/svg/bulb.svg';
import square from '../../Assets/svg/square.svg';
import square2 from '../../Assets/svg/square2.svg';
import triangle from '../../Assets/svg/triangle.svg';
import octagon from '../../Assets/svg/octagon.svg';
import close from '../../Assets/Images/close.png';

const Sidebar = ({ active, setActive }) => {
  const navigate = useNavigate();
    console.log('active', active)
    return (
        <>
            <div className={active ? 'bg-[#1A1D21] rounded-[20px] w-[300px] h-[calc(100vh-24px)] overflow-y-auto absolute left-0 z-10' : 'bg-[#1A1D21CC] rounded-[20px] lg:w-[312px] w-0 h-[calc(100vh-24px)] overflow-y-auto'}>
                {/*<div className='bg-[#1A1D21CC] rounded-[20px] max-w-[312px] h-[calc(100vh-24px)] overflow-y-auto'>*/}
                <div className='p-2 flex items-start gap-3'>
                    <div className='flex justify-between items-center p-[16px] bg-grad100 rounded-[16px] border-[1px] border-[#FFFFFF14] w-full'>
                        <div className='flex gap-1'>
                            <img src={Avatar} alt='Avatar' />
                            <div>
                                <h1 className='font-semibold text-[16px] text-white'>Tyler Durden</h1>
                                <p className='text-[#B6F09C] text-[12px] font-medium mt-1'>Premium Member</p>
                            </div>
                        </div>
                        <img src={setting} alt='setting' />
                    </div>
                    <button className='mt-2 lg:hidden' onClick={() => setActive(false)}>
                        <img src={close} alt='close' className='w-[16px]' />
                    </button>
                </div>
                <div className='p-2 border-b-[#131619] border-b-[1px] pb-[38px]'>
                    <div className='mt-[68px] px-[16px]'>
                        <label className='text-[#686B6E] text-[12px] font-semibold'>GENERAL</label>
                        <div className='mt-[22px] flex justify-between'>
                            <div className='relative'>
                                <img src={search} alt='search' className='absolute top-[3px] left-[-12px]' />
                                <input type='text' placeholder='Search' className='w-full pl-[34px] text-[14px] border-0 outline-none bg-transparent placeholder:opacity-100 text-[#fff] placeholder:text-[#fff]' />
                            </div>
                            <button className='bg-grad100 border-[1px] border-[#FFFFFF14] text-[#9B9C9E] font-semibold rounded w-[38px] h-[26px] text-[12px]'>⌘ S</button>
                        </div>
                    </div>
                </div>
                <div className='p-2 mt-[30px]'>
                    <div>
                        <label className='text-[#686B6E] text-[12px] font-semibold px-[16px]'>ACHIEVEMENT SPACES</label>
                        <div className='flex cursor-pointer items-center gap-[16px] px-[16px] mt-[28px]'>
                            <img src={dashboard} alt='dashboard' className='shadow-[0px_10px_15px_-3px_#B6F09C29]' />
                            <p className='text-[#E8E9E9] text-[14px] font-semibold'>Analytics & Performance</p>
                        </div>
                        <div className='flex cursor-pointer items-center gap-[16px] px-[16px] mt-[29px]' onClick={() => navigate('/test-lab')}>
                            <img src={bulb} alt='bulb' className='shadow-[0px_10px_15px_-3px_#B6F09C29]' />
                            <p className='text-[#E8E9E9] text-[14px] font-semibold'>Test Lab</p>
                        </div>
                    </div>
                </div>
                <div className='p-2 my-[30px]'>
                    <div>
                        <label className='text-[#686B6E] text-[12px] font-semibold px-[16px]'>LEARNING SPACES</label>
                        <div className='flex cursor-pointer items-center gap-[16px] p-[13.5px_16px] mt-[28px] bg-grad100 rounded-lg border-[1px] border-[#FFFFFF14]'>
                            <img src={square} alt='square' className='shadow-[0px_10px_15px_-3px_#B6F09C29]' />
                            <p className='text-[#E8E9E9] text-[14px] font-semibold'>Lesson App</p>
                        </div>
                        <div 
                          className='flex cursor-pointer items-center gap-[16px] px-[16px] mt-[24px]'
                          onClick={() => navigate('/gpt-hub')}
                        >
                            <img src={triangle} alt='triangle' className='shadow-[0px_10px_15px_-3px_#B6F09C29]' />
                            <p className='text-[#E8E9E9] text-[14px] font-semibold'>GPT-Hub</p>
                        </div>
                        <div 
                          className='flex cursor-pointer items-center gap-[16px] px-[16px] mt-[29px]'
                          onClick={() => navigate("/personal-ai")}
                        >
                            <img src={square2} alt='square' className='shadow-[0px_10px_15px_-3px_#B6F09C29]' />
                            <p className='text-[#E8E9E9] text-[14px] font-semibold'>Personal AI-GPT</p>
                        </div>
                        <div className='flex cursor-pointer items-center gap-[16px] px-[16px] mt-[29px]'>
                            <img src={octagon} alt='octagon' className='shadow-[0px_10px_15px_-3px_#B6F09C29]' />
                            <p className='text-[#E8E9E9] text-[14px] font-semibold'>Exam Booking App</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar