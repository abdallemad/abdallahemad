import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import Magnetic from "../globals/magnetic";
import BackDrop from "../globals/backdrop-slide";
import Menu from "./menu";
import { cn } from "@/lib/utils";
import { MenuButton } from "../ui/buttons";
import { anime } from "@/lib/utils";
import { FADE_IN_OUT, SCALE_UP_DOWN } from "@/lib/anim";

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
              {...anime(SCALE_UP_DOWN)}
              transition={{
                duration: 0.3,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="fixed w-fit top-14 left-14 z-[9999]"
            >
              <MenuButton close={close} isOpened={isOpened} />
            </motion.div>
          )
        }
      </AnimatePresence>
      <AnimatePresence mode="wait">{
        isOpened && (
          <>
            <Menu close={close} />
            <motion.div {...anime(FADE_IN_OUT)} onClick={close}  className="backdrop-menu"/>
          </>
        )
      }</AnimatePresence>
    </>
  );
}

export default CurvedMenu;
