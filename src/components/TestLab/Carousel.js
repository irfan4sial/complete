import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scroll-menu';
 
const MenuItem = ({item}) => {
  return(
    <div className='w-[183px] h-[171px] rounded-[12px] border-[1px 0px 0px 0px] bg-[#3D4245] ml-[12px] mr-[12px]'>
      <div className='flex items-center justify-center pt-[20px]'><img src={item.img} alt='arrow' className='w-[43px] h-[35px]' /></div>
      <div className='pt-[8px] font-bold text-white'>{item.name}</div>
      <div className='p-[8px] text-[12px] text-[#A8A8A8] whitespace-normal'>{item.desc}</div> 
    </div> 
  );
};
 
export const Menu = (list) =>
  list.map((el, index) => {
    const {name} = el;
 
    return <MenuItem item={el} key={`${name}_${index}`} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '←', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '→', className: 'arrow-next' });

 
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(this.props.data);
  }
 
  state = {
    // 
  };
 
  render() {
    const menu = this.menuItems;
    return (
      <div className="w-[900px] h-[175px] m-[0px_18px]">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          wheel={false}
          showList={false}
          slowdownFactor={0.25}
        />
      </div>
    );
  }
}