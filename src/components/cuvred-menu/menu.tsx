import React from "react";
import { motion, Variants } from "motion/react";
import MenuCurve from "./menu-curve";
import Magnetic from "../magnetic";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import Socials from "../globals/socials";


function Menu({close}:{close:()=>void}) {
  const variantsSlide: Variants = {
    initial: {
      x: "calc(-100% - 99px)",
    },
    enter: {
      x: 0,
    },
    exit: {
      x: "calc(-100% - 99px)",
    },
  };
  const links: Variants = {
    initial: {
      x: "-100%",
    },
    enter: {
      x: 0,
    },
    exit: {
      x: "-100%",
    },
  };
  return (
    <motion.aside
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variantsSlide}
      transition={{
        duration: 0.7,
        ease: [0.83, 0, 0.17, 1],
      }}
      className="h-screen w-[600px] fixed top-0 bottom-0 left-0 bg-zinc-900 z-40 px-24 py-20 direction-left"
    >
      <div className="flex flex-col gap-2 flex-1 direction-right">
        <h1 className="text-gray-400 text-lg font-bold mb-8">القائمه</h1>
        <div className="h-px bg-gray-400" />
        <ul className="flex flex-col gap-4 mt-8">
          {navLinks.map((item, i) => (
            <Magnetic key={item.href}>
              <Link href={item.href}
                key={item.href}
                className="w-fit"
                onClick={close}
              >
                <motion.li
                  initial="initial"
                  exit={"exit"}
                  animate="enter"
                  variants={links}
                  transition={{
                    duration: 0.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05 * i + 0.05,
                  }}
                  className="lg:text-5xl text-2xl md:text-3xl text-white cursor-pointer w-fit"
                >
                  {item.label}
                </motion.li></Link>
            </Magnetic>
          ))}
        </ul>
      </div>
      <Socials className="mt-32 flex-1 direction-right" />
      <MenuCurve />
    </motion.aside>
  );
}

export default Menu;
