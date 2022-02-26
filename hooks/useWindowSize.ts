import { useState, useEffect } from "react";

export default function useWindowSize() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const windowWidth: number | null = hasWindow ? window.innerWidth : null;
    const windowHeight: number | null = hasWindow ? window.innerHeight : null;
    return {
      windowWidth,
      windowHeight,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow]);

  return windowDimensions;
}
