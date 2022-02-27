import { useState, useEffect } from "react";

export default function useWindowSize() {
  const hasWindow: boolean = typeof window !== "undefined";

  function getWindowDimensions() {
    const windowWidth: number | undefined = hasWindow
      ? window.innerWidth
      : undefined;
    const windowHeight: number | undefined = hasWindow
      ? window.innerHeight
      : undefined;
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
