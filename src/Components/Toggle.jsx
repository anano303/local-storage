import React from "react";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
import useDetectDevice from "./useDetectDevice";

const Toggle = () => {
  const [isOpen, toggled] = useLocalStorage("stor", true);
  const isDesktop = useDetectDevice();

  useEffect(() => {
    if (isOpen && isDesktop) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "rgb(200, 227, 153)";
    }

    return () => {
      document.body.style.backgroundColor = "rgb(200, 227, 153)";
    };
  }, [isOpen, isDesktop]);

  return (
    <div className="toggle">
      <button onClick={() => toggled((prevState) => !prevState)}>
        T O G G L E / T H E M E
      </button>
    </div>
  );
};

export default Toggle;
