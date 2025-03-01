

import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import LargeGallery from './large-gallery';
import SmallGallery from './small-gallery';
import Modals from './modal';
import { AnimatePresence, useMotionValue } from 'motion/react';
import MaxWidthWrapper from '../globals/max-width-wrapper';

interface Props {
  projects: Project[];
}
function ProjectGallery({ projects }: Props) {
  const [activeProjectIndex, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const animationFrame = useRef<number | null>(null);
  const handelMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const mouseProgressX = clientX - left;
    const mouseProgressY = clientY - top;

    // Debounce updates using requestAnimationFrame
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      x.set(mouseProgressX);
      y.set(mouseProgressY);
    });
  };
  const handleMouseEnter = () => setModalOpen(true);
  const handleMouseLeave = () => setModalOpen(false);
  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);
  return (
    <div className=' min-h-screen'>
      <MaxWidthWrapper className='flex flex-col lg:px-16'>
        <div
          onMouseMove={handelMouseMove}
          ref={containerRef}
          className='relative'
        >
          <AnimatePresence mode="wait">
            {modalOpen && (<Modals isLarge={isLarge} offsets={{ x, y }} activeIndex={activeProjectIndex} projects={projects} />)}
          </AnimatePresence>
          {
            isLarge ?
              (<LargeGallery setOpen={setModalOpen} projects={projects} setIndex={setIndex} />)
              : (<SmallGallery projects={projects} />)
          }
        </div>

      </MaxWidthWrapper >
    </div>
  )
}

export default ProjectGallery
