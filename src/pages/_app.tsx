import "@/styles/globals.css";
import { AnimatePresence } from 'motion/react';
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";


export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        // @ts-expect-error:commonjs
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])
  return (
    <AnimatePresence mode="wait">
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}
