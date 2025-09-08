import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import "./Faq.css";

function Faq() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: " What's so special about UNNATI 5.0?",
      answer:
        "You get the chance to compete with the best innovators of AIT in a thrilling 48-hour event packed with real-world problem statements. Add prizes, goodies, swags, and endless memories… now that's special!",
    },
    {
      question: "Do I need to pay to be part of it?",

      answer:
        "Nope. Nothing. UNNATI 5.0 is completely free for all participants.",
    },
    {
      question: "What if I don't know coding?",

      answer:
        "No problem! UNNATI isn't about coding—it's about innovative solutions. Designers, strategists, presenters, and idea-generators are welcome.",
    },
    {
      question: "Do we need to bring anything for the event?",

      answer: "Just bring your team and energy along.",
    },
    {
      question: "Can team members be from different years?",

      answer:
        "No, all members must be from the same academic year (either all FE or all SE).",
    },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const faqItems = gsap.utils.toArray(".faq-item");
      faqItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 30,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              scrub: 1,
              trigger: item,

              start: "top 95%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        ".right-content",
        {
          opacity: 0,
          x: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".right-content",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".floating-element", {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.fromTo(
        ".faderbg",
        {
          opacity: 0,
        },
        {
          opacity: 0.9,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".faderbg",

            start: "top 80%",
            end: "bottom 60%",
          },
        }
      );

      gsap.fromTo(
        ".faq-header",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".faq-header",
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleDownloadRulebook = () => {
    window.open("https://drive.google.com/drive/folders/1cnk5o6rHvsW_ieuUkV_Wg50rxaT1cCr4?usp=sharing", "_blank");
  };

  const handleContactSupport = () => {
    window.location.href = "mailto:ecellait@gmail.com";
  };

  return (
    <div id="faq" ref={containerRef} className="py-20 px-4  min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="faq-header text-center mb-16">
          <h2 className="font-primary font-bold text-[#250835] text-[clamp(40px,8vw,4rem)] leading-[95%] mb-4">
            Frequently Asked <br /> Questions
          </h2>
          <p className="font-secondary text-[#6a5b72] text-xl max-w-2xl mx-auto">
            Everything you need to know about Unnati and how it can help your
            team think better together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            ref={leftRef}
            className="space-y-6 bg-[#f0eef2] p-8 rounded-3xl overflow-hidden z-0 relative "
          >
            <div className="absolute w-full h-full  top-0 left-0 faqbg faderbg -z-10"></div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  openFaq === index
                    ? "ring-2 ring-purple-300 border-2 border-purple-300"
                    : "border border-purple-100 hover:border-purple-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none rounded-2xl group"
                >
                  <span className="font-semibold text-[#250835] text-lg pr-4 group-hover:text-purple-700 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {openFaq === index ? (
                      <ChevronUpIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "max-h-[500px] opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <div className="px-6">
                    <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-xl p-5 border-l-4 border-purple-400 shadow-sm">
                      <p className="text-[#4a5568] leading-relaxed text-base font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={rightRef} className="right-content ">
            <div className="bg-[#f0eef2] rounded-3xl z-0 p-12 text-white relative overflow-hidden shadow-2xl bgstill">
              <div className="absolute top-0 left-0 bg-black w-full h-full opacity-25 -z-10"></div>

              <div className="relative z-10 text-center">
                <div className="floating-element">
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r  bg-clip-text text-white">
                    Still have questions?
                  </h3>

                  <p className="text-white font-secondary font-medium mb-10 leading-relaxed text-xl max-w-md mx-auto">
                    Can't find the answer you're looking for? Our support team
                    is here to help you get the most out of Whimsical.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleDownloadRulebook}
                      className="bg-white text-purple-700 font-semibold px-10 py-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
                    >
                      Download Rulebook
                    </button>
                    <button 
                      onClick={handleContactSupport}
                      className="bg-white text-purple-700 font-semibold px-10 py-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
                    >
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;