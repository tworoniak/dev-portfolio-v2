import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const inputClass =
  'w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-white/30 focus:bg-white/8 focus:outline-none';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormState('submitting');
    setErrorMessage('');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setFormState('success');
      formRef.current.reset();
    } catch {
      setFormState('error');
      setErrorMessage('Something went wrong. Please try emailing me directly.');
    }
  };

  if (formState === 'success') {
    return (
      <div
        role='status'
        className='flex flex-col items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-8 py-12 text-center'
      >
        <CheckCircle size={40} strokeWidth={1.5} className='text-emerald-400' />
        <h2 className='text-xl font-semibold'>Message sent</h2>
        <p className='text-sm text-zinc-400'>Thanks — I'll get back to you soon.</p>
        <button
          onClick={() => setFormState('idle')}
          className='mt-2 text-sm text-zinc-400 underline underline-offset-4 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50'
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className='flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='contact-name' className='text-sm text-zinc-400'>
          Name
        </label>
        <input
          id='contact-name'
          name='from_name'
          type='text'
          required
          minLength={2}
          autoComplete='name'
          placeholder='Your name'
          className={inputClass}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='contact-email' className='text-sm text-zinc-400'>
          Email
        </label>
        <input
          id='contact-email'
          name='reply_to'
          type='email'
          required
          autoComplete='email'
          placeholder='you@example.com'
          className={inputClass}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='contact-message' className='text-sm text-zinc-400'>
          Message
        </label>
        <textarea
          id='contact-message'
          name='message'
          required
          minLength={10}
          rows={6}
          placeholder='What would you like to discuss?'
          className={`${inputClass} resize-none`}
        />
      </div>

      {formState === 'error' && (
        <div
          role='alert'
          className='flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400'
        >
          <AlertCircle size={16} strokeWidth={1.5} className='shrink-0' />
          {errorMessage}
        </div>
      )}

      <button
        type='submit'
        disabled={formState === 'submitting'}
        className='flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50'
      >
        {formState === 'submitting' ? (
          <>
            <Loader size={16} strokeWidth={1.5} className='animate-spin' />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} strokeWidth={1.5} />
            Send message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
