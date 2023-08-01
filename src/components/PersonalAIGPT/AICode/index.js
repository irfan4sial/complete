import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import HeaderMenu from '../HeaderMenu';
import { ImagesAction } from './data';
import {   } from '../../Icons';


const AICode = () => {
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
          type="Code"
        />
        <div className='flex flex-wrap justify-between'>
        AICode
        </div>



      </div>

    </>
  )
}

export default AICode;