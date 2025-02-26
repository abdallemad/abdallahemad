import { AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import Magnetic from '../magnetic'
import BackDrop from './backdrop-slide'
import { cn } from '@/lib/utils'

function ActionRoundedButton({ className }: { className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Magnetic>
      <button
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn("shad-button-circle", className)}
      >
        <Magnetic>
          <Link href="#" className="inner-magnetic">
            المزيد
          </Link>
        </Magnetic>
        <AnimatePresence mode="wait">
          {hovered && <BackDrop className="bg-primary" />}
        </AnimatePresence>
      </button>
    </Magnetic>
  )
}
export function MenuButton({ className, isOpened = false, close }: { className?: string, isOpened?: boolean, close:()=>void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Magnetic>
      <button
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={close}
        className={cn("shad-button-circle-icon bg-zinc-900", className, {'bg-primary': isOpened})}
      >
        <Magnetic>
          <span className="inner-magnetic">
            <div className="flex flex-col gap-2 h-full w-full items-center justify-center">
              <span className={cn("h-px bg-white w-8 transition-all duration-400", {
                'rotate-45 translate-y-1': isOpened
              })}></span>
              <span className={cn("h-px bg-white w-8 transition-all duration-400", {
                '-rotate-45 -translate-y-1': isOpened
              })}></span>
            </div>
          </span>
        </Magnetic>
        <AnimatePresence mode="wait">
          {hovered && <BackDrop className="bg-primary" />}
        </AnimatePresence>
      </button>
    </Magnetic>
  )
}
export function NormalButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Magnetic>
      <button
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="normal-button w-40"
      >
        <Magnetic>
          <Link href="#" className="inner-magnetic ">
            more about me
          </Link>
        </Magnetic>
        <AnimatePresence mode="wait">
          {hovered && <BackDrop className="bg-primary" />}
        </AnimatePresence>
      </button>
    </Magnetic>
  )
}

export default ActionRoundedButton
