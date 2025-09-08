import React, { useState, useCallback } from "react";
import Fprize from "/1st.svg";
import Sprize from "/2nd.svg";
import Tprize from "/3rd.svg";


const PrizeBox = ({
  gradientFrom,
  gradientTo,
  shadowColor = "rgba(168,85,247,0.4)",
  image,
  amount,
  prizeColor = "text-yellow-500"
}) => {
  const [transform, setTransform] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15; // Reduced sensitivity for smoother feel
    const rotateY = (centerX - x) / 15;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    setIsHovered(false);
  }, []);

  // Helper function to convert Tailwind color classes to CSS color values
  const getColorFromClass = (colorClass) => {
    const colorMap = {
      'text-yellow-500': 'rgb(234 179 8)',
      'text-[#6676D2]': '#6676D2',
      'text-[#E97D15]': '#E97D15'
    };
    return colorMap[colorClass] || 'rgb(234 179 8)'; // Default to yellow
  };

  return (
    <div
      className={`p-0.5 w-64 h-72 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl will-change-transform transition-shadow duration-300`}
      style={{
        transform,
        transition: transform.includes("0deg")
          ? "transform 0.3s ease-out, box-shadow 0.3s ease-out"
          : "box-shadow 0.3s ease-out",
        boxShadow: isHovered ? `0px 0px 20px 10px ${shadowColor}` : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full bg-black rounded-xl px-6 py-6">
        <div className="h-full w-full flex flex-col justify-between items-start">
          <img src={image} className="w-24" />
          <p 
            className="text-6xl font-bold" 
            style={{ color: getColorFromClass(prizeColor) }}
          >
            {amount}
          </p>
          <p className="text-white/80">Winning Certificate + Mugs + Other Goodies</p>
        </div>
      </div>
    </div>
  );
};

export default PrizeBox;