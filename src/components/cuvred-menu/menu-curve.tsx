import { Variants, motion } from "motion/react";
import React, { useEffect, useState } from "react";

function MenuCurve() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const initialPath = `
  M-000 0 
  L-100 0 
  L-100 ${height} 
  L00 ${height} 
  Q150 ${height / 2} -00 0
  `;
  const targetPath = `
  M-00 0 
  L-100 0 
  L-100 ${height} 
  L-00 ${height} 
  Q-00 ${height / 2} -00 0
  `;
  const curve: Variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg className="curve">
      {height && (
        <motion.path
          variants={curve}
          initial="initial"
          animate="enter"
          exit="exit"
        />
      )}
    </svg>
  );
}

export default MenuCurve;
