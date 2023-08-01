import { 
  PresentationIcon, SelectedMsgIcon, MsgIcon, arrow, arrow2, code,
  selectPresent, chatImage, AprImage1, AprImage2, AprImage3, JabraImage1, JabraImage2, JabraImage3
} from '../../Icons';

export const BtnMenu = [
  {
    btn: 'Code',
    color: '#fff',
    leftIcon: code,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))',
    url: '/personal-ai/code'
  },
  {
    btn: 'Presentation',
    color: '#000',
    leftIcon: selectPresent,
    img: arrow2,
    bgColor: 'var(--gradients-green-blue-day-blue-500, linear-gradient(225deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%))',
    url: '/personal-ai/presentation'
  },
  {
    btn: 'Blog Content',
    color: '#fff',
    leftIcon: MsgIcon,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))',
    url: '/personal-ai/blog-content'
  },
  {
    btn: 'Image',
    color: '#fff',
    leftIcon: chatImage,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))',
    url: '/personal-ai/images'
  }
];

export const BlogContentMenu = [
  {
    btn: 'Code',
    color: '#fff',
    leftIcon: code,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))',
    url: '/personal-ai/code'
  },
  {
    btn: 'Presentation',
    color: '#fff',
    leftIcon: PresentationIcon,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))',
    url: '/personal-ai/presentation'
  },
  {
    btn: 'Blog Content',
    color: '#000',
    leftIcon: SelectedMsgIcon,
    img: arrow2,
    bgColor: 'var(--gradients-green-blue-day-blue-500, linear-gradient(225deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%))',
    url: '/personal-ai/blog-content'
  },
  {
    btn: 'Image',
    color: '#fff',
    leftIcon: chatImage,
    img: arrow,
    bgColor: 'var(--glass-fill, linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%))',
    url: '/personal-ai/images'
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

