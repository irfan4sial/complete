import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import HeaderMenu from '../HeaderMenu';
import { ImagesAction } from './data';
import {  } from '../../Icons';

const AIImages = () => {
  // const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    setActive(!active)
  }

  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto '>
        <HeaderMenu 
          menuList={ImagesAction} 
          handleSetActive={handleSetActive}
          title="Personal AI-GPT"
          type="Images"
        />
        <div className='flex flex-wrap justify-between'>
          Images
        </div>



      </div>

    </>
  )
}

export default AIImages;