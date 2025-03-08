import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import MenuCurve from "./menu-curve";
import Magnetic from "../globals/magnetic";
import { easeInOutQuint, navLinks } from "@/lib/constants";
import Link from "next/link";
import Socials from "../globals/socials";
import { anime, cn } from "@/lib/utils";
import { links, variantsSlide } from "@/lib/anim";
import { usePathname } from "next/navigation";
import { Dot } from "../globals/dot";

function Menu({ close }: { close: () => void }) {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<null | string>(null)
  return (
    <motion.aside
      {...anime(variantsSlide)}
      transition={{
        duration: 0.7,
        ease: [0.83, 0, 0.17, 1],
      }}
      className="curve-menu"
    >
      <div className="menu-container ">
        <div className="flex flex-col">
          <h1>التَّصفُح</h1>
          <div className="menu-separator" />
          <ul className="menu-links">
            {navLinks.map((item, i) => {
              const showDot = (item.href === pathname && !hoveredLink) || hoveredLink == item.label
              return (
                <Magnetic key={item.href}>
                  <Link href={item.href}
                    key={item.href}
                    className="w-fit"
                    onClick={close}
                    onMouseOver={() => setHoveredLink(item.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <motion.li
                      {...anime(links)}
                      transition={{
                        duration: 0.5,
                        ease: [0.83, 0, 0.17, 1],
                        delay: 0.05 * i + 0.05,
                      }}
                      className="relative"
                    >
                      {item.label}
                      <AnimatePresence mode="wait">
                        {showDot && <Dot className="absolute rounded-full md:-right-8 top-1/2 -translate-y-1/2 right-[80dvw]" />}
                      </AnimatePresence>
                    </motion.li>
                  </Link>
                </Magnetic>
              )
            })}
          </ul>
        </div>
        <div className="menu-separator  mt-auto" />
        <Socials className="pb-14 pt-4" />
      </div>
      <MenuCurve />
    </motion.aside>
  );
}

export default Menu;
