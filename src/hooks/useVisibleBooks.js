import { useState, useEffect } from "react";

export const useVisibleBooks = () => {
  const getLimit = () => {
    if (window.innerWidth >= 1440) return 10;
    if (window.innerWidth >= 768) return 8;
    return 2;
  };

  const [visibleCount, setVisibleCount] = useState(getLimit);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getLimit());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visibleCount;
};