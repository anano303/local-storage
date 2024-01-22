import React from "react";
import { useEffect, useState } from "react";

const mobile = 500;
const detectDevice = () => {
  return window.innerWidth >= mobile ? true : false;
};
const useDetectDevice = () => {
  const [device, setDevice] = useState(() => detectDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(detectDevice());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return device;
};

export default useDetectDevice;
