import Navbar from "@/components/cuvred-menu/navbar";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import VelocityScroll from "./velocity-scroll";
import dynamic from "next/dynamic";
import earthAnimation from "../../../public/earth_location.json";
// Dynamically import Lottie to prevent SSR issues
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

export function Hero() {
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