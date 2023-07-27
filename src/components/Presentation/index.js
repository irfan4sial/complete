'use client';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import bell from '../../Assets/svg/bell.svg';
import clock from '../../Assets/svg/clock.svg';
import share from '../../Assets/svg/share.svg';
import menu from '../../Assets/Images/menu.png';
import Sidebar from '../Sidebar/Sidebar';
import Category from './Category';
import UploadModal from './UploadModal';
import { BtnMenu, ImagesData, DocumentData, IdeasData } from './data';
import ManageViewModal from './ManageViewModal';

const Presentation = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openManageModal, setOpenManageModal] = useState(false);
  

  const handleSubmitAnswer = () => {
    navigate('/questions-result')
  }

  const handleOpenModel = (item) => {
    console.log("Modal =>", item)
    if(item === 'Upload') {
      setOpen(true);
    }else if(item === 'Share') {
      setOpenManageModal(true)
    }
  }

  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto '>
        <div className='bg-[#1A1D21CC]  rounded-[20px] md:sticky top-0 z-[1]'>
          <div className='sm:flex justify-between items-center sm:p-[24px] p-[12px_14px_24px_14px]'>
            <div className='flex items-start gap-3'>
              <button className='lg:hidden mt-[8px]' onClick={() => setActive(!active)}>
                <img src={menu} alt='menu' className='w-[16px]' />
              </button>
              <div>
                <h1 className='text-[20px] font-bold mb-1 text-white md:pl-[0px] lg:pl-[0px]'>GPT-Hub : <span className='text-[#4AC97E]'>Presentation</span></h1>
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
          <hr className='border-[#1A1D21]' />
          <div className='flex flex-wrap sm:p-[0px_24px_24px] p-[0px_14px_12px_14px] items-start sm:ml-0'>
            {BtnMenu.map((data, key) =>
              <div key={`btn-${key}`}>
                <button key={key} className='border-[1px] border-[#FFFFFF14] w-auto rounded-xl xl:p-[0.67rem] p-[10px] flex gap-3 justify-between items-center text-start mx-auto sm:mt-0 mt-2 mr-2 sm:mr-[33.6px] 2xl:text-[16px] text-[13px]' style={{ backgroundImage: data.bgColor, color: data.color }}><img className='w-[28.5px] h-[28.5px]' src={data.leftIcon} alt='arrow' /> {data.btn} <img src={data.img} alt='arrow' /></button>
              </div>
            )}
          </div>
        </div>


        <div className='m-[10px_0px] sm:m-[10px_8px] flex flex-wrap'>
          <Category data={ImagesData} type="Images" handleOpenModel={handleOpenModel} />
          <Category data={DocumentData} type="Documents" handleOpenModel={handleOpenModel} />
          <Category data={IdeasData} type="Ideas" handleOpenModel={handleOpenModel} />

        </div>
      </div>
      {open && <UploadModal isOpen={open} setIsOpen={setOpen}/>}
      {openManageModal && <ManageViewModal isOpen={openManageModal} setIsOpen={setOpenManageModal}/>}
    </>
  )
}

export default Presentation