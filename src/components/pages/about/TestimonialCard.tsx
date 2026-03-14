import type { ReactNode } from 'react';

type GridCardProps = {
  children: ReactNode;
  className?: string;
};

const TestimonialCard = ({ children, className = '' }: GridCardProps) => {
  return (
    <div
      className={`relative cursor-pointer p-10 shadow-lg rounded-lg border border-white/10 bg-black/15 transition duration-300 hover:-translate-y-1.5 hover:bg-black/30 hover:border-white/30 ${className}`}
    >
      {children}
    </div>
  );
};

export default TestimonialCard;
