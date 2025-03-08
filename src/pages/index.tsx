import Curve from "@/components/globals/curve";
import ProjectGallery from "@/components/project-gallery";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Projects } from "@/lib/constants";
import { AboutSection } from "../components/_components/about";
import { Hero } from "../components/_components/hero";


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
      <div className="h-screen"></div>
    </Curve>
  );
}






