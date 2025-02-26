import Curve from "@/components/curve";
import VelocityScroll from "@/pages/velocity-scroll";
import Navbar from "@/components/cuvred-menu/navbar";
import ActionRoundedButton, { MenuButton, NormalButton } from "@/components/ui/buttons";
import earthAnimation from "../../public/earth_location.json";
import { ArrowDown } from 'lucide-react'
import Image from "next/image";
import dynamic from "next/dynamic";
import MaxWidthWrapper from "@/components/globals/max-width-wrapper";
import { useInView, motion, Variants } from "motion/react";
import { useRef } from "react";
import ProjectGallery from "@/components/project-gallery";
// Dynamically import Lottie to prevent SSR issues
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function Home() {
  return (
    <Curve className="">
      <div className="min-h-screen bg-[#999d9e] text-white select-none">
        <Navbar />
        <div className="-z-[999]">
          <Image
            src="/prother_imae.png"
            width={380}
            height={1000}
            alt="hero"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 select-none pointer-events-none"
          />
        </div>

        <div className="md:flex items-center justify-between py-20 z-50 hidden">
          <div data-scroll data-scroll-speed="0.15" className="pr-8 pl-3 self-end lg:pr-16 flex items-center gap-8 bg-zinc-900 text-white text-lg rounded-l-full ">
            <span className="py-8 inline-flex">متواجد <br /> في مصر</span>
            <div className="size-24 grid place-items-center relative bg-zinc-400 rounded-full">
              <DynamicLottie
                animationData={earthAnimation}
                loop
                className="size-24 absolute inset-0" />
            </div>
          </div>
          <h2 data-scroll data-scroll-speed="0.17" className="job-title-h2">
            <ArrowDown data-scroll data-scroll-speed="0.2" className="size-12 rotate-45 stroke-1" />
            <span>
              فريلانس <br /> مصمم و مطور
            </span>
          </h2>
        </div>

        <div className="mt-auto">
          <VelocityScroll
            default_velocity={-1.6}
            className="velocity-h1"
            text=" عبداللّه عماد - مطور & مصمم تطبيقات ويب "
          />
        </div>
      </div>
      <AboutSection />
      <ProjectGallery />
      <div className="h-screen"></div>
    </Curve>
  );
}
const mainAboutText = 'أساعد العلامات التجارية على التميز في العصر الرقمي. معًا، سنضع معايير جديدة بلا تعقيد، ودائمًا في طليعة الابتكار';
const SLIDE_UP: Variants = {
  initial: {
    y: '100%'
  },
  open: {
    y: '0%',
  },
  close: {
    y: '100%',
    transition: {
      duration: 0.1
    }
  }
}
function AboutSection() {
  const containerPRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerPRef, {});
  return (
    <div className="min-h-screen">
      <MaxWidthWrapper className="pt-40 ">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex md:flex-row flex-col md:items-center gap-24">
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
            <div className="text-lg max-w-[200px] border">
              {'أساعد العلامات التجارية على التميز في العصر الرقمي. معًا، سنضع معايير جديدة بلا تعقيد، ودائمًا في طليعة الابتكار'}
            </div>
          </div>
          <div className="w-full flex items-end pl-20" data-scroll data-scroll-speed="0.1">
            <ActionRoundedButton className="mr-auto" />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* <NormalButton /> */}
    </div>
  )
}


