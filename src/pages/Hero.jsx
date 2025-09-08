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
import Details from "../components/Details";

function Hero() {
  const divRef = useRef(null);
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const tabs = [
    {
      title: "Round 1: Brand Battle",
      description: "Two rival brands. One stage. One winner.",
      icon: <Swords />,
      screen: <GlassScreen1 variant="projects" />,
    },
    {
      title: "Round 1: Brand Battle",
      description: "Pitch, compare, and roast your way to victory.",
      icon: <Swords />,
      screen: <GlassScreen1 variant="documents" />,
    },
    {
      title: "Round 2: CEO in Trouble",
      description: "Think like a CEO, solve real challenges.",
      icon: <BarChart3 />,
      screen: <GlassScreen1 variant="analytics" />,
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
              className="flex flex-row gap-4 overflow-x-auto scroll-smooth px-4 py-4"
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

        <Details />
      </div>
    </div>
  );
}

export default Hero;
