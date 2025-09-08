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
      // Calculate the proper end point for pinning
      const calculateEndPoint = () => {
        const mainContainerHeight = mainContainerRef.current.offsetHeight;
        const contentContainerHeight = contentContainerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Pin should start when bottom of contentContainer hits bottom of screen
        // Pin should end when we've scrolled enough for contentContainer bottom to align with prizes section bottom
        const scrollDistanceNeeded =
          mainContainerHeight - contentContainerHeight - viewportHeight + 235; // Extra 200px for some buffer

        return `+=${scrollDistanceNeeded}px`;
      };

      // Pin the content container within the main container
      ScrollTrigger.create({
        trigger: contentContainerRef.current,
        start: "bottom bottom", // Start pinning when bottom of content hits bottom of viewport
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
              // Current active prize - animate height based on progress
              const height = 0.375 + 6.625 * localProgress; // 0.375rem (h-1.5) to 7rem (h-28)
              gsap.set(scroller, {
                height: `${height}rem`,
                width: "0.375rem", // w-1.5
                backgroundColor: "rgb(168 85 247)", // purple-500
                opacity: 1,
              });
            } else {
              // All other prizes (both completed and future) - small dots
              gsap.set(scroller, {
                height: "0.375rem", // h-1.5 equivalent
                width: "0.375rem", // w-1.5 equivalent
                backgroundColor:
                  index < currentPrize
                    ? "rgb(168 85 247)" // Completed prizes - full color
                    : "rgb(168 85 247 / 0.5)", // Future prizes - reduced opacity
                opacity: index < currentPrize ? 1 : 0.5,
              });
            }
          });

          // Update content based on current prize
          updateContent(currentPrize);
        },
        onRefresh: () => {
          // Recalculate end point on refresh/resize
          ScrollTrigger.getById("pinTrigger")?.refresh();
        },
        id: "pinTrigger",
      });

      // Initial setup
      setupScrollers();
      updateContent(0);

      // Handle resize events
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

  const setupScrollers = () => {
    scrollerRefs.current.forEach((scroller, index) => {
      if (index === 0) {
        gsap.set(scroller, {
          height: "7rem", // h-28 equivalent
          width: "0.375rem",
          backgroundColor: "rgb(168 85 247)",
          opacity: 1,
        });
      } else {
        gsap.set(scroller, {
          height: "0.375rem", // h-1.5 equivalent
          width: "0.375rem",
          backgroundColor: "rgb(168 85 247 / 0.5)",
          opacity: 0.5,
        });
      }
    });
  };

  // Helper function to convert Tailwind color classes to CSS color values
  const getColorFromClass = (colorClass) => {
    const colorMap = {
      "text-yellow-500": "rgb(234 179 8)",
      "text-[#6676D2]": "#6676D2",
      "text-[#E97D15]": "#E97D15",
    };
    return colorMap[colorClass] || "rgb(234 179 8)"; // Default to yellow
  };

  const updateContent = (prizeIndex) => {
    const currentPrize = Prize[prizeIndex];

    // Update text content
    const titleElement = contentRef.current?.querySelector(".prize-title");
    const amountElement = contentRef.current?.querySelector(".prize-amount");
    const descriptionElement =
      contentRef.current?.querySelector(".prize-description");

    if (titleElement) titleElement.textContent = currentPrize.position;
    if (amountElement) {
      amountElement.textContent = currentPrize.amount;
      // Update the color dynamically
      amountElement.style.color = getColorFromClass(currentPrize.prizeColor);
    }
    if (descriptionElement)
      descriptionElement.textContent = currentPrize.description;

    // Update prize boxes visibility/highlight
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
      ref={mainContainerRef}
      className="bg-[#11001b] w-full flex flex-col gap-72 justify-start items-center pt-24"
      style={{ height: "500vh" }} // Set explicit height for the main container
    >
      {/* Header Section */}
      <div className="text-left max-w-1/2 text-wrap flex flex-col gap-12">
        <h1 className="font-primary text-8xl text-white">
          Prizes Prizes Prizes Prizes
        </h1>
        <h4 className="font-secondary text-white max-w-72 ml-24">
          From brainstorm to launch—create, plan, and communicate in one
          interconnected workspace.
        </h4>
      </div>

      {/* Main Content Section with Additional Ref */}
      <div
        ref={contentContainerRef}
        className="w-full flex justify-around items-center"
      >
        {/* Scroller Section */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                ref={(el) => (scrollerRefs.current[index] = el)}
                className="rounded-full transition-all duration-300"
                style={{
                  height: index === 0 ? "7rem" : "0.375rem", // h-28 : h-1.5
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
            <p className="prize-description text-xl max-w-sm text-white/50">
              Certificates, Badges, Bands and many more...
            </p>
          </div>
        </div>

        {/* Prizes Display */}
        <div className="relative h-[800px] w-1/2 z-10">
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
                <div className="prize-box">
                  <PrizeBox
                    gradientFrom="from-red-500"
                    gradientTo="to-yellow-500"
                    shadowColor="rgba(239,68,68,0.4)"
                    image={Fprize}
                    amount={Prize[0].amount}
                    prizeColor={Prize[0].prizeColor}
                  />
                </div>
                <div className="prize-box">
                  <PrizeBox
                    gradientFrom="from-white"
                    gradientTo="to-[#6676D2]"
                    image={Prize[1].image}
                    amount={Prize[1].amount}
                    prizeColor={Prize[1].prizeColor}
                  />
                </div>
                <div className="prize-box">
                  <PrizeBox
                    gradientFrom="from-green-500"
                    gradientTo="to-blue-500"
                    shadowColor="rgba(59,130,246,0.4)"
                    image={Prize[2].image}
                    amount={Prize[2].amount}
                    prizeColor={Prize[2].prizeColor}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Background glow */}
          <div className="absolute w-full h-full bg-blue-500/40 blur-3xl -z-10 -top-16 -left-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
