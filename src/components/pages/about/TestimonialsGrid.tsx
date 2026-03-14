import { Quote } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const TestimonialGrid = () => {
  return (
    <section className='mx-auto max-w-7xl px-6 py-12 md:px-6 md:py-10'>
      {/* Global Container */}
      <div className='mx-auto p-2'>
        {/* Heading Container */}
        <p className='text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4'>
          Testimonials
        </p>
        {/* Grid Container */}
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 text-white'>
          {/* Box 1 */}
          <TestimonialCard className='lg:col-span-1 xl:col-span-2'>
            {/* Quotes Image */}
            <Quote
              size={96}
              className='absolute top-3 right-5 scale-125 md:top-7 md:right-24 md:scale-125 text-white/5 w-25 h-25'
            />

            {/* Box Header */}
            <div className='flex z-10 space-x-4'>
              <img
                src='images/testimonials/image-jessica.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-subtle'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Jessica Ralston, PMP</h4>
                <p className='opacity-50'>
                  Sr. Director, Development at EVERSANA INTOUCH
                </p>
              </div>
            </div>

            {/* Small Text */}
            <p className='mt-6 opacity-50 '>
              "As Thomas Woroniak’s Director at Eversana Intouch, I had the
              opportunity to oversee his work as a Front-End Developer starting
              in 2020. Thomas consistently delivered high-quality results across
              complex initiatives, demonstrating strong expertise in .NET-based
              environments, React, JavaScript, CSS, and Git-driven workflows. He
              is highly reliable, detail-oriented, and effective at managing
              multiple priorities while maintaining delivery standards. Thomas
              communicates proactively, adapts quickly to evolving project
              demands, and brings a professional, collaborative approach to
              every engagement. He is a dependable developer who adds immediate
              value to development teams, and I would confidently recommend him
              to any organization seeking a strong front-end development
              professional."
            </p>
          </TestimonialCard>

          {/* Box 2 */}
          <TestimonialCard className='lg:col-span-1 xl:col-span-1'>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/testimonials/image-kevin.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-faint'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Kevin Wagner</h4>
                <p className='opacity-50'>
                  Delivery Manager for Eversana Intouch
                </p>
              </div>
            </div>
            {/* Small Text */}
            <p className='mt-6 opacity-50 '>
              "Thomas and I worked together as Front-End Developers at Eversana
              Intouch. Thomas brought a calm demeanor along with his dependable
              and capable skills to our team. By modeling his pressionalism
              Thomas helped build a healthy culture for our group. I would
              recommend Thomas as somebody who can contribute his Front-End
              skills to meet client needs while also being a positive addition
              to any team's culture."
            </p>
          </TestimonialCard>

          {/* Box 3 */}
          <TestimonialCard className='lg:col-span-2 xl:col-span-1 xl:row-span-2'>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/testimonials/image-michael.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-subtle'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Michael Blake</h4>
                <p className='opacity-50'>
                  SVP, Development and Quality Services
                </p>
              </div>
            </div>

            {/* Small Text */}
            <p className='mt-6 opacity-50'>
              "I had the pleasure of working with Thomas Woroniak at Eversana
              Intouch, where he joined our team in August 2020 as a Front-End
              Developer. Thomas brought a strong work ethic to the group,
              working largely in the .NET realm and demonstrating solid
              expertise with Git, CSS, React, and other JavaScript libraries.
              His ability to take on complex assignments—often several at
              once—and consistently deliver high‑quality work made him an
              invaluable contributor.
            </p>
            <p className='mt-6 opacity-50'>
              Thomas is the definition of dependable. He approaches every task
              with focus and precision, especially when the smallest details
              carry the greatest importance. His proactive communication,
              motivation, and genuine engagement in his work earned the trust
              and respect of everyone around him. He also showed tremendous
              flexibility in his schedule, always willing to adjust to support
              critical project timelines and ensure our delivery efforts were
              successful.
            </p>
            <p className='mt-6 opacity-50'>
              Working with Thomas was truly a pleasure. He brings technical
              talent, professionalism, and a collaborative spirit to any team. I
              would absolutely recommend him as an asset to any development
              organization, and I sincerely hope I have the opportunity to work
              with him again in the future."
            </p>
          </TestimonialCard>

          {/* Box 4 */}
          <TestimonialCard>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/testimonials/image-shefali.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-subtle'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Shefali Shrungarpawar</h4>
                <p className='opacity-50'>
                  Engineering Manager with 10+ years of experience | Experienced
                  in Agile and Scrum Methodologies | Delivering High-Quality
                  Products | AWS AI Certified
                </p>
              </div>
            </div>

            {/* Small Text */}
            <p className='mt-6 opacity-50'>
              "At EVERSANA INTOUCH, Thomas was a key Front-End Developer on
              projects I led, and I had the chance to collaborate closely with
              him. He brings extensive experience in HTML, CSS, JavaScript, and
              React, consistently delivering scalable, high-performance web
              applications.
            </p>
            <p className='mt-6 opacity-50'>
              Thomas partnered effectively with designers, project managers and
              backend engineers to create accessible, user-focused digital
              experiences. He demonstrates strong ownership, collaboration, and
              reliability, and I highly recommend him as a valuable addition to
              any front-end team."
            </p>
          </TestimonialCard>

          {/* Box 5 */}
          <TestimonialCard className='lg:col-span-1 xl:col-span-2'>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/testimonials/image-owen.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-subtle'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Owen Oliver</h4>
                <p className='opacity-50'>
                  Development Team Lead at EVERSANA INTOUCH
                </p>
              </div>
            </div>

            {/* Small Text */}
            <p className='mt-6 opacity-50'>
              "I had the pleasure of managing Thomas during his time as a
              Frontend Developer on our team, and he consistently proved himself
              to be a reliable and highly motivated contributor. From day one,
              he demonstrated a strong eagerness to learn and a genuine drive to
              grow his skill set, often seeking out feedback and asking
              thoughtful questions that elevated both his work and the team’s
              overall output.
            </p>
            <p className='mt-6 opacity-50'>
              What stood out most was his commitment to delivering high‑quality
              code and meeting deadlines without sacrificing attention to
              detail. He approached every project with professionalism,
              curiosity, and a willingness to take on new challenges. His
              reliability made him someone I could always count on, and his
              proactive mindset helped streamline collaboration across the team.
            </p>
            <p className='mt-6 opacity-50'>
              Thomas would be an asset to any organization looking for a
              frontend developer who is dedicated, growth‑oriented, and
              consistently delivers strong results. I’m confident he will
              continue to excel in his career, and I fully recommend him for any
              future opportunities."
            </p>
          </TestimonialCard>
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
