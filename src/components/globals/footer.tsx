import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Socials from './socials'


function Footer() {
  return (
    <footer>
      <MaxWidthWrapper className='flex items-center justify-between flex-wrap'>
        <div></div>
        <Socials />
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
