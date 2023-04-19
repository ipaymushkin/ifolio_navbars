import React, { createRef, useEffect } from 'react';

export const useOutsideClick = (callback) => {
  const ref = createRef();

  const listener = (e) => {
    if (ref.current && !ref?.current.contains(e.target) && !e.target.closest('[data-mobile-menu-button]')) {
      callback(e, ref.current);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  });

  return ref;
};
