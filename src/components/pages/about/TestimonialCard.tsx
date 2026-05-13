import type { ReactNode } from 'react';

type GridCardProps = {
  children: ReactNode;
  className?: string;
};

const TestimonialCard = ({ children, className = '' }: GridCardProps) => {
  return (
    <div
      className={`relative p-10 shadow-lg card ${className}`}
    >
      {children}
    </div>
  );
};

export default TestimonialCard;
