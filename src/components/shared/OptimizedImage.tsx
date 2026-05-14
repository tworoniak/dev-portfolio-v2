type OptimizedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

function toWebp(src: string) {
  return src.replace(/\.(png|jpe?g)$/i, '.webp');
}

function toAvif(src: string) {
  return src.replace(/\.(png|jpe?g)$/i, '.avif');
}

const OptimizedImage = ({ src, alt, className, ...rest }: OptimizedImageProps) => {
  if (!src || !src.startsWith('/images/')) {
    return <img src={src} alt={alt} className={className} {...rest} />;
  }

  return (
    <picture>
      <source srcSet={toAvif(src)} type='image/avif' />
      <source srcSet={toWebp(src)} type='image/webp' />
      <img src={src} alt={alt} className={className} {...rest} />
    </picture>
  );
};

export default OptimizedImage;
