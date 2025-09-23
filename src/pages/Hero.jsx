import React, { useEffect, useRef, useState } from "react";
import Primarybtn from "../ui/Primarybtn";
import {
  GlassWater,
  FolderOpen,
  FileText,
  BarChart3,
  Users,
  Swords,
} from "lucide-react";
import Glassbox from "../ui/Glassbox";
import GlassScreen1 from "../ui/GlassScreen1";
import "./Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { images } from "../assets/images";
import brandBattleSvg from "../assets/herodetail/brand-battle.svg";
import ceoBoardSvg from "../assets/herodetail/ceo-board.svg";
import ceoPresentationSvg from "../assets/herodetail/ceo-presentation.svg";

function Hero() {
  const divRef = useRef(null);
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Shared details for Round 1 (both variations)
  const round1Details = (
    <div className="p-4 h-full flex flex-col justify-center items-center text-gray-800">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-blue-600 mb-1">Round 1: Brand Battle</h3>
        <p className="text-sm text-gray-600">Two rival brands. One stage. One winner.</p>
      </div>

      {/* Main Brand Battle SVG */}
      <div className="mb-6">
        <img src={brandBattleSvg} alt="Brand Battle" className="w-32 h-32 mx-auto" />
      </div>

      {/* Key Points */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-md">
        <div className="bg-blue-50 p-3 rounded-lg text-center">
          <img src={images.image4} alt="Pitch" className="w-8 h-8 mx-auto mb-1" />
          <h4 className="font-bold text-blue-700 text-xs">Pitch Battle</h4>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg text-center">
          <img src={images.image5} alt="Compare" className="w-8 h-8 mx-auto mb-1" />
          <h4 className="font-bold text-purple-700 text-xs">Brand Compare</h4>
        </div>
        <div className="bg-green-50 p-3 rounded-lg text-center">
          <img src={images.image6} alt="Audience" className="w-8 h-8 mx-auto mb-1" />
          <h4 className="font-bold text-green-700 text-xs">Audience Appeal</h4>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg text-center">
          <img src={images.image7} alt="Strategy" className="w-8 h-8 mx-auto mb-1" />
          <h4 className="font-bold text-orange-700 text-xs">Win Strategy</h4>
        </div>
      </div>
    </div>
  );

  const tabs = [
    {
      title: "Round 1: Brand Battle",
      description: "Two rival brands. One stage. One winner.",
      icon: <Swords />,
      screen: <GlassScreen1 variant="projects" />,
      details: round1Details,
    },
    {
      title: "Round 1: Brand Battle",
      description: "Pitch, compare, and roast your way to victory.",
      icon: <Swords />,
      screen: <GlassScreen1 variant="documents" />,
      details: round1Details, // Same details for both Round 1 variations
    },
    {
      title: "Round 2: CEO in Trouble",
      description: "Think like a CEO, solve real challenges.",
      icon: <BarChart3 />,
      screen: <GlassScreen1 variant="analytics" />,
      details: (
        <div className="p-4 h-full flex flex-col justify-center items-center text-gray-800">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-red-600 mb-1">Round 2: CEO in Trouble</h3>
            <p className="text-sm text-gray-600">Think like a CEO, solve real challenges.</p>
          </div>

          {/* CEO SVGs Display */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <img src={ceoBoardSvg} alt="CEO Board Meeting" className="w-16 h-16 mb-1" />
              <p className="text-xs text-gray-600 text-center">Board Crisis</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ceoPresentationSvg} alt="CEO Presentation" className="w-16 h-16 mb-1" />
              <p className="text-xs text-gray-600 text-center">Strategic Presentation</p>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            <div className="bg-red-50 p-3 rounded-lg text-center">
              <img src={images.image11} alt="Financial" className="w-8 h-8 mx-auto mb-1" />
              <h4 className="font-bold text-red-700 text-xs">Financial Crisis</h4>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-center">
              <img src={images.image12} alt="Team" className="w-8 h-8 mx-auto mb-1" />
              <h4 className="font-bold text-yellow-700 text-xs">Team Leadership</h4>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg text-center">
              <img src={images.image1c} alt="Strategy" className="w-8 h-8 mx-auto mb-1" />
              <h4 className="font-bold text-indigo-700 text-xs">Strategic Pivot</h4>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <img src={images.image2c} alt="Communication" className="w-8 h-8 mx-auto mb-1" />
              <h4 className="font-bold text-green-700 text-xs">Clear Communication</h4>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const startAutoRotate = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);

      setProgress(0);

      const progressDuration = 4000;
      const updateInterval = 50;
      const progressIncrement = (100 / progressDuration) * updateInterval;

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + progressIncrement;
          if (newProgress >= 100) {
            return 100;
          }
          return newProgress;
        });
      }, updateInterval);

      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const nextIndex = (prev + 1) % tabs.length;
          return nextIndex;
        });
        setProgress(0);
      }, progressDuration);
    };

    startAutoRotate();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, [tabs.length]);

  useEffect(() => {
    if (mobileContainerRef.current && window.innerWidth < 768) {
      const container = mobileContainerRef.current;
      const activeElement = container.children[activeIndex];

      if (activeElement) {
        const containerWidth = container.offsetWidth;
        const elementWidth = activeElement.offsetWidth;
        const elementOffsetLeft = activeElement.offsetLeft;

        const scrollLeft =
          elementOffsetLeft - containerWidth / 2 + elementWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const handleTabClick = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setProgress(0);

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setTimeout(() => {
      const progressDuration = 4000;
      const updateInterval = 50;
      const progressIncrement = (100 / progressDuration) * updateInterval;

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + progressIncrement;
          if (newProgress >= 100) {
            return 100;
          }
          return newProgress;
        });
      }, updateInterval);

      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const nextIndex = (prev + 1) % tabs.length;
          return nextIndex;
        });
        setProgress(0);
      }, progressDuration);
    }, 100);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(divRef.current, {
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      width: "100%",
      scrollTrigger: {
        trigger: divRef.current,
        scrub: 3,
        start: "top 20%",
        end: "+=700",
      },
    });
  }, {});

  return (
    <div
      className="flex bganimation flex-col justify-center items-center gap-y-20 mt-21 pt-18 md:mt-40 md:pt-25 lg:mt-20 lg:pt-37 pb-8 overflow-x-hidden"
      ref={divRef}
      style={{
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%",
        width: "85%",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center text-white gap-y-8">
        <p className="flex flex-col gap-4 font-primary font-bold text-7xl md:text-9xl">
          <span className="font-aquire uppercase tracking-widest md:tracking-[32px]">Unnati</span>
          <span className="text-3xl font-primary"> Phase V</span>
        </p>
        <p className="">Thrive in Chaos, Lead the Game</p>

        <div className="flex flex-col items-center justify-center md:flex-row gap-4">
          <Button
            label={"Register Now"}
            showChevron={true}
            btnbg={"bg-white"}
            textColor={"text-black"}
            chevronColor="text-white"
            chevBg="bg-black"
            to={"/form"}
            px={"px-2"}
            py={"py-2"}
          />
          <Button
            label={"Download Rulebook"}
            showChevron={true}
            btnbg={"bg-black"}
            textColor={"text-white"}
            to={
              "https://drive.google.com/drive/folders/1cnk5o6rHvsW_ieuUkV_Wg50rxaT1cCr4?usp=sharing"
            }
            px={"px-2"}
            py={"py-2"}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full items-center gap-6">
        <div className="w-full px-4">
          <div className="hidden md:flex justify-center items-center py-4">
            <div
              ref={containerRef}
              className="flex flex-row gap-4 justify-center items-center"
            >
              {tabs.map(({ title, description, icon }, index) => {
                const isActive = index === activeIndex;
                return (
                  <div key={index} className="flex-shrink-0">
                    <Glassbox
                      title={title}
                      description={description}
                      icon={icon}
                      isActive={isActive}
                      progress={isActive ? progress : 0}
                      onClick={() => handleTabClick(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:hidden w-full">
            <div
              ref={mobileContainerRef}
              className="flex flex-col justify-center items-center sm:flex-row gap-4 overflow-x-auto scroll-smooth px-4 py-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {tabs.map(({ title, description, icon }, index) => {
                const isActive = index === activeIndex;
                return (
                  <div key={index} className="flex-shrink-0">
                    <Glassbox
                      title={title}
                      description={description}
                      icon={icon}
                      isActive={isActive}
                      progress={isActive ? progress : 0}
                      onClick={() => handleTabClick(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full hidden sm:flex justify-center items-center">
          <div className="relative h-[600px] w-[90%] lg:w-1/2 z-10">
            <div className="w-full h-full bg-white/14 rounded-3xl py-4 px-4 flex flex-col gap-4">
              <div className="flex gap-1.5"> 
                <div className="w-4 h-4 rounded-full bg-red-400"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <div className="w-4 h-4 rounded-full bg-green-400"></div>
              </div>
              <div className="w-full h-full bg-white rounded-2xl">
                {tabs[activeIndex].details}
              </div>
            </div>
            <div className="absolute w-full h-full bg-blue-500/40 blur-3xl -z-10 -top-16 -left-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
