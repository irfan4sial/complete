'use client';
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import HeaderMenu from '../HeaderMenu';

import Sidebar from '../../Sidebar/Sidebar';
import Category from './Category';
import UploadModal from './UploadModal';
import { BtnMenu, ImagesData, DocumentData, IdeasData } from './data';
import ManageViewModal from './ManageViewModal';
import TabsModal from './TabsModal';

const AIPresentation = () => {
  // const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openManageModal, setOpenManageModal] = useState(false);
  const [openTabModal, setOpenTabModal] = useState(false);
  

  // const handleSubmitAnswer = () => {
  //   navigate('/questions-result')
  // }

  const handleSetActive = () => {
    setActive(!active)
  }

  const handleOpenModel = (item) => {
    console.log("Modal =>", item)
    if(item === 'Upload') {
      setOpen(true);
    }else if(item === 'Share') {
      setOpenManageModal(true)
    } else if(item === 'Export') {
      setOpenTabModal(true);
    }
  }

  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto '>
        <HeaderMenu 
          menuList={BtnMenu} 
          handleSetActive={handleSetActive} 
          title="GPT-Hub"
          type="Presentation"
        />


        <div className='m-[10px_0px] sm:m-[10px_8px] flex flex-wrap'>
          <Category data={ImagesData} type="Images" handleOpenModel={handleOpenModel} />
          <Category data={DocumentData} type="Documents" handleOpenModel={handleOpenModel} />
          <Category data={IdeasData} type="Ideas" handleOpenModel={handleOpenModel} />

        </div>
      </div>
      {open && <UploadModal isOpen={open} setIsOpen={setOpen}/>}
      {openManageModal && <ManageViewModal isOpen={openManageModal} setIsOpen={setOpenManageModal}/>}
      {openTabModal && <TabsModal isOpen={openTabModal} setIsOpen={setOpenTabModal}/>}
    </>
  )
}

export default AIPresentation