import Curve from "@/components/curve";
import Navbar from "@/components/cuvred-menu/navbar";
import MaxWidthWrapper from "@/components/globals/max-width-wrapper";
import ProjectGallery from "@/components/project-gallery";
import ActionRoundedButton from "@/components/ui/buttons";
import VelocityScroll from "@/pages/velocity-scroll";
import { ArrowDown } from 'lucide-react';
import { motion, useInView, Variants } from "motion/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import earthAnimation from "../../public/earth_location.json";
import { Projects } from "@/lib/constants";
import { SLIDE_UP } from "@/lib/anim";
// Dynamically import Lottie to prevent SSR issues
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
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
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 2000)
      }
    )()
  }, [])
  return (
    <Curve className="">
      <Head>
        <title>Abdalla Emad - Freelance Developer & Designer</title>
      </Head>
      <Hero />
      <AboutSection />
      <ProjectGallery projects={Projects} />
      {/* <div className="h-screen"></div> */}
    </Curve>
  );
}
const mainAboutText = 'أساعد العلامات التجارية على التميز في العصر الرقمي. معًا، سنضع معايير جديدة بلا تعقيد، ودائمًا في طليعة الابتكار'

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      {/* MAIN IMAGE */}
      <div>
        <Image
          src="/prother_imae.png"
          width={380}
          height={1000}
          alt="hero"
          className="hero-image"
        />
      </div>
      {/* CENTER SECTION */}
      <div className="location-container-lg">
        <div data-scroll data-scroll-speed="0.1" className="location-span">
          <span>متواجد <br /> في مصر</span>
          <div className="location-lottie">
            <DynamicLottie
              animationData={earthAnimation}
              loop
              className="size-24 absolute inset-0" />
          </div>
        </div>
        <h2 data-scroll data-scroll-speed="0.13" className="job-title-h2">
          <ArrowDown data-scroll data-scroll-speed="0.16" className="arrow-lg" />
          <span>
            فريلانس <br /> مصمم و مطور
          </span>
        </h2>
      </div>
      {/* VELOCITY SCROLL */}
      <div className="max-md:mt-auto md:pb-16   ">
        <VelocityScroll
          default_velocity={1.5}
          className="velocity-h1"
          text=" عبداللّه عماد مطور & مصمم تطبيقات ويب -"
        />
      </div>
      {/* BOTTOM SECTION MOBILE */}
      <div className="location-container-sm">
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="size-32 relative self-end">
          <DynamicLottie
            animationData={earthAnimation}
            loop
            className="size-32 absolute inset-0 " />
        </div>

        <h2 className="job-title-h2">
          <ArrowDown
            data-scroll
            data-scroll-speed="0.13"
            className="size-8 rotate-45 stroke-1" />
          <span
            data-scroll
            data-scroll-speed="0.12"
          >
            فريلانس <br /> مصمم & مطور
          </span>
        </h2>
      </div>

    </div>
  )
}
function AboutSection() {
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


