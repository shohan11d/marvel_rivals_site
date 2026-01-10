import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <div className="relative">
      <div
        id="video-frame"
        className="relative px-4 h-dvh overflow-hidden z-20"
      >
        <div className=" h-dvh w-full flex flex-col justify-between container mx-auto size-full relative z-10">
          <div className="py-8 mt-16 md:mt-24">
            <img
              src="./img/rivals-logo.png"
              className="w-40 md:w-100 mb-4"
              alt=""
            />
            <p className=" text-xs md:text-2xl  uppercase text-blue-50">
              The Super hero team-based pvp shooter
            </p>
            <p className="text-[#FBDB2B] text-xs md:text-2xl font-bold uppercase mb-4">
              All heroes are free to play!
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              link="https://www.youtube.com/watch?v=-b0veB7q9P4"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-[#FBDB2B] text-black flex-center gap-1 self-start"
            />
          </div>
          <h1 className="absolute right-4 md:right-0 bottom-0 z-40 text-white hero-heading special-font mb-8">
            Pl<b>a</b>y <b></b> <b>N</b>ow
          </h1>
        </div>
        <video
          src="./videos/marvel-hero1.mp4"
          autoPlay
          muted
          loop
          className="w-full inset-0  size-full absolute top-0 left-0 object-cover"
        />
      </div>
      
    </div>
  );
}

export default Hero;
