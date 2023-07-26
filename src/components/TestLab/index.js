'use client';
import React, { useState } from 'react';
import Carousel from './Carousel';
import bell from '../../Assets/svg/bell.svg';
import clock from '../../Assets/svg/clock.svg';
import share from '../../Assets/svg/share.svg';
import send from '../../Assets/svg/send.svg';
import mic from '../../Assets/svg/mic.svg';
import menu from '../../Assets/Images/menu.png';
import code from '../../Assets/svg/code.svg';
import msg from '../../Assets/svg/blogcontent.svg';
import vector from '../../Assets/svg/vector.svg';
import filter from '../../Assets/svg/filter.svg';
import cPlus from '../../Assets/svg/c++.svg';
import python from '../../Assets/svg/python.svg';
import Sidebar from '../Sidebar/Sidebar';
import vocabulary from '../../Assets/svg/vocabulary.svg';
import art_a from '../../Assets/svg/art_a.svg';
import chem_f from '../../Assets/svg/chem_f.svg';
import aljebra from '../../Assets/svg/aljebra.svg';
import spanishLevel from '../../Assets/svg/spanish-level.svg';

const RecentlyUsed = [
    {
      img: filter,
      name: 'Chemestry 101',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: spanishLevel,
      name: 'Spanish Level A1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: python,
      name: 'Python Class',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: cPlus,
      name: 'C+',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: filter,
      name: 'Chemestry 101',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: spanishLevel,
      name: 'Spanish Level A1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: python,
      name: 'Python Class',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: cPlus,
      name: 'C+',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
]

const Popular = [
    {
      img: vocabulary,
      name: 'Vocabulary',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: art_a,
      name: 'Art Appreciation',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: chem_f,
      name: 'Chem Formulas',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: aljebra,
      name: 'Algebra',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: vocabulary,
      name: 'Vocabulary',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: art_a,
      name: 'Art Appreciation',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: chem_f,
      name: 'Chem Formulas',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: aljebra,
      name: 'Algebra',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    }
]

const OtherTests = [
    {
      img: code,
      name: 'HTML 6',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: vector,
      name: 'Six Sigma',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: msg,
      name: 'Test3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: msg,
      name: 'Test3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: code,
      name: 'HTML 6',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: vector,
      name: 'Six Sigma',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: msg,
      name: 'Test3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    },
    {
      img: msg,
      name: 'Test3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .'
    }
]

const TestLab = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState({
        planned: true,
        start: false,
        continue: false,
        test: false
    })
    const handleClick = (e) => {
        if (e === 'planned') {
            setOpen({ planned: true })
        }
        if (e === 'start') {
            setOpen({ start: true })
        }
        if (e === 'continue') {
            setOpen({ continue: true })
        }
        if (e === 'test') {
            setOpen({ test: true })
        }
    }
    return (
      <>
        <Sidebar active={active} setActive={setActive} />
        <div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto '>
          <div className='bg-[#1A1D21CC] sm:p-[24px] p-[12px_14px] rounded-[20px] md:sticky top-0 z-10'>
            <div className='sm:flex justify-between items-center pb-[0px]'>
              <div className='flex items-start gap-3'>
                <button className='lg:hidden mt-[8px]' onClick={() => setActive(!active)}>
                  <img src={menu} alt='menu' className='w-[16px]' />
                </button>
                <div>
                  <h1 className='text-[20px] font-bold mb-1 text-white'>Welcome Back, Tyler! </h1>
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
          </div>
            <div className='sm:mt-[46px] mt-[26px] xl:px-[48px]'>
              <div className='sm:mt-[20px] mt-[26px] xl:px-[74px]'>
                <h1 className='sm:text-[28px] text-[28px] mb-[12px] font-bold text-white'>Test Lab</h1>
                <p className='md:w-[80%] lg:w-[80%] text-[#9B9C9E] sm:text-[16px] text-[16px] font-[500] tracking-[.15px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor.</p>
              </div>
              <div className=' mt-[60px] xl:flex justify-between grid md:grid-cols-12 sm:grid-cols-3 grid-cols-2 gap-[10px]'>
                <div>
                  <div className='sm:ml-0 mb-[14px] md:ml-[4.6rem] lg:ml-[4.6rem]'>
                    <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-left w-[350px]'>Recently Used</p>
                  </div>
                  <Carousel data={RecentlyUsed}/>
                </div>
              </div>
              <div className='mt-[30px] xl:flex justify-between grid md:grid-cols-12 sm:grid-cols-3 grid-cols-2 gap-[10px]'>
                <div>
                  <div className='sm:ml-0 mb-[14px] md:ml-[4.6rem] lg:ml-[4.6rem]'>
                    <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-left w-[350px]'>Popular</p>
                  </div>
                  <Carousel data={Popular}/>
                </div>
              </div>
              <div className='mt-[30px] xl:flex justify-between grid md:grid-cols-12 sm:grid-cols-3 grid-cols-2 gap-[10px]'>
                <div>
                  <div className='sm:ml-0 mb-[14px] md:ml-[4.6rem] lg:ml-[4.6rem]'>
                    <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-left w-[350px]'>Other Tests You May Want to Take</p>
                  </div>
                  <Carousel data={OtherTests}/>
                </div>
              </div>
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

export default TestLab