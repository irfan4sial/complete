import React, { useState } from 'react';
import bell from '../../Assets/svg/bell.svg';
import clock from '../../Assets/svg/clock.svg';
import share from '../../Assets/svg/share.svg';
import oct from '../../Assets/svg/artificium.svg';
import depth from '../../Assets/Images/depath.png';
import arrow from '../../Assets/svg/arrow-right.svg';
import arrow2 from '../../Assets/svg/arrow.svg';
import send from '../../Assets/svg/send.svg';
import mic from '../../Assets/svg/mic.svg';
import menu from '../../Assets/Images/menu.png';
import learn from '../../Assets/Images/Learning.png';
import com from '../../Assets/Images/communication.png';
import tone from '../../Assets/Images/tone.png';
import reaso from '../../Assets/Images/reaso.png';
import Sidebar from '../Sidebar/Sidebar';

const Depth = [
    {
        btn: 'Elementary',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Middle School',
        color: '#000',
        img: arrow2,
        bgColor: 'linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)'
    },
    {
        btn: 'High School',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'UnderGrad',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Master’s',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Postdoc',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Ph D',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
]

const Learning = [
    {
        btn: 'Visual',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Verbal',
        color: '#000',
        img: arrow2,
        bgColor: 'linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)'
    },
    {
        btn: 'Active',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Intuitive',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Reflective',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Global',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    }
]

const Communication = [
    {
        btn: 'Formal',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Textbook',
        color: '#000',
        img: arrow2,
        bgColor: 'linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)'
    },
    {
        btn: 'Layman',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Storytelling',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Socratic',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    }
]

const Tone = [
    {
        btn: 'Encouraging',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Neutral',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Informative',
        color: '#000',
        img: arrow2,
        bgColor: 'linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)'
    },
    {
        btn: 'Friendly',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Humorous',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    }
]

const Reasoning = [
    {
        btn: 'Encouraging',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Neutral',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Introductive',
        color: '#000',
        img: arrow2,
        bgColor: 'linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)'
    },
    {
        btn: 'Friendly',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    },
    {
        btn: 'Humorous',
        color: '#fff',
        img: arrow,
        bgColor: 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
    }
]

const Platform = () => {
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
                <div className='bg-[#1A1D21CC] sm:p-[24px] p-[12px_14px] rounded-[20px] md:sticky top-0'>
                    <div className='sm:flex justify-between items-center pb-[24px]'>
                        <div className='flex items-start gap-3'>
                            <button className='lg:hidden mt-[8px]' onClick={() => setActive(!active)}>
                                <img src={menu} alt='menu' className='w-[16px]' />
                            </button>
                            <div>
                                <h1 className='text-[20px] font-bold mb-1 text-white'>Edu-Tech Platform</h1>
                                <p className='text-[#9B9C9E] text-[14px] font-medium'>A lesson app that will blow your mind</p>
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
                        <p className='text-[#B6F09C] text-[14px] contents'><span className='sm:pr-[20px] pr-[4px] block text-[#E8E9E9]'>:</span>Middle School / Verbal / Textbook / Informative / Introductive</p>
                    </div>
                </div>
                <div className='sm:mt-[46px] mt-[26px] md:h-[calc(100vh-582px)] overflow-y-auto xl:px-[48px]'>
                    <h1 className='sm:text-[28px] text-[20px] font-bold text-white'>Lesson App</h1>
                    <p className='text-[#9B9C9E] font-medium sm:text-[16px] text-[14px]'>Kickstart your learning & teaching with our comprehensive selection of predefined prompts.</p>
                    <div className='sm:mt-[70px] mt-[30px] xl:flex justify-between grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-[10px]'>
                        <div>
                            <div className='mb-[14px]'>
                                <img src={depth} alt='depth' className='mx-auto' />
                                <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>Depth</p>
                            </div>
                            <div className='pt-[9px]'>
                                {Depth.map((data, key) =>
                                    <button key={key} className='border-[1px] border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[146px] w-[120px] mt-2 2xl:text-[16px] text-[13px]' style={{ backgroundImage: data.bgColor, color: data.color }}>{data.btn} <img src={data.img} alt='arrow' /></button>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className='mb-[14px]'>
                                <img src={learn} alt='learn' className='mx-auto' />
                                <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>Learning Style</p>
                            </div>
                            <div className='pt-[9px]'>
                                {Learning.map((data, key) =>
                                    <button key={key} className='border-[1px] border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[146px] w-[120px] mt-2 2xl:text-[16px] text-[13px]' style={{ backgroundImage: data.bgColor, color: data.color }}>{data.btn} <img src={data.img} alt='arrow' /></button>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className='mb-[14px]'>
                                <img src={com} alt='com' className='mx-auto' />
                                <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>Communication Style</p>
                            </div>
                            <div className='pt-[9px]'>
                                {Communication.map((data, key) =>
                                    <button key={key} className='border-[1px] border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[146px] w-[120px] mt-2 2xl:text-[16px] text-[13px]' style={{ backgroundImage: data.bgColor, color: data.color }}>{data.btn} <img src={data.img} alt='arrow' /></button>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className='mb-[14px]'>
                                <img src={tone} alt='tone' className='mx-auto' />
                                <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>Tone Style</p>
                            </div>
                            <div className='pt-[9px]'>
                                {Tone.map((data, key) =>
                                    <button key={key} className='border-[1px] border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[146px] w-[120px] mt-2 2xl:text-[16px] text-[13px]' style={{ backgroundImage: data.bgColor, color: data.color }}>{data.btn} <img src={data.img} alt='arrow' /></button>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className='mb-[14px]'>
                                <img src={reaso} alt='reaso' className='mx-auto' />
                                <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>Reasoning Framework</p>
                            </div>
                            <div className='pt-[9px]'>
                                {Reasoning.map((data, key) =>
                                    <button key={key} className='border-[1px] border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[146px] w-[120px] mt-2 2xl:text-[16px] text-[13px]' style={{ backgroundImage: data.bgColor, color: data.color }}>{data.btn} <img src={data.img} alt='arrow' /></button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:px-[48px] md:sticky bottom-0'>
                    <div>
                        <button className='mt-[31px] bg-[#B6F09C] h-12 py-2 px-6 max-w-[182px] ml-auto w-full rounded-lg text-[#0C1132] font-semibold flex justify-between items-center'>Start Lesson <img src={arrow2} alt='arrow' /></button>
                        <div className='mt-[31px]'>
                            <p className='text-[20px] font-bold text-white pl-[16px]'>Lesson App</p>
                            {/*<button className='linear-gradient(225deg,_#3045C9_0%,_#65BEDA_45.31%,_#9AD37F_100%) rounded-xl'>Planned</button>*/}
                            <div className='grid sm:grid-cols-4 grid-cols-2 gap-3 items-baseline mt-[14px]'>
                                <button className={open.planned ? 'bg-[linear-gradient(225deg,_#3045C9_0%,_#65BEDA_45.31%,_#9AD37F_100%)] p-[12px_24px] rounded-xl w-full text-black font-semibold text-start' : 'bg-grad100 p-[12px_24px] rounded-xl w-full text-white font-semibold text-start'} onClick={() => handleClick('planned')}>Planned</button>
                                <button className={open.start ? 'bg-[linear-gradient(225deg,_#3045C9_0%,_#65BEDA_45.31%,_#9AD37F_100%)] p-[12px_24px] rounded-xl w-full text-black font-semibold text-start' : 'bg-grad100 p-[12px_24px] rounded-xl w-full text-white font-semibold text-start'} onClick={() => handleClick('start')}>Start</button>
                                <button className={open.continue ? 'bg-[linear-gradient(225deg,_#3045C9_0%,_#65BEDA_45.31%,_#9AD37F_100%)] p-[12px_24px] rounded-xl w-full text-black font-semibold text-start' : 'bg-grad100 p-[12px_24px] rounded-xl w-full text-white font-semibold text-start'} onClick={() => handleClick('continue')}>Continue</button>
                                <button className={open.test ? 'bg-[linear-gradient(225deg,_#3045C9_0%,_#65BEDA_45.31%,_#9AD37F_100%)] p-[12px_24px] rounded-xl w-full text-black font-semibold text-start' : 'bg-grad100 p-[12px_24px] rounded-xl w-full text-white font-semibold text-start'} onClick={() => handleClick('test')}>Test</button>
                            </div>
                        </div>
                        <div className='bg-[#131619] rounded-[20px] py-[10px] relative mt-[49px]'>
                            <img src={mic} alt='mic' className='absolute top-[10px] sm:left-[24px] left-[6px] ' />
                            <input placeholder='I want to learn about python' className='text-[#9B9C9E] bg-transparent w-full outline-none sm:p-[12px_96px] p-[12px_58px]' />
                            <img src={send} alt='send' className='absolute top-[10px] sm:right-[24px] right-[6px] ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Platform