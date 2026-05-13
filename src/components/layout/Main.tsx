const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main id='main-content' className='relative w-full text-zinc-900 dark:text-white'>
      {children}
    </main>
  );
};

export default Main;
