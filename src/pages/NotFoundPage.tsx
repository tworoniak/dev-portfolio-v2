import { Link } from 'react-router-dom';
import PageTitle from '../components/ui/PageTitle';

const NotFoundPage = () => (
  <div className='flex flex-col items-center justify-center min-h-[60vh] px-6 text-center'>
    <PageTitle title='404 — Page Not Found' />
    <p className='text-8xl font-bold text-zinc-200 dark:text-white/10 select-none'>404</p>
    <h1 className='mt-4 text-2xl font-semibold text-zinc-900 dark:text-white'>Page not found</h1>
    <p className='mt-2 text-zinc-500 dark:text-zinc-400'>
      The page you're looking for doesn't exist.
    </p>
    <Link
      to='/'
      className='mt-8 inline-flex items-center gap-2 rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
    >
      Go home
    </Link>
  </div>
);

export default NotFoundPage;
