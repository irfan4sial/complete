import React, { useState, useRef } from "react"

const Answer = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false)
  const [height, setHeight] = useState("0px")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
  }
  return (
    <div className='flex flex-col cursor-pointer mb-14' onClick={HandleOpening}>
      <h1 className='sm:text-[22px] text-[22px] mb-[12px] text-[#9B9C9E] font-[800]'>{title}</h1>
      <div
        ref={contentElement}
        style={{ height: height }}
        className=" bg-[#3D4245] rounded-[12px] overflow-hidden transition-all duration-200"
      >
        <p className="p-4 text-[16px] font-bold text-[#9B9C9E]">{content}</p>
      </div>  
    </div>
  )
}

export default Answer;
