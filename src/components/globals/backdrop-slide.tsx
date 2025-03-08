import { backDropSlideVariants } from '@/lib/anim';
import { anime, cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface Props {
  className?: string,
}

function BackDrop({ className }: Props) {
  
  return (
    <motion.div
      {...anime(backDropSlideVariants)}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={cn('absolute inset-x-0 h-[140%] w-full rounded-[50%] -z-50 pointer-events-none', className)} />
  )
}

export default BackDrop
