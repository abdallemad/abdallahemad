import React, { useEffect, useRef, useState } from 'react'
import MaxWidthWrapper from '../globals/max-width-wrapper';
import { AnimatePresence, useMotionValue } from 'motion/react';
import Modals from './modal';
interface Props {
  projects: Project[];
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const LargeGallery = ({ projects,setIndex, setOpen }: Props) => {


  return (
    <>
      <h4 className='lg-gallery-title'>احدث الاعمال</h4>
      {
        projects.map((p, i) => {
          return (
            <div key={i} className='project-gallery-lg'
              onMouseOver={() => {
                setIndex(p.index)
                setOpen(true);
              }}
              onMouseLeave={() => setOpen(false)}
            >
              <h4>{p.name}</h4>
            </div>
          )
        })
      }
      <button className='h-14'></button>
    </>
  )
}

export default LargeGallery
