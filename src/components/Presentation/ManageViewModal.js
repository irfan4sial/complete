import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import styled from 'styled-components';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import crossIcon from '../../Assets/svg/crossIcon.svg';
import ShareIcon from '../../Assets/svg/shareIcon.svg';
import GlobeIcon from '../../Assets/svg/globeIcon.svg';
import UserBtnIcon from '../../Assets/svg/userBtnIcon.svg';
import UserBtnIcon2 from '../../Assets/svg/userBtnIcon2.svg';
import PlusCircle from '../../Assets/svg/plus-circle.svg';
import InfoIcon from '../../Assets/svg/infoIcon.svg';
import TriAngleIcon from '../../Assets/svg/triangleIcon.svg';

const UserDiv = styled.div`
  &:hover {
    background: var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%));
    border: 1px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
  }
`

const ManageViewModal = (props) => {
  const { isOpen, setIsOpen } = props;

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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-[#363A3D] p-[12px] sm:p-[40px] pt-12 pb-12 text-left align-middle shadow-xl transition-all w-[720px] h-[805]">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex flex-row justify-between"
                  >
                    <div className='flex flex-col'>
                      <span className='text-white text-[24px] leading-[32px]'>Manage who can view this project</span>
                      <div className="mt-2 flex flex-row justify-between">
                      <p className="text-[16px] text-[#9B9C9E] font-[500] pt-4 pb-4">
                        Select which users can access and view this project. Only users with access can view and edit the project.
                      </p>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => setIsOpen(false)} className='hover:bg-[#363A3D] w-[26px] h-[40px]'><img src={crossIcon} alt='close' /></button>
                    </div>
                  </Dialog.Title>

                  <div className='flex flex-wrap mt-6'>
                    <div 
                      className='flex flex-row justify-between w-[100%] sm:w-[50%] p-[12px_16px] rounded-[8px]'
                      style={{ background: 'var(--noble-black-600, rgba(26, 29, 33, 0.80))'}}
                    >
                      <div className=' flex flex-row'>
                        <span className='text-white leading-[30px]'>Name</span>
                      </div>
                      <div>
                      <div className='text-[#B6F09C] flex flex-row'>
                        <span className='leading-[30px]'>Can Edit</span>
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-[#B6F09C] mt-[6px] sm:mt-[5px]" aria-hidden="true" />
                      </div>
                      </div>
                    </div>
                    <div className='w-[100%] sm:w-[50%] flex flex-row sm:p-[0px_40px] pl-[15px]'>
                      <img className='w-[20px]' src={TriAngleIcon} alt='' />
                      <span className='text-white text-[14px] font-[600] leading-[54px] ml-4'>Lable</span>
                    </div>
                  </div>

                  <div className='flex flex-row justify-between'>
                    <div className="mt-4 flex flex-col rounded-[16px] w-[75%] h-[256px]"
                      style={{ background: 'var(--noble-black-800, #0D0F10)' }}
                    >
                      <div className='text-white p-[12px] m-1'>Users</div>
                      {[1,2,3].map((item, index) => (
                        <UserDiv 
                          key={`key-${index}`}
                          className='text-white p-[12px] cursor-pointer rounded-[12px] m-1'
                          style={{  }}
                        >
                          <img src={UserBtnIcon} alt='' />
                        </UserDiv>
                      ))}
                    </div>
                    <div className='flex flex-col pt-8'>
                      {[InfoIcon, UserBtnIcon2, UserBtnIcon2, InfoIcon].map((item, index) => (
                        <div className='mb-4' key={`btn-icon-${index}`}>
                          <img src={item} alt='' />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-row mt-[17px] ml-3'>
                    <img src={PlusCircle} alt='' />
                    <span className='text-[#9B9C9E] text-[12px] font-[60px] ml-1'>and 5 more others</span>
                  </div>

                  <div className="mt-[40px] flex flex-wrap text-center rounded-[16px] justify-between"
                    style={{ background: 'var(--noble-black-800, #0D0F10)' }}
                  >
                    <div className='flex flex-row justify-between p-[32px_4px_0px] sm:p-[32px_24px] sm:w-[73%] w-[100%]'>
                      <div className=' flex flex-row w-[70%]'>
                        <img src={GlobeIcon} className='w-[24px]' alt='' />
                        <span className='text-white ml-2 leading-[30px]'>Anyone with the link</span>
                      </div>
                      <div>
                      <div className='text-[#B6F09C] flex flex-row'>
                        <span className='leading-[30px]'>Can View</span>
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-[#B6F09C] mt-[6px] sm:mt-[5px]" aria-hidden="true" />
                      </div>
                      </div>
                    </div>
                    <div className='flex flex-wrap sm:border-l-[1px] sm:border-l-[#1A1D21] sm:w-[27%] w-[100%]'>
                      <div className='flex flex-row sm:p-8 p-2 pb-8 '>
                        <button 
                          className='flex flex-row rounded-[12px] p-[8px_10px] text-[#9B9C9E] text-[12px] font-[500]'
                          style={{ 
                            background: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))', 
                            boxShadow: '0px 8px 12px 0px rgba(255, 255, 255, 0.08) inset, 0px 24px 24px -16px rgba(0, 0, 0, 0.12), 16px 24px 64px -24px rgba(255, 255, 255, 0.08) inset'
                          }}
                        >
                          <img src={ShareIcon} className='w-[16px] mr-2' alt=''/>
                          <span>Copy Link</span>
                        </button>
                      </div>
                    </div>
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

export default ManageViewModal;
