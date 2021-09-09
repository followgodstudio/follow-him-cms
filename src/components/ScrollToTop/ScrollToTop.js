import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This is a utility component that scrolls a page to the top whenever the URL changes.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
