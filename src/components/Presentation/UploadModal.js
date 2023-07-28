import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import crossIcon from '../../Assets/svg/crossIcon.svg';
import BrowseIcon from '../../Assets/svg/browseIcon.svg';

const UploadModal = (props) => {
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
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-[#363A3D] p-[12px] sm:p-[40px] pt-12 sm:pb-[10rem] pb-[10rem] text-left align-middle shadow-xl transition-all w-[720px] h-[805]">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex flex-row justify-between"
                  >
                    <div className='flex flex-col'>
                      <span className='text-white text-[24px]'>Upload  Content</span>
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

                  <div className="mt-4 p-[59px_8px] sm:p-[59px] flex flex-col text-center border-dashed border-[#B6F09C] border-[1px] rounded-[16px]"
                    style={{ background: 'var(--noble-black-800, #0D0F10)' }}
                  >
                    <p className='text-white mt-4'>Drag file to Upload</p>
                    <p className='text-white mt-8'>or</p>
                    <p className='mt-8'>
                      <button
                        type="button"
                        className=" inline-flex justify-center rounded-md border border-transparent bg-[#B6F09C] px-4 py-2 text-sm font-medium text-blue-900 hover:bg-[#B6F09C] focus:outline-none"
                        onClick={() => setIsOpen(false)}
                      > 
                        <span className='mr-2'>Browse Files</span>
                        <img src={BrowseIcon} alt='' />
                      </button>
                    </p>
                    <p className='text-[#B6F09C] mt-8 mb-1'>Max file size 50MB</p>
                    <p className='text-[#B6F09C] leading-6'>Supported file types: JPG, PNG, GIF,PDF, SVG</p>
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

export default UploadModal;
