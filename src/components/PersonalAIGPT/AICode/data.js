import { 
  MsgIcon, arrow, arrow2, code,
  selectPresent, chatImage
} from '../../Icons';

export const ImagesAction = [
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