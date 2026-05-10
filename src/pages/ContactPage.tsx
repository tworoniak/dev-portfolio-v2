import PageTitle from '../components/ui/PageTitle';
import ContactForm from '../components/pages/contact/ContactForm';
import ContactHero from '../components/pages/contact/ContactHero';

const ContactPage = () => {
  return (
    <>
      <PageTitle title='Contact' />
      <ContactHero />
      <section className='mx-auto max-w-7xl px-2 sm:px-6 pb-20'>
        <div id='contact-form' className='max-w-lg'>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
