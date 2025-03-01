import { cn } from '@/lib/utils';
import React from 'react'



interface Props{
  className?: string;
  children:React.ReactNode;
}

function MaxWidthWrapper({children,className}:Props) {
  return (
    <div className={cn('mx-6 lg:mx-16 ',className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
