import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='mx-auto max-w-7xl px-6 py-10 text-sm text-zinc-500 flex items-center gap-4 justify-center'>
      <a
        href='https://github.com/tworoniak'
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2'
      >
        <Github size={16} strokeWidth={1.5} />
        GitHub
      </a>
      <a
        href='https://www.linkedin.com/in/thomasworoniak/'
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2'
      >
        <Linkedin size={16} strokeWidth={1.5} />
        LinkedIn
      </a>
      <a
        href='mailto:thomasworoniak@gmail.com'
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2'
      >
        <Mail size={16} strokeWidth={1.5} />
        thomasworoniak@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
