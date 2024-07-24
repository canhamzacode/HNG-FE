import { ReactElement } from 'react';
import {
  FaDev,
  FaFacebook,
  FaFreeCodeCamp,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaStackOverflow,
  FaTwitch,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { SiCodewars, SiFrontendmentor } from 'react-icons/si';

interface PlatformProps {
  name: string;
  icon: ReactElement;
  previewColor: string;
}

export const platforms: PlatformProps[] = [
  {
    name: 'GitHub',
    icon: <FaGithub size={25} />,
    previewColor: '#1A1A1A'
  },
  {
    name: 'Frontend Mentor',
    icon: <SiFrontendmentor size={25} />,
    previewColor: '#FFFFFF'
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={25} />,
    previewColor: '#43B7E9'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={25} />,
    previewColor: '#2D68FF'
  },
  {
    name: 'Youtube',
    icon: <FaYoutube size={25} />,
    previewColor: '#EE3939'
  },
  {
    name: 'Facebook',
    icon: <FaFacebook size={25} />,
    previewColor: '#2442AC'
  },
  {
    name: 'Twitch',
    icon: <FaTwitch size={25} />,
    previewColor: '#EE3FC8'
  },
  {
    name: 'Dev.To',
    icon: <FaDev size={25} />,
    previewColor: '#333333'
  },
  {
    name: 'Codewars',
    icon: <SiCodewars size={25} />,
    previewColor: '#8A1A50'
  },
  {
    name: 'Freecodecamp',
    icon: <FaFreeCodeCamp size={25} />,
    previewColor: '#302267'
  },
  {
    name: 'GitLab',
    icon: <FaGitlab size={25} />,
    previewColor: '#EB4925'
  },
  {
    name: 'Hashnode',
    icon: <FaHashnode size={25} />,
    previewColor: '#0330D1'
  },
  {
    name: 'Stack Overflow',
    icon: <FaStackOverflow size={25} />,
    previewColor: '#EC7100'
  }
];
