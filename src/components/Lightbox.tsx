import React, { useState } from 'react';
import { LightboxProps } from '../types/data';

const LightBox = ({ children, src, alt }: LightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lightbox" onClick={toggleIsOpen}>
      {children}
      {isOpen ? (
        <div className="lightbox__box" onClick={toggleIsOpen}>
          <img className="lightbox__image" src={src} alt={alt} />
        </div>
      ) : null}
    </div>
  );
};

export default LightBox;
