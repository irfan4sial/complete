import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import crossIcon from '../../Assets/svg/crossIcon.svg';
import BrowseIcon from '../../Assets/svg/browseIcon.svg';

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
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-[#363A3D] p-6 pt-12 pb-[10rem] text-left align-middle shadow-xl transition-all w-[720px] h-[805]">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex flex-row justify-between"
                  >
                    <div className='flex flex-col'>
                      <span className='text-white text-[24px]'>Manage who can view this project</span>
                      <div className="mt-2 flex flex-row justify-between">
                      <p className="text-[16px] text-[#9B9C9E] font-[500] pt-4 pb-4">
                        Select which users can access and view this project. Only users with access can view and edit the project.
                      </p>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => setIsOpen(false)} className='hover:bg-[#363A3D] w-[40px] h-[40px]'><img src={crossIcon} alt='close' /></button>
                    </div>
                  </Dialog.Title>

                  <div className="mt-4 p-[59px] flex flex-col text-center"
                    // style={{ background: 'var(--noble-black-800, #0D0F10)' }}
                  >
                    Manage who can view this project
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
