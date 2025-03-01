import React from "react";
import { motion, Variants } from "motion/react";
import MenuCurve from "./menu-curve";
import Magnetic from "../magnetic";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import Socials from "../globals/socials";
import { anime } from "@/lib/utils";
import { links, variantsSlide } from "@/lib/anim";


function Menu({ close }: { close: () => void }) {
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
            {navLinks.map((item, i) => (
              <Magnetic key={item.href}>
                <Link href={item.href}
                  key={item.href}
                  className="w-fit"
                  onClick={close}
                >
                  <motion.li
                    {...anime(links)}
                    transition={{
                      duration: 0.5,
                      ease: [0.83, 0, 0.17, 1],
                      delay: 0.05 * i + 0.05,
                    }}
                  >
                    {item.label}
                  </motion.li>
                </Link>
              </Magnetic>
            ))}
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
