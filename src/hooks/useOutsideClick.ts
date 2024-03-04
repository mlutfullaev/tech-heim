import { useEffect } from 'react'

export const useOutsideClick = (className: string, callback: () => void): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickInside = (event.target as HTMLElement).closest(`.${className}`)
      if (!isClickInside) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [className, callback]);
};
