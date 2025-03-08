import { navLinks } from '@/lib/constants'
import React, { useState } from 'react'
import Magnetic from '../globals/magnetic'
import Link from 'next/link'
import MaxWidthWrapper from '../globals/max-width-wrapper'
import CurvedMenu from '.'
import { Dot } from '../globals/dot'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'motion/react'

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<null | string>(null)
  return (
    <header>
      <CurvedMenu isOpened={isOpened} setIsOpened={setIsOpened} />
      <nav>
        <MaxWidthWrapper className='navbar'>
          <Magnetic>
            <Link href="/" className='logo-h1'>عبداللّه_عماد</Link>
          </Magnetic>
          <ul className="nav-links">
            {
              navLinks.filter(n => n.href !== '/').map(n => {
                const showDot = (n.href === pathname && !hoveredLink) || hoveredLink == n.label
                return (
                  <Magnetic key={n.href}>
                    <Link href={n.href}
                      className='py-2 relative'
                      onMouseOver={() => setHoveredLink(n.label)}
                      onMouseLeave={() => setHoveredLink(null)}>
                      {n.label}
                      <AnimatePresence mode='wait'>
                        {showDot && <Dot className='-bottom-3 left-1/2 -transform-x-1/2 size-2 absolute rounded-full' />}
                      </AnimatePresence>
                    </Link>
                  </Magnetic>
                )
              })
            }
          </ul>
          <Magnetic>
            <button className='menu-button' onClick={() => setIsOpened(!isOpened)}>
              القائمة
            </button>
          </Magnetic>
        </MaxWidthWrapper>
      </nav>
    </header>
  )
}

export default Navbar
