import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import Dropdown from "../Dropdown";
import Sidebar from '../Sidebar/Sidebar';
import { BtnMenu, ResultData } from './data';
import { 
  BellIcon, ClockIcon, ShareIcon, MenuIcon,
  MicIcon, SendIcon
} from '../Icons';

const ResultPanel = styled.div`
  &:hover {
    background: var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%)) !important;
  }
`;

const links = [
  { label: 'Recent' },
  { label: 'Name' },
  { label: 'A-Z' }
]


const Results = () => {
  const itemsPerPage = 2;
  const [active, setActive] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = ResultData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(ResultData.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ResultData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleOpenModel = (item) => {
    
  }

  function Items({ ResultData }) {
    return (
      <>
        {ResultData &&
          ResultData?.map((result, index) => (
            <ResultPanel
              key={`result-data-${index}`}
              className=' flex flex-wrap rounded-[12px] p-[24px_24px_24px_24px] mb-[42px] cursor-pointer'
              style={{ background: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))' }}
            >
              <div className='flex flex-row lg:w-[25%] md:w-[25%] w-[100%] leading-[41px]'>
                <div className='w-[56px] h-[41px] flex items-center justify-center'><img src={result.img} className='' alt='' /></div>
                <div className='text-white text-[18px] font-[500] ml-[14px]'>{result.name}</div>
              </div>
              <div className='lg:w-[60%] md:w-[60%] w-[100%] lg:my-[0px] md:my-[0px] my-[10px] text-[12px] font-[500] text-[#9B9C9E]'>{result.desc}</div>
              <div className='lg:w-[15%] md:w-[15%] w-[100%] flex items-center justify-end '><img src={result.rightArrow} className='w-[14px] h-[8px]' alt='' /></div>
            </ResultPanel>
          ))}
      </>
    );
  }

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
                <h1 className='text-[20px] font-bold mb-1 text-white md:pl-[0px] lg:pl-[0px]'>GPT-Hub : <span className='text-[#4AC97E]'>Math</span></h1>
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
            {BtnMenu.map((data, key) =>
              <div key={`btn-${key}`}>
                <button key={key} className='border-[1px] border-none rounded-xl xl:p-[17px_14.48px] p-[17px_14.48px] w-[146px] h-[52px] flex gap-3 justify-between items-center text-start mx-auto sm:mt-0 mt-2 mr-2 sm:mr-[2rem] 2xl:text-[16px] text-[13px] leading-[24px]' style={{ backgroundImage: data.bgColor, color: data.color }}> 
                  <span className='flex flex-row'>{data?.leftIcon && <img className='w-[22.5px] h-[22.5px]' src={data.leftIcon} alt='arrow' /> } <span className="ml-[14px]">{data.btn}</span> </span>
                  <img src={data.img} alt='arrow' />
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Body Content Start */}
        <div className='m-[10px_0px] sm:m-[25px_8px_10px] flex flex-col text-center'>
          <p className='sm:text-[28px] text-[28px] font-[700] text-white mb-4'>GPT- Hub</p>
          <p className='md:px-[10rem] lg:px-[10rem] text-[#9B9C9E] sm:text-[16px] text-[16px] font-[500] tracking-[.15px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor.</p>
        </div>
        <div className='flex flex-row justify-end md:px-[3rem] lg:px-[3rem] lg:-mt-[40px] md:-mt-[40px] -mt-[0px] '>
          <Dropdown 
            handleOpenModel={handleOpenModel} 
            links={links}
            defultValue="Sort By"
          />
        </div>

        <div className='sm:mt-[46px] mt-[26px] xl:px-[48px]'>
          <Items ResultData={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next "
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            breakClassName="break-page-item"
            previousLabel=" Previous"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center pagination justify-content-center"
            pageClassName="page-item w-[29px] h-[29px] mx-2 text-center flex justify-center items-center rounded-[50%] border-2 border-[#000000]"
            pageLinkClassName="page-link"
            previousClassName="prev-page-item leading-[29px]"
            previousLinkClassName="page-link"
            nextClassName="next-page-item leading-[29px]"
            nextLinkClassName="page-link"
            activeClassName="active text-white !border-[#4AC97E]"
          />
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

export default Results