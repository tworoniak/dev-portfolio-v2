import StackIcon from 'tech-stack-icons';

const TechStackSection = () => {
  return (
    <section className='flex flex-col gap-2 mx-auto max-w-7xl px-6 py-12'>
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
        Tech Stack
      </p>
      <div className='grid grid-cols-3 md:grid-cols-6 lg:flex gap-8 mt-4 rounded-lg border border-white/10 p-4 bg-black/15'>
        <StackIcon name='react' />
        <StackIcon name='reactquery' />
        <StackIcon name='reactrouter' />
        <StackIcon name='redux' />
        <StackIcon name='typescript' />
        <StackIcon name='tanstack' />
        <StackIcon name='clerk' variant='dark' />
        <StackIcon name='figma' />
        <StackIcon name='html5' />
        <StackIcon name='css3' />
        <StackIcon name='json' />
        <StackIcon name='nextjs' variant='dark' />
        <StackIcon name='nodejs' />
        <StackIcon name='vitejs' />
        <StackIcon name='vercel' variant='dark' />
        <StackIcon name='materialui' />
        <StackIcon name='radixui' variant='dark' />
        <StackIcon name='vscode' />
        <StackIcon name='claude' />
        {/* <StackIcon name='php' />
        <StackIcon name='wordpress' /> */}
      </div>
    </section>
  );
};

export default TechStackSection;
