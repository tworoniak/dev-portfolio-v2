const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main id='main-content' className='relative mx-auto w-full px-6 py-20 text-white'>
      {children}
    </main>
  );
};

export default Main;
