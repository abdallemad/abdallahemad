import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface Props {
  className?: string,
}

function BackDrop({ className }: Props) {
  const variants = {
    initial: {
      top: '140%'
    },
    animate: {
      top: '0%'
    },
    exit: {
      top: '-140%'
    }
  }
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={cn('absolute inset-x-0 h-[140%] w-full rounded-full -z-50 pointer-events-none', className)} />
  )
}

export default BackDrop
