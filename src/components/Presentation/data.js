import arrow from '../../Assets/svg/arrow-right-gray.svg';
import arrow2 from '../../Assets/svg/arrow.svg';
import code from '../../Assets/svg/code.svg';
import msg from '../../Assets/svg/blogcontent.svg';
import selectPresent from '../../Assets/svg/selectPresent.svg';
import chatImage from '../../Assets/svg/image.png';
import AprImage1 from '../../Assets/svg/12_apr_1.svg';
import AprImage2 from '../../Assets/svg/12_apr_2.svg';
import AprImage3 from '../../Assets/svg/12_apr_3.svg';
import JabraImage1 from '../../Assets/svg/jabra_1.svg';
import JabraImage2 from '../../Assets/svg/jabra_2.svg';
import JabraImage3 from '../../Assets/svg/jabra_3.svg';

export const BtnMenu = [
  {
    btn: 'Code',
    color: '#fff',
    leftIcon: code,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))'
  },
  {
    btn: 'Presentation',
    color: '#000',
    leftIcon: selectPresent,
    img: arrow2,
    bgColor: 'var(--gradients-green-blue-day-blue-500, linear-gradient(225deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%))'
  },
  {
    btn: 'Blog Content',
    color: '#fff',
    leftIcon: msg,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))'
  },
  {
    btn: 'Image',
    color: '#fff',
    leftIcon: chatImage,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))'
  }
];

export const ImagesData = [
  {
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    msgCount: 12,
    images: [
      {
        img: JabraImage1
      },
      {
        img: JabraImage2
      },
      {
        img: JabraImage3
      }
    ]
  },
  {
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    msgCount:27,
    images: [
      {
        img: AprImage1
      },
      {
        img: AprImage2
      },
      {
        img: AprImage3
      }
    ]
  }
]

export const DocumentData = [
  {
    title: 'Title',
    desc: '3 documents, 43832 words',
    msgCount: 0,
    images: []
  },
  {
    title: 'Title',
    desc: '1 document, 18745 words',
    msgCount: 0,
    images: []
  },
  {
    title: 'Title',
    desc: '5 documents, 23992 words',
    msgCount: 0,
    images: []
  },
  {
    title: 'Title',
    desc: '2 documents, 10384 words',
    msgCount: 0,
    images: []
  }
]

export const IdeasData = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    desc: '',
    msgCount: 0,
    images: []
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    desc: '1 document, 18745 words',
    msgCount: 0,
    images: []
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    desc: '',
    msgCount: 0,
    images: []
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    desc: '2 documents, 10384 words',
    msgCount: 0,
    images: []
  }
]

