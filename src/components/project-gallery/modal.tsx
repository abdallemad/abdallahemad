import React from 'react'
import { motion, MotionValue, useSpring } from 'motion/react';
import { anime } from '@/lib/utils';
import Image from 'next/image';
import { SCALE_UP_DOWN } from '@/lib/anim';
import { useMediaQuery } from 'react-responsive';
interface Props {
  activeIndex?: number;
  projects: Project[];
  offsets: { x: MotionValue<number>, y: MotionValue<number> };
  isLarge: boolean;
}
function Modals({ activeIndex = 0, projects, offsets: { x, y }, isLarge }: Props) {
  const animatedX = useSpring(x, { stiffness: 300, damping: 50 });
  const animatedY = useSpring(y, { stiffness: 300, damping: 50 });
  const animatedButtonX = useSpring(x, { stiffness: 300, damping: 30 });
  const animatedButtonY = useSpring(y, { stiffness: 300, damping: 30 });
  const animatedSpanX = useSpring(x, { stiffness: 300, damping: 25 });
  const animatedSpanY = useSpring(y, { stiffness: 300, damping: 25 });
  return (
    <>
      {isLarge && (
        <motion.div
          style={{ top: animatedY, left: animatedX, }}
          {...anime(SCALE_UP_DOWN)}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className='modal-lg'>
          <motion.div
            animate={{
              y: `-${activeIndex}00%`,
              transition: { type: "spring", duration: 0.5 },
            }}
            className="modal-container">
            {
              projects.map((p, i) => (
                <div
                  style={{ background: p.background }}
                  key={i}
                  className='project-m'>
                  <Image src={p.assets[0]} alt={p.name} width={400} height={500} />
                </div>
              ))
            }
          </motion.div>
        </motion.div>
      )}
      <motion.div
        style={{ top: animatedButtonY, left: animatedButtonX, }}
        className='modal-sm'
        {...anime(SCALE_UP_DOWN)}
        transition={{ duration: 0.3, ease: 'easeInOut' }} />
      <motion.p
        style={{ top: animatedSpanY, left: animatedSpanX, }}
        className='modal-p'
        {...anime(SCALE_UP_DOWN)}
        transition={{ duration: 0.3, ease: 'easeInOut' }} >
        رؤية
      </motion.p>
    </>
  )
}

export default Modals
