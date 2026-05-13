import { useEffect, useRef, useState } from 'react';
import { useAccentColor } from '../../../hooks/useAccentColor';

const contactRows: { label: string; value: string; href: string | null }[] = [
  {
    label: 'EMAIL',
    value: 'thomas@woroniak.dev',
    href: 'mailto:thomas@woroniak.dev',
  },
  {
    label: 'GITHUB',
    value: 'github.com/tworoniak',
    href: 'https://github.com/tworoniak',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/thomasworoniak',
    href: 'https://www.linkedin.com/in/thomasworoniak/',
  },
  { label: 'LOCATION', value: 'Kansas City, MO · UTC−6', href: null },
];

const ContactFooter = () => {
  const [copied, setCopied] = useState(false);
  const { accent } = useAccentColor();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('thomas@woroniak.dev');
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 py-24'>
        <div className='grid gap-16 lg:grid-cols-2 lg:items-center'>
          {/* Left column */}
          <div>
            <p className='mb-4 text-xs uppercase tracking-widest text-zinc-400 dark:text-white/40'>
              / Get in Touch
            </p>
            <h2 className='mb-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white md:text-5xl lg:text-6xl'>
              Got something{' '}
              <em className='font-serif' style={{ color: accent }}>
                tricky
              </em>{' '}
              to build?
            </h2>
            <p className='mb-10 max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400'>
              I reply to every message within a day. Tell me what you&rsquo;re
              working on &mdash; I&rsquo;ll tell you how I&rsquo;d approach it.
            </p>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
              <a
                href='mailto:thomas@woroniak.dev'
                className='inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100'
              >
                Start a conversation →
              </a>
              <button
                type='button'
                onClick={handleCopyEmail}
                className='inline-flex items-center justify-center rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-200 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5'
              >
                {copied ? 'Copied!' : 'Copy email'}
              </button>
              <a
                href='/resume/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center px-2 py-2.5 text-sm font-semibold text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              >
                Résumé ↗
              </a>
            </div>
          </div>

          {/* Right column — contact rows */}
          <div className='divide-y divide-zinc-200 dark:divide-white/10'>
            {contactRows.map(({ label, value, href }) => {
              const inner = (
                <>
                  <span className='font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-white/30'>
                    {label}
                  </span>
                  <span className='flex items-center gap-3'>
                    <span className='text-sm text-zinc-700 dark:text-white/80'>
                      {value}
                    </span>
                    {href && (
                      <span className='text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-zinc-900 dark:text-white/30 dark:group-hover:text-white'>
                        →
                      </span>
                    )}
                  </span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={
                    href.startsWith('mailto')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className='group flex items-center justify-between px-4 py-5 transition-colors hover:bg-zinc-200/60 dark:hover:bg-white/5'
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={label}
                  className='flex items-center justify-between px-4 py-5'
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
