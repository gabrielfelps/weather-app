import { useEffect } from 'react';

function useClickOutside(ref, fn) {
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref?.current?.contains(e.target)) fn();
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [ref, fn]);
}

export default useClickOutside;
