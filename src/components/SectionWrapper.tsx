import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', style = {} }) => {
  return (
    <section id={id} className={`py-24 relative ${className}`} style={style}>
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

