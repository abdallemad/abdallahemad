import { navLinks } from '@/lib/constants'
import React, { useState } from 'react'
import Magnetic from '../magnetic'
import Link from 'next/link'
import MaxWidthWrapper from '../globals/max-width-wrapper'
import CurvedMenu from '.'

function Navbar() {
    const [isOpened, setIsOpened] = useState(false);
  
  return (
    <header>
      <CurvedMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
      <nav>
        <MaxWidthWrapper className='navbar'>
          <Magnetic>
            <Link href="/" className='logo-h1'>عبداللّه_عماد</Link>
            </Magnetic>
          <ul className="nav-links">
            {
              navLinks.filter(n => n.href !== '/').map(n => (
                <Magnetic key={n.href}>
                  <Link href={n.href} className='py-2'>{n.label}</Link>
                </Magnetic>
              ))
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
