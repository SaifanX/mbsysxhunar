
import { useEffect } from 'react';
// Changed import from react-router-dom to react-router to fix missing export errors
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll adds a subtle animation as the user is brought to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
