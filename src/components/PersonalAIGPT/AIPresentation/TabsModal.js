import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { CrossIcon, AprImage1, AprImage2, AprImage3, CommentTabIcon, ImagesTabIcon, ChatTabIcon, Apr3_1  } from '../../Icons';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = [
  {
    name: 'Chat',
    img: ChatTabIcon
  },
  {
    name: 'Images',
    img: ImagesTabIcon
  },
  {
    name: 'Comments',
    img: CommentTabIcon
  }
]

const TabsModal = (props) => {
  const { isOpen, setIsOpen } = props;
  const [selectedIndex, setSelectedIndex] = useState(1)

  return (
    <>
      <Transition appear show={isOpen} as={Fragment} className="z-[100]">
        <Dialog 
          as="div" 
          className="relative" 
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel 
                  className=" transform overflow-hidden rounded-2xl bg-[#1A1D21]  p-[12px] sm:p-[40px] pt-12 pb-12 text-left align-right transition-all w-[726px] h-[calc(100vh-0px)]"
                  // style={{ background: 'var(--glass-modal, rgba(26, 29, 33, 0.96))'}}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex flex-row justify-between"
                  >
                    <div className='flex flex-col'>
                      <span className='text-white text-[24px] leading-[32px]'>Title</span>
                      <div className="mt-2 flex flex-row justify-between">
                        <p className="text-[16px] text-[#9B9C9E] font-[500] pt-4 pb-4">
                          Natural born leader with years of experience in space exploration.
                        </p>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => setIsOpen(false)} className='hover:bg-[#363A3D] w-[26px] h-[40px]'><img src={CrossIcon} alt='close' /></button>
                    </div>
                  </Dialog.Title>

                  <div className="w-full py-1 sm:px-0">
                    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                      <Tab.List className="flex space-x-1 rounded-xl p-1">
                        {Tabs.map((item, index) => (
                          <Tab
                            key={`tabs-${index}`}
                            className={({ selected }) =>
                              classNames(
                                'w-full m-0 rounded-lg py-2.5 text-sm font-medium flex flex-row sm:leading-[45px] leading-[18px] shadow-none outline-0',
                                ' ring-opacity-60  focus:outline-none focus:ring-0',
                                selected
                                  ? ' rounded-none border-b-[#B6F09C] border-b-[2px] text-[#B6F09C]'
                                  : 'text-[#9B9C9E] hover:bg-[#1A1D21] hover:text-[#B6F09C]'
                              )
                            }
                          >
                            <img src={item.img} alt='' className='sm:w-[148px] sm:h-[48px] w-[65px] h-[25px] '  />
                            {item.name}
                          </Tab>
                        ))}
                      </Tab.List>
                      <hr className='border-[#363A3D] -sm:mt-[24px] -mt-[20px] sm:-ml-[40px] md:-ml-[40px] -ml-[12px]  absolute w-full' />
                      <Tab.Panels className="mt-2">
                        <Tab.Panel className={'rounded-xl p-3'}>
                          <div className='text-[#9B9C9E]'>
                            <h3>Bursting with imagery, motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information. In HTML5, the focus on writing and authorship is more pronounced than ever. It’s evident in the very way that new elements such as article and aside are named. HTML5 asks us to treat the HTML document more as… well, a document.</h3>

                            <h3>It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor.</h3>
                          </div>
                        </Tab.Panel>
                        <Tab.Panel className='rounded-xl mt-3'>
                          <div className='h-[calc(100vh-252px)] overflow-y-auto '>
                            <div className='flex flex-col'>
                              <p className='text-[#9B9C9E] text-[16px] font-[500]'>12 Apr</p>
                              <div className='flex flex-row mt-1'>
                                <img src={AprImage1} alt='' className='w-[197px] h-[185px] m-[12px_8px_0px_0px]' />
                                <img src={AprImage2} alt='' className='w-[197px] h-[185px] m-[12px_8px_0px_0px]' />
                                <img src={AprImage3} alt='' className='w-[197px] h-[185px] m-[12px_8px_0px_0px]' />
                              </div>
                            </div>
                            <div className='flex flex-col mt-8'>
                              <p className='text-[#9B9C9E] text-[16px] font-[500]'>3 Apr</p>
                              <div className='flex flex-row mt-1'>
                                <img src={Apr3_1} alt='' className='w-[197px] h-[185px] m-[12px_8px_0px_0px]' />
                              </div>
                            </div>
                            <div className='flex flex-col mt-8'>
                              <p className='text-[#9B9C9E] text-[16px] font-[500]'>2 Apr</p>
                              <div className='flex flex-row mt-1'>
                                <img src={AprImage1} alt='' className='w-[197px] h-[185px] m-[12px_8px_0px_0px]' />
                                <img src={Apr3_1} alt='' className='w-[197px] h-[185px] m-[12px_8px_0px_0px]' />
                              </div>
                            </div>
                          </div>
                        </Tab.Panel>
                        <Tab.Panel className={'rounded-xl p-3'}>
                          <div className='text-[#9B9C9E]'>
                            <h3>Bursting with imagery, motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information. In HTML5, the focus on writing and authorship is more pronounced than ever. It’s evident in the very way that new elements such as article and aside are named. HTML5 asks us to treat the HTML document more as… well, a document.</h3>

                            <h3>It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor.</h3>
                          </div>
                        </Tab.Panel>

                      </Tab.Panels>
                    </Tab.Group>
                  </div>



                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default TabsModal;
