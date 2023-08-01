import { 
  
  code, ImageIcon, MsgIcon, PresentationIcon,
  CopyIcon,
  ContentAvatar1, ContentAvatar2, FireIcon, NailIcon, FaceIcon,
  GlobalIcon, PadLock, arrow, arrow2, SelectedMsgIcon, chatImage
} from '../../Icons';

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

export const MainPageButtonMenu = [
  {
    img: code,
    name: 'Code',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
    url: '/personal-ai/code'
  },
  {
    img: PresentationIcon,
    name: 'Presentation',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
    url: '/personal-ai/presentation'
  },
  {
    img: MsgIcon,
    name: 'Blog Content',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
    url: '/personal-ai/blog-content'
  },
  {
    img: ImageIcon,
    name: 'Image',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
    url: '/personal-ai/images'
  },
];

export const BlogContentData = [
  {
    name: 'Name',
    desc: "Agreed. In the meantime, let's keep pushing forward with this episode. I think it's going to be a real crowd-pleaser.Lorem ipsum dolor sit amet, \n \n \n consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, ",
    time: "27.04.2023, 13:30",
    img: ContentAvatar1,
    copyIcon: CopyIcon,
    responses: [],
    icons: [FireIcon, NailIcon, FaceIcon]
  },
  {
    name: 'Name',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, ",
    time: "5 sec ago",
    img: ContentAvatar2,
    copyIcon: CopyIcon,
    responses: [],
    icons: []
  },
] 

export const LessionData = [
  {
    name: 'Lession Name',
    img: PadLock,
  },
  {
    name: 'Lession Name',
    img: GlobalIcon,
  },
  {
    name: 'Lession Name',
    img: GlobalIcon,
  },
  {
    name: 'Lession Name',
    img: GlobalIcon,
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