import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 right-0 mx-auto w-full px-6 py-4 text-sm text-zinc-500 flex items-center gap-4 justify-between bg-black/75 backdrop-blur-sm border-t border-white/10'>
      <div className='flex items-center gap-6'>
        <a
          href='https://github.com/tworoniak'
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2 hover:text-white/70 duration-300 transition'
        >
          <Github size={16} strokeWidth={1.5} />
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/thomasworoniak/'
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2 hover:text-white/70 duration-300 transition'
        >
          <Linkedin size={16} strokeWidth={1.5} />
          LinkedIn
        </a>
        <a
          href='mailto:thomasworoniak@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2 hover:text-white/70 duration-300 transition'
        >
          <Mail size={16} strokeWidth={1.5} />
          thomasworoniak@gmail.com
        </a>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()} Thomas Woroniak. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
