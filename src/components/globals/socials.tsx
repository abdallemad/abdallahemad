import { socials } from '@/lib/constants'
import { cn } from '@/lib/utils'
import React from 'react'
import Magnetic from '../magnetic'


function Socials({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-y-4', className)}>
      <h2 className='text-gray-400 md:text-lg'>منصات التواصل</h2>
      <ul className="flex items-center flex-wrap gap-4 text-white font-medium lg:text-lg">
        {socials.map(s => (
          <Magnetic key={s.label}><a target='_blank' href={s.href}>{s.label}</a></Magnetic>
        ))}
      </ul>
    </div>
  )
}

export default Socials
