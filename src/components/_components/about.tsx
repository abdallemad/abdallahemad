import MaxWidthWrapper from '@/components/globals/max-width-wrapper';
import ActionRoundedButton from '@/components/ui/buttons';
import { SLIDE_UP } from '@/lib/anim';
import { motion, useInView } from 'motion/react'
import { useRef } from 'react';
const mainAboutText = 'أساعد العلامات التجارية على التميز في العصر الرقمي. معًا، سنضع معايير جديدة بلا تعقيد، ودائمًا في طليعة الابتكار'
export function AboutSection() {
  const containerPRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerPRef, {});
  return (
    <div className="">
      <MaxWidthWrapper className="pt-24 md:pt-48 md:px-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex md:flex-row flex-col md:items-center gap-10">
            <p className="main-about-p" ref={containerPRef}>
              {
                mainAboutText.split(' ').map((word, i) => (
                  <span key={i}>
                    <motion.span
                      variants={SLIDE_UP}
                      initial={"initial"}
                      animate={isInView ? 'open' : 'close'}
                      transition={{ duration: 0.5, delay: 0.03 * i }}>{word}</motion.span>
                  </span>
                ))
              }
            </p>


            <p className="text-lg max-w-[250px]">
              {'أساعد العلامات التجارية على التميز في العصر الرقمي. معًا، سنضع معايير جديدة بلا تعقيد، ودائمًا في طليعة الابتكار'}
            </p>
          </div>
          <div className="w-full flex items-end md:-mt-10 md:pl-20 -mt-24 " data-scroll data-scroll-speed="0.2">
            <ActionRoundedButton href="/about" className="mr-auto z-[999]" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}