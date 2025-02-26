import { navLinks } from '@/lib/constants'
import React, { useState } from 'react'
import Magnetic from '../magnetic'
import Link from 'next/link'
import MaxWidthWrapper from '../globals/max-width-wrapper'
import CurvedMenu from '.'

function Navbar() {
    const [isOpened, setIsOpened] = useState(false);
  
  return (
    <header className=''>
      <CurvedMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
      <nav className=''>
        <MaxWidthWrapper className='flex items-center justify-between py-6 lg:py-8'>
          <Magnetic><h2 className='text-2xl font-semibold cursor-pointer select-none'>عبداللّه_عماد</h2></Magnetic>
          <ul className="hidden gap-8 items-center sm:flex">
            {
              navLinks.filter(n => n.href !== '/').map(n => (
                <Magnetic key={n.href}>
                  <Link href={n.href} className=' text-xl'>{n.label}</Link>
                </Magnetic>
              ))
            }
          </ul>
          <Magnetic>
            <button className='text-xl block sm:hidden cursor-pointer' onClick={() => setIsOpened(!isOpened)}>
              القائمة
            </button>
          </Magnetic>
        </MaxWidthWrapper>
      </nav>
    </header>
  )
}

export default Navbar
