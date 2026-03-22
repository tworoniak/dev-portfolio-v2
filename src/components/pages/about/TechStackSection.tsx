import StackIcon from 'tech-stack-icons';

const TechStackSection = () => {
  return (
    <section className='flex flex-col gap-2 mx-auto max-w-7xl px-6 py-12'>
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
        Tech Stack
      </p>
      <div className='grid grid-cols-3 md:grid-cols-6 lg:flex gap-8 mt-4 rounded-lg border border-white/10 p-4 bg-black/15'>
        <figure role='img' aria-label='React logo' title='React'>
          <StackIcon name='react' />
        </figure>
        <figure role='img' aria-label='React Query logo' title='React Query'>
          <StackIcon name='reactquery' />
        </figure>
        <figure role='img' aria-label='React Router logo' title='React Router'>
          <StackIcon name='reactrouter' variant='dark' />
        </figure>
        <figure role='img' aria-label='Redux logo' title='Redux'>
          <StackIcon name='redux' />
        </figure>
        <figure role='img' aria-label='TypeScript logo' title='TypeScript'>
          <StackIcon name='typescript' />
        </figure>
        <figure role='img' aria-label='Tailwind CSS logo' title='Tailwind CSS'>
          <StackIcon name='tailwindcss' />
        </figure>
        <figure role='img' aria-label='Tanstack logo' title='Tanstack'>
          <StackIcon name='tanstack' />
        </figure>
        <figure role='img' aria-label='Supabase logo' title='Supabase'>
          <StackIcon name='supabase' />
        </figure>
        <figure role='img' aria-label='Clerk logo' title='Clerk'>
          <StackIcon name='clerk' variant='dark' />
        </figure>
        <figure role='img' aria-label='HTML5 logo' title='HTML5'>
          <StackIcon name='html5' />
        </figure>
        <figure role='img' aria-label='CSS3 logo' title='CSS3'>
          <StackIcon name='css3' />
        </figure>
        <figure role='img' aria-label='JSON logo' title='JSON'>
          <StackIcon name='json' />
        </figure>
        <figure role='img' aria-label='NextJS logo' title='NextJS'>
          <StackIcon name='nextjs' variant='dark' />
        </figure>
        <figure role='img' aria-label='NodeJS logo' title='NodeJS'>
          <StackIcon name='nodejs' />
        </figure>
        <figure role='img' aria-label='Vite logo' title='Vite'>
          <StackIcon name='vitejs' />
        </figure>
        <figure role='img' aria-label='Vercel logo' title='Vercel'>
          <StackIcon name='vercel' variant='dark' />
        </figure>
        <figure role='img' aria-label='Material UI logo' title='Material UI'>
          <StackIcon name='materialui' />
        </figure>
        <figure role='img' aria-label='Radix UI logo' title='Radix UI'>
          <StackIcon name='radixui' variant='dark' />
        </figure>
        <figure role='img' aria-label='VS Code logo' title='VS Code'>
          <StackIcon name='vscode' />
        </figure>
        <figure role='img' aria-label='Figma logo' title='Figma'>
          <StackIcon name='figma' />
        </figure>
        <figure role='img' aria-label='Claude AI logo' title='Claude AI'>
          <StackIcon name='claude' />
        </figure>
        <figure role='img' aria-label='Cursor AI logo' title='Cursor AI'>
          <StackIcon name='cursor' variant='dark' />
        </figure>
        {/* <StackIcon name='php' />
        <StackIcon name='wordpress' /> */}
      </div>
    </section>
  );
};

export default TechStackSection;
