import React from "react";
import msg from '../../Assets/svg/blogcontent.svg';
import Dropdown from "../Dropdown";
import UploadIcon from '../../Assets/svg/uploadIcon.svg';
import ShareIcon from '../../Assets/svg/shareIcon.svg';
import ExportIcon from '../../Assets/svg/exportIcon.svg';

const links = [
  { img: UploadIcon, label: 'Upload' },
  { img: ShareIcon, label: 'Share' },
  { img: ExportIcon, label: 'Export' }
]

const Category = (props) => {
  const { data, type, handleOpenModel } = props;

  return(
    <>
      <div className='sm:w-[33.3%] w-[100%]'>
        <div className="m-6 mb-4 flex flex-wrap justify-between">
          <p className="text-white font-[700] text-[20px]">{type}</p>
          <div>
            <Dropdown 
              handleOpenModel={handleOpenModel} 
              links={links}
              defultValue="Modify"
            />
          </div>
        </div>
        <div className={`${type === 'Ideas' ? 'pt-[0.5px]' : 'pt-[0.5px] sm:border-r-[1px] sm:border-r-[#1A1D21]'}`}>
          {data.map((item, index) => (
            <div
              key={`${type}-${index}`}
              style={{ background: 'var(--noble-black-600, rgba(26, 29, 33, 0.80))' }}
              className='rounded-[20px] m-4 sm:m-4 ml-0 mr-0'
            >
              <div className='flex flex-col p-[24px]'>
                <p className='text-white mb-4 text-[16px] font-[600]'>{item.title}</p>
                <p className='text-[#9B9C9E] text-[14px] font-[500]'>{item.desc}</p>
              </div>

              <div className='flex flex-row mt-1 p-[0px_24px_24px]'>
                {item.images?.map((d, key) => (
                  <img key={`url_${key}_${index}`} src={d.img} alt='' className='w-[80px] h-[80px] m-[12px_8px_0px_0px]' />
                ))}
              </div>

              <hr className='border-[#1A1D21]' />
              <div className='flex flex-row p-[24px] justify-center'>
                <p className='text-white mr-2'>{item.msgCount}</p>
                <img className='w-[16px]' src={msg} alt='' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )

}

export default Category;