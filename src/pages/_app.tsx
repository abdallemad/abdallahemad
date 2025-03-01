import "@/styles/globals.css";
import "@/styles/project-gallery.css";
import "@/styles/curve-menu.css";
import { AnimatePresence } from 'motion/react';
import type { AppProps } from "next/app";


export default function App({ Component, pageProps, router }: AppProps) {
  
  return (
    <AnimatePresence mode="wait">
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}
