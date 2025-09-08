import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

function Trustedbymillions() {
  const bulletPoints = [
    "Stay stuck in routine thinking",
    "Miss exposure to real challenges",
    "No stage to showcase skills",
    "Limited peer-to-peer learning  ",
    "Lose chance to stand out",
    "Miss leadership & teamwork growth",
  ];

  const imageRefs = useRef([]);

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

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      const [normal, changed] = imagePairs[i];

      ScrollTrigger.create({
        trigger: img,
        start: "top 80%",
        end: "top 30%",
        onEnter: () => (img.src = changed),
        onLeaveBack: () => (img.src = normal),
      });
    });
  }, []);

  const positions = [
    "row-start-1 col-start-1",
    "row-start-1 col-start-8",
    "row-start-2 col-start-1",
    "row-start-2 col-start-2",
    "row-start-2 col-start-7",
    "row-start-2 col-start-8",
    "row-start-3 col-start-1",
    "row-start-3 col-start-2",
    "row-start-3 col-start-3",
    "row-start-3 col-start-6",
    "row-start-3 col-start-7",
    "row-start-3 col-start-8",
  ];

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const wrapperWidth = wrapperRef.current.scrollWidth / 3;

    gsap.to(wrapperRef.current, {
      x: `-${wrapperWidth}px`,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "li",
      {
        y: 5,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,

        scrollTrigger: {
          trigger: "ul",
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
          markers: false,
          once: false,
        },
      }
    );
  }, []);

  return (
    <div className="max-w-screen mb-32 pt-8">
      <div className="overflow-hidden w-full">
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
      </div>

      <div className="relative z-0 flex flex-col items-center justify-center px-16 gap-5 mt-40">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Life in the Usual
          <br />
          College Routine:
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

        {/*  <div className="absolute top-0 left-1/2 -translate-x-1/2 grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] max-w-[90vw] gap-4 z-10">
          {imagePairs.map(([normal], i) => (
            <img
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              src={normal}
              alt=""
              className={`${positions[i]} w-24 h-24 bg-white p-2 rounded-2xl transition-all duration-500`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Trustedbymillions;
