import { clsx, type ClassValue } from "clsx"
import { Variants } from "motion/react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function anime(variants: Variants) {
  return {
    variants: variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit'
  }
}