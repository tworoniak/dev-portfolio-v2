const Header = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <div className='text-xl font-bold'>Woroniak.dev</div>

        <nav className='flex gap-6 text-sm text-zinc-400'>
          <a href='#'>Projects</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
