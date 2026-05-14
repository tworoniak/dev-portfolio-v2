import { motion } from 'framer-motion';

function toWebp(src: string) {
  return src.replace(/\.(png|jpe?g)$/i, '.webp');
}

function toAvif(src: string) {
  return src.replace(/\.(png|jpe?g)$/i, '.avif');
}

type Screenshot = { src: string; alt: string };

type ScreenshotGalleryProps = {
  screenshots: Screenshot[];
  onOpen: (index: number) => void;
  thumbnailRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
};

const ScreenshotGallery = ({
  screenshots,
  onOpen,
  thumbnailRefs,
}: ScreenshotGalleryProps) => {
  return (
    <section aria-label='Screenshots' className='space-y-4'>
      <h2 className='text-2xl font-semibold'>Screenshots</h2>

      <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            ref={(el) => {
              thumbnailRefs.current[i] = el;
            }}
            type='button'
            onClick={() => onOpen(i)}
            aria-label={`View screenshot: ${shot.alt}`}
            className='overflow-hidden rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-200 dark:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
          >
            <motion.picture
              layoutId={`screenshot-${shot.src}`}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className='block h-full w-full'
            >
              <source srcSet={toAvif(shot.src)} type='image/avif' />
              <source srcSet={toWebp(shot.src)} type='image/webp' />
              <img
                src={shot.src}
                alt={shot.alt}
                className='h-full w-full object-cover object-center'
              />
            </motion.picture>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ScreenshotGallery;
