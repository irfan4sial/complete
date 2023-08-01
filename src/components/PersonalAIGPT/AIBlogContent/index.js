import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import HeaderMenu from '../HeaderMenu';
import { BlogContentMenu } from './data';
import { DotsIcon, StarIcon  } from '../../Icons';

import { BlogContentData, LessionData } from './data';

const AIBlogContent = () => {
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
          menuList={BlogContentMenu} 
          handleSetActive={handleSetActive}
          title="Personal AI-GPT"
          type="Blog"
        />
        <div className='flex flex-wrap justify-between'>
          <div className='sm:mt-[16px] mt-[12px] xl:px-[32px] lg:w-[75%] md:w-[75%] w-[100%]'>
            <div className='text-center text-[#9B9C9E] text-[12px] font-[600]'>Today</div>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row py-4'>
                <span className='text-white text-[20px] font-[700]'>Post Name</span>
                <button
                  className='rounded-[12px] text-[#B6F09C] p-[3px_12px] ml-2'
                  style={{ background: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))'}}
                >
                  4
                </button>
              </div>
              <div className='flex flex-row py-4'>
                <span className='mr-[32px]'><img src={StarIcon} alt='' /></span>
                <span><img src={DotsIcon} alt='' /></span>
              </div>
            </div>
            {BlogContentData?.map((result, index) => (
              <div
                key={`result-data-${index}`}
                className=' flex flex-col rounded-[12px] p-[16px] mb-[42px] cursor-pointer border-[1px] border-[#1A1D21]'
              >
                <div className='flex flex-row justify-between lg:w-[100%] md:w-[100%] w-[100%] leading-[41px]'>
                  <div className='flex flex-row'>
                    <div className='w-[48px] h-[48px] flex items-center justify-center'><img src={result.img} className='' alt='' /></div>
                    <div className=' ml-[24px]'>
                      <span className='text-white text-[18px] font-[500]'>{result.name}</span>
                      <span className='ml-4 text-[#9B9C9E] text-[12px] font-[500]'>{result.time}</span>
                    </div>
                  </div>
                  <div className='text-white text-[18px] font-[500] ml-[14px] mt-[12px]'><img src={result.copyIcon} className='' alt='' /></div>
                </div>
                <div className='lg:w-[100%] md:w-[100%] w-[100%] lg:px-[72px] md:px-[72px] px-[0px] py-[0px] leading-[18px] tracking-[0.15px] lg:my-[0px] md:my-[0px] my-[10px] text-[12px] font-[500] text-[#9B9C9E]'>{result.desc}</div>
                <div className='lg:w-[100%] md:w-[100%] w-[100%] lg:px-[72px] md:px-[72px] px-[0px] py-[1rem] flex justify-start '>
                  <button className='text-[#9B9C9E] px-[14px] py-[7px] text-[12px] font-[600] justify-center gap-x-1.5 rounded-md bg-[#202327] mr-3'>Reply</button>
                  {result?.icons.length > 0 && (
                    <div className='flex flex-row py-2'>
                      {result?.icons.map((icon, iconIndex) => (
                        <span className='mr-2' key={`icon-index-${iconIndex}`}><img src={icon} alt='' /></span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>


          <div className='lg:w-[25%] md:w-[25%] w-[100%] py-8'>
            <p className='px-[6px] mb-4 text-[#CDCECF] text-[16px] font-[600]'>All courses</p>
            <div className='flex flex-col'>
              {LessionData.map((lession, lesIndex) => (
                <div className='flex flex-row my-4' key={`lession-name-${lesIndex}`}>
                  <img src={lession.img} alt='' className='w-[24px] mr-4' />
                  <span className='text-[#9B9C9E] text-[16px] font-[600]'>{lession.name}</span>
                </div>
              ))}
            </div>
          </div>


        </div>



      </div>

    </>
  )
}

export default AIBlogContent;