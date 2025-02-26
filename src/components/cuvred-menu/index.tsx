import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import Magnetic from "../magnetic";
import BackDrop from "../ui/backdrop-slide";
import Menu from "./menu";
import { cn } from "@/lib/utils";
import { MenuButton } from "../ui/buttons";

interface Props {
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isOpened: boolean;
}
function CurvedMenu({ isOpened, setIsOpened }: Props) {
  // const [isOpened, setIsOpened] = useState(false);
  const close = () => setIsOpened(!isOpened)
  const [showSidebarButton, setShowSidebarButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setShowSidebarButton(true);
      else if (!isOpened) setShowSidebarButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpened]);
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <AnimatePresence mode="wait">
        {
          (showSidebarButton || isOpened) && (
            <motion.div
              variants={{
                show: { scale: 1, opacity: 1 },
                hide: { scale: 0, opacity: 0 },
              }}
              transition={{
                duration: 0.3,
                ease: [0.76, 0, 0.24, 1],
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed top-6 left-8 z-50"
            >
              <MenuButton close={close} isOpened={isOpened}/>
            </motion.div>
          )
        }
      </AnimatePresence>
      <AnimatePresence mode="wait">{isOpened && <Menu close={close} />}</AnimatePresence>
    </>
  );
}

export default CurvedMenu;
