import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrizeBox from "../components/PrizeBox";
import Fprize from "/1st.svg";
import Sprize from "/2nd.svg";
import Tprize from "/3rd.svg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Prize = [
  {
    id: 1,
    position: "1st Prize",
    amount: "₹8,000",
    image: Fprize,
    prizeColor: "text-yellow-500",
    description: "Certificates, Badges, Bands and many more...",
  },
  {
    id: 2,
    position: "2nd Prize",
    amount: "₹6,000",
    image: Sprize,
    prizeColor: "text-[#6676D2]",
    description: "Certificates, Badges, Mentorship and many more...",
  },
  {
    id: 3,
    position: "3rd Prize",
    amount: "₹4,000",
    image: Tprize,
    prizeColor: "text-[#E97D15]",
    description: "Certificates, Badges, Goodies and many more...",
  },
];

const Prizes = () => {
  const mainContainerRef = useRef(null);
  const contentContainerRef = useRef(null);
  const scrollerRefs = useRef([]);
  const contentRef = useRef(null);
  const prizeBoxesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only enable scroll animations on desktop
      const isDesktop = window.innerWidth >= 1024;
      
      if (!isDesktop) {
        // For mobile/tablet, just show all content statically
        setupStaticDisplay();
        return;
      }

      // Calculate the proper end point for pinning
      const calculateEndPoint = () => {
        const mainContainerHeight = mainContainerRef.current.offsetHeight;
        const contentContainerHeight = contentContainerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollDistanceNeeded =
          mainContainerHeight - contentContainerHeight - viewportHeight + 330;

        return `+=${scrollDistanceNeeded}px`;
      };

      // Pin the content container within the main container
      ScrollTrigger.create({
        trigger: contentContainerRef.current,
        start: "bottom bottom",
        end: calculateEndPoint,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentPrize = Math.min(Math.floor(progress * 3), 2);
          const localProgress = (progress * 3) % 1;

          // Update scroller indicators
          scrollerRefs.current.forEach((scroller, index) => {
            if (index === currentPrize) {
              const height = 0.375 + 6.625 * localProgress;
              gsap.set(scroller, {
                height: `${height}rem`,
                width: "0.375rem",
                backgroundColor: "rgb(168 85 247)",
                opacity: 1,
              });
            } else {
              gsap.set(scroller, {
                height: "0.375rem",
                width: "0.375rem",
                backgroundColor:
                  index < currentPrize
                    ? "rgb(168 85 247)"
                    : "rgb(168 85 247 / 0.5)",
                opacity: index < currentPrize ? 1 : 0.5,
              });
            }
          });

          updateContent(currentPrize);
        },
        onRefresh: () => {
          ScrollTrigger.getById("pinTrigger")?.refresh();
        },
        id: "pinTrigger",
      });

      setupScrollers();
      updateContent(0);

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  const setupStaticDisplay = () => {
    // For mobile, show first prize by default
    updateContent(0);
  };

  const setupScrollers = () => {
    scrollerRefs.current.forEach((scroller, index) => {
      if (index === 0) {
        gsap.set(scroller, {
          height: "7rem",
          width: "0.375rem",
          backgroundColor: "rgb(168 85 247)",
          opacity: 1,
        });
      } else {
        gsap.set(scroller, {
          height: "0.375rem",
          width: "0.375rem",
          backgroundColor: "rgb(168 85 247 / 0.5)",
          opacity: 0.5,
        });
      }
    });
  };

  const getColorFromClass = (colorClass) => {
    const colorMap = {
      "text-yellow-500": "rgb(234 179 8)",
      "text-[#6676D2]": "#6676D2",
      "text-[#E97D15]": "#E97D15",
    };
    return colorMap[colorClass] || "rgb(234 179 8)";
  };

  const updateContent = (prizeIndex) => {
    const currentPrize = Prize[prizeIndex];

    const titleElement = contentRef.current?.querySelector(".prize-title");
    const amountElement = contentRef.current?.querySelector(".prize-amount");
    const descriptionElement =
      contentRef.current?.querySelector(".prize-description");

    if (titleElement) titleElement.textContent = currentPrize.position;
    if (amountElement) {
      amountElement.textContent = currentPrize.amount;
      amountElement.style.color = getColorFromClass(currentPrize.prizeColor);
    }
    if (descriptionElement)
      descriptionElement.textContent = currentPrize.description;

    const prizeBoxes = prizeBoxesRef.current?.querySelectorAll(".prize-box");
    prizeBoxes?.forEach((box, index) => {
      if (index === prizeIndex) {
        gsap.to(box, {
          scale: 1.1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(box, {
          scale: 1,
          opacity: 0.6,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  };

  return (
    <div
      id="prizes"
      ref={mainContainerRef}
      className="bg-[#11001b] w-full flex flex-col gap-12 md:gap-24 lg:gap-72 justify-start items-center pt-12 md:pt-16 lg:pt-24 px-4 md:px-8 pb-8 sm:pb-0"
      style={{ height: window.innerWidth >= 1024 ? "500vh" : "auto" }}
    >
      {/* Header Section */}
      <div className="text-center lg:text-left max-w-full lg:max-w-1/2 text-wrap flex flex-col gap-6 md:gap-8 lg:gap-12">
        <h1 className="font-primary text-[40px] sm:text-8xl text-white">
          Prizes...
        </h1>
        <h4 className="font-secondary text-white max-w-full lg:max-w-72 text-sm md:text-base lg:ml-24 mx-auto lg:mx-0">
          From cash prizes to exclusive opportunities,
          we offer rewards that make your victory even more memorable.
        </h4>
      </div>

      {/* Main Content Section */}
      <div
        ref={contentContainerRef}
        className="w-full flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-0"
      >
        {/* Scroller Section - Hidden on mobile */}
        <div className="hidden lg:flex gap-6">
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                ref={(el) => (scrollerRefs.current[index] = el)}
                className="rounded-full transition-all duration-300"
                style={{
                  height: index === 0 ? "7rem" : "0.375rem",
                  width: "0.375rem",
                }}
              />
            ))}
          </div>

          <div ref={contentRef}>
            <h1 className="prize-title font-bold text-3xl text-white">
              1st Prize
            </h1>
            <p
              className="prize-amount text-6xl font-bold"
              style={{ color: "rgb(234 179 8)" }}
            >
              ₹8,000
            </p>
            <p className="prize-description text-lg lg:text-xl max-w-sm text-white/50">
              Certificates, Badges, Bands and many more...
            </p>
          </div>
        </div>

        

        {/* Prizes Display */}
        <div className="relative w-full lg:w-1/2 max-w-4xl">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative h-[800px] z-10">
            <div className="w-full h-full bg-white/14 rounded-t-3xl pt-4 pl-4 flex flex-col gap-4">
              {/* Window nav buttons */}
              <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-red-400"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <div className="w-4 h-4 rounded-full bg-green-400"></div>
              </div>

              {/* Main content div */}
              <div className="w-full h-full bg-gradient-to-r from-black to-[#11011d] flex flex-col gap-12 justify-center items-center rounded-tl-2xl">
                <div
                  ref={prizeBoxesRef}
                  className="w-full flex gap-6 justify-center items-center"
                >
                  {Prize.map((prize, index) => (
                    <div key={prize.id} className="prize-box">
                      <PrizeBox
                        gradientFrom={
                          index === 0
                            ? "from-red-500"
                            : index === 1
                            ? "from-white"
                            : "from-green-500"
                        }
                        gradientTo={
                          index === 0
                            ? "to-yellow-500"
                            : index === 1
                            ? "to-[#6676D2]"
                            : "to-blue-500"
                        }
                        shadowColor={
                          index === 0
                            ? "rgba(239,68,68,0.4)"
                            : index === 2
                            ? "rgba(59,130,246,0.4)"
                            : "rgba(168,85,247,0.4)"
                        }
                        image={prize.image}
                        amount={prize.amount}
                        prizeColor={prize.prizeColor}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Background glow */}
            <div className="absolute w-full h-full bg-blue-500/40 blur-3xl -z-10 -top-16 -left-32"></div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            {/* Single row on tablet, stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Prize.map((prize, index) => (
                <div key={prize.id} className="flex flex-col items-center">
                  {/* Prize info above each box on mobile */}
                  <div className="text-center mb-4 sm:hidden">
                    <h3 className="text-white font-bold text-lg">{prize.position}</h3>
                    <p className="text-2xl font-bold" style={{ color: getColorFromClass(prize.prizeColor) }}>
                      {prize.amount}
                    </p>
                    <p className="text-white/60 text-sm">{prize.description}</p>
                  </div>
                  
                  <PrizeBox
                    gradientFrom={
                      index === 0
                        ? "from-red-500"
                        : index === 1
                        ? "from-white"
                        : "from-green-500"
                    }
                    gradientTo={
                      index === 0
                        ? "to-yellow-500"
                        : index === 1
                        ? "to-[#6676D2]"
                        : "to-blue-500"
                    }
                    shadowColor={
                      index === 0
                        ? "rgba(239,68,68,0.4)"
                        : index === 2
                        ? "rgba(59,130,246,0.4)"
                        : "rgba(168,85,247,0.4)"
                    }
                    image={prize.image}
                    amount={prize.amount}
                    prizeColor={prize.prizeColor}
                  />

                  {/* Prize info below each box on tablet */}
                  <div className="hidden sm:block lg:hidden text-center mt-4">
                    <h3 className="text-white font-bold text-lg">{prize.position}</h3>
                    <p className="text-white/60 text-sm mt-1">{prize.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
