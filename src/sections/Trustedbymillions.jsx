import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../assets/images";
import { useGSAP } from "@gsap/react";
import IconAnimation from "./IconAnimation";

gsap.registerPlugin(ScrollTrigger);

function Trustedbymillions() {
  const bulletPoints = [
    "Time wasted switching between appps",
    "Scattered conversations and decisions",
    "Can't find important info or files",
    "Too many notifications in too many places",
    "Work feels chaotic and unfocused",
    "Playing for many tools drains your budget",
  ];

  const imageRefs = useRef([]);
  const fullRef = useRef(null);
  const mainContainerRef = useRef(null); // Add this for the entire section

  const imagePairs = [
    [images.image1, images.image1c],
    [images.image2, images.image2c],
    [images.image3, images.image3c],
    [images.image4, images.image4c],
    [images.image5, images.image5c],
    [images.image6, images.image6c],
    [images.image7, images.image7c],
    [images.image8, images.image8c],
    [images.image9, images.image9c],
    [images.image10, images.image10c],
    [images.image11, images.image11c],
    [images.image12, images.image12c],
  ];

  // const wrapperRef = useRef(null);

  // useEffect(() => {
  //   if (!wrapperRef.current) return;

  //   const wrapperWidth = wrapperRef.current.scrollWidth / 3;

  //   gsap.to(wrapperRef.current, {
  //     x: `-${wrapperWidth}px`,
  //     duration: 10,
  //     repeat: -1,
  //     ease: "linear",
  //   });
  // }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pin the entire main container, not just the content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainerRef.current,
        pin: mainContainerRef.current, // Pin the entire section
        start: "30% center",
        end: "bottom center", // Longer scroll distance
        scrub: 1,
        anticipatePin: 1,
        markers: true,
        pinSpacing: true,
      }
    });

    // Add bullet point animation to the timeline
    tl.fromTo("li", 
      {
        y: 5,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }
    );

  }, { scope: mainContainerRef });

  return (
    <div ref={mainContainerRef} className="h-[300px] w-full">
      {/* <div className="flex justify-center items-start mb-10 pt-10">
        <h3>Trusted by millions</h3>
      </div>

      <div className="overflow-hidden w-full mb-20">
        <div
          ref={wrapperRef}
          className="companies-wrapper flex gap-20 text-2xl text-gray-300 whitespace-nowrap"
        >
          <div>INVISIBLE</div>
          <div>KLAVIYA</div>
          <div>MERCADI LIBRE</div>
          <div>NEW RELIC</div>
          <div>ONE MEDICAL</div>
          <div>PENDO</div>
          <div>RETOOL</div>
          <div>RIPPLING</div>
          <div>VERCEL</div>
          <div>AMAZON</div>
          <div>ANTHROPIC</div>
          <div>HASHICORP</div>
          <div>INTERCOM</div>

          <div>INVISIBLE</div>
          <div>KLAVIYA</div>
          <div>MERCADI LIBRE</div>
          <div>NEW RELIC</div>
          <div>ONE MEDICAL</div>
          <div>PENDO</div>
          <div>RETOOL</div>
          <div>RIPPLING</div>
          <div>VERCEL</div>
          <div>AMAZON</div>
          <div>ANTHROPIC</div>
          <div>HASHICORP</div>
          <div>INTERCOM</div>
        </div>
      </div> */}

      <div
        ref={fullRef}
        className="relative z-0 flex flex-col items-center justify-center px-16 gap-5  flex-1"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          The old way of
          <br />
          working
        </h1>
        <ul className="md:text-base text-[13px] text-nowrap flex flex-col gap-2">
          {bulletPoints.map((text, i) => (
            <li key={i}>
              <span className="bg-pink-500 rounded-3xl inline-flex w-6 h-6 justify-center text-white mr-3 items-center">
                x
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
      <IconAnimation/>
    </div>
  );
}

export default Trustedbymillions;