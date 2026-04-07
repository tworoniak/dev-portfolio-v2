import PageTitle from '../components/ui/PageTitle';
import ContactForm from '../components/pages/contact/ContactForm';

const ContactPage = () => {
  return (
    <>
      <PageTitle title='Contact' />
      <section className='mx-auto max-w-7xl px-2 sm:px-6 py-12'>
        <h1 className='text-4xl font-bold leading-tight'>Get in touch</h1>
        <p className='mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
          I'm open to new opportunities, collaborations, and interesting conversations.
          Drop me a message and I'll get back to you.
        </p>

        <div className='mt-10 max-w-lg'>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
