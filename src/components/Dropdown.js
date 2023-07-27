import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import UploadIcon from '../Assets/svg/uploadIcon.svg';
import ShareIcon from '../Assets/svg/shareIcon.svg';
import ExportIcon from '../Assets/svg/exportIcon.svg';

const links = [
  { img: UploadIcon, label: 'Upload' },
  { img: ShareIcon, label: 'Share' },
  { img: ExportIcon, label: 'Export' }
]

const Dropdown = (props) => {
  const { handleOpenModel } = props;
  const [selected, setSelected] = useState(null);

  const handleMenuItem = (item) => {
    setSelected(item);
    handleOpenModel(item);
  }
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#202327] px-3 py-2 text-sm text-[#9B9C9E] text-[12px] font-[400] shadow-sm ring-1 ring-inset hover:ring-[#686B6E] ring-[#202327] hover:bg-[#686B6E]">
          {selected ? selected : 'Modify'}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#0D0F10] shadow-lg ring-1 ring-[#0D0F10] ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {links.map((item, index) => (
              <Menu.Item key={`dropdown-${index}-${item.label}`}>
                <button
                  onClick={() => handleMenuItem(item.label)}
                  className="flex flex-row px-4 py-2 text-sm text-white w-full rounded-[6px] hover:bg-[#202327]"
                >
                  <img src={item.img} alt="" />
                  <span className='pl-4'>{item.label}</span>
                </button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown;