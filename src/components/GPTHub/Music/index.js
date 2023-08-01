import React, { useState } from 'react';
import HeaderMenu from '../HeaderMenu';
import Sidebar from '../../Sidebar/Sidebar';
import { BtnMenu } from '../data';
import { 
  MicIcon, SendIcon
} from '../../Icons';

const Music = () => {
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    setActive(!active)
  }

  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto '>
        <HeaderMenu 
          menuList={BtnMenu} 
          handleSetActive={handleSetActive} 
          title="GPT-Hub"
          type="Music"
        />

        {/* Body Content Start */}
        <div className='m-[10px_0px] sm:m-[25px_8px_10px] flex flex-col text-center'>
          <p className='sm:text-[28px] text-[28px] font-[700] text-white mb-4'>GPT- Hub</p>
          <p className='md:px-[10rem] lg:px-[10rem] text-[#9B9C9E] sm:text-[16px] text-[16px] font-[500] tracking-[.15px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor.</p>
        </div>

        {/* Body Content End */}

        <div className='xl:px-[48px] md:sticky bottom-0'>
          <div>
            <div className='bg-[#131619] rounded-[20px] py-[10px] relative mt-[49px]'>
              <img src={MicIcon} alt='mic' className='absolute top-[10px] sm:left-[24px] left-[6px] ' />
              <input placeholder='I want to learn about python' className='text-[#9B9C9E] bg-transparent w-full outline-none sm:p-[12px_96px] p-[12px_58px]' />
              <img src={SendIcon} alt='send' className='absolute top-[10px] sm:right-[24px] right-[6px] ' />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Music;