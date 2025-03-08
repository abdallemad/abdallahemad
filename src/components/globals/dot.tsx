import { anime, cn } from "@/lib/utils"
import { Variants,motion } from "motion/react"

export function Dot({ className }: { className?: string }) {
  const fadeInOut: Variants = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }
  return (
    <motion.div
      {...anime(fadeInOut)}
      className={cn("size-3 bg-white ", className)} />
  )
}