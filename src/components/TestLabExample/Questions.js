import React, { useState, useRef } from 'react';
import Answer from './Answer';

const data = [
  {
    question: 'Question 1',
    desc: 'What is the primary goal of Six Sigma methodology?',
    options: [
      {
        option: 'a) Reduce process variability',
        status: false,
        name: 'question1',
        value: 'a'
      },
      {
        option: 'b) Improve customer satisfaction',
        status: false,
        name: 'question1',
        value: 'b'
      },
      {
        option: 'c) Increase operational efficiency',
        status: false,
        name: 'question1',
        value: 'c'
      },
      {
        option: 'd) Enhance employee morale',
        status: false,
        name: 'question1',
        value: 'd'
      },
    ]
  },
  {
    question: 'Question 2',
    desc: 'Which of the following tools is commonly used to analyze process data and identify potential improvement opportunities in Six Sigma?',
    options: [
      {
        option: 'a) Reduce process variability',
        status: false,
        name: 'question2',
        value: 'a'
      },
      {
        option: 'b) Improve customer satisfaction',
        status: false,
        name: 'question2',
        value: 'b'
      },
      {
        option: 'c) Increase operational efficiency',
        status: false,
        name: 'question2',
        value: 'c'
      },
      {
        option: 'd) Enhance employee morale',
        status: false,
        name: 'question2',
        value: 'd'
      },
    ]
  },
];


const Questions = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    console.log('event =>' , event.target.value);
    setSelected(event.target.value)
  }

  const [isOpened, setOpened] = useState(false)
  const [height, setHeight] = useState("0px")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
  }


  return (
    <div className='bg-[#363A3D]'>
      {data.map((item, key) => (
        <div className='w-[100%]' key={`data-${key}`}>
          <h1 className='sm:text-[22px] text-[22px] mb-[12px] text-[#B6F09C] font-[800]'>{item.question}</h1>
          <p className='md:w-[100%] lg:w-[100%] sm:text-[20px] text-[20px] font-[400] tracking-[.15px] leading-[30px] text-white'>{item.desc}</p>
          <div className='pl-[30px] mt-2 mb-10'>
            {item.options.map((option, index) => (
              <div className='flex flex-row justify-between' key={`option-${index}`}>
                <p className='mt-3 text-[20px] font-[400] text-white leading-[30px]'>{option.option}</p>
                <div className="flex items-center mr-4 mb-4">
                  <input id={`${option.name}_${index}`} type="radio" name={option.name} className="hidden" value={option.value} onChange={handleChange} />
                  <label htmlFor={`${option.name}_${index}`} className="flex items-center cursor-pointer text-xl">
                    <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          <Answer title="Show Answer"  content="Answer: a"/>
        </div>
      ))}
    </div>
  )
}

export default Questions