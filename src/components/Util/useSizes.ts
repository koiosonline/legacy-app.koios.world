import { useEffect, useState } from "react";

type useSizesReturnProps = {
  width: number;
};

export const useSizes = (): useSizesReturnProps => {
  const [width, setWidth] = useState(window.innerWidth);

  const onWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return { width };
};
