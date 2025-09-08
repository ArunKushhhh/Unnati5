import React from "react";

const Prizes = () => {
  return (
    <div className="bg-[#11001b] w-full flex flex-col gap-72 justify-center items-center pt-24">
      <div className="text-left max-w-1/2 text-wrap flex flex-col gap-12">
        <h1 className="font-primary text-8xl text-white">
          Prizes Prizes Prizes Prizes
        </h1>
        <h4 className="font-secondary text-white max-w-72 ml-24">
          From brainstorm to launch—create, plan, and communicate in one
          interconnected workspace.
        </h4>
      </div>
      <div className="w-full flex justify-around items-center">
        {/* <Scroller /> */}
        <div className="h-44 w-44 bg-amber-50"></div>
        <div className="relative h-[800px] w-1/2 z-10">
          <div className="absolute w-full h-full bg-gradient-to-r from-black/0 via-black/60 to to-[#11011c] z-20 bottom-0"></div>
          <div className="absolute transx w-full h-full bg-gradient-to-br from-black/0 via-black/60 to to-[#11011c] z-20 bottom-0"></div>
          <div className="w-full h-full bg-white/14 rounded-tl-3xl pt-4 pl-4 flex flex-col gap-4">
            <div className="flex gap-1.5"> 
              <div className="w-4 h-4 rounded-full bg-white/40"></div>
              <div className="w-4 h-4 rounded-full bg-white/40"></div>
              <div className="w-4 h-4 rounded-full bg-white/40"></div>
            </div>
            <div className="w-full h-full bg-white rounded-tl-2xl"></div>

          </div>
          <div className="absolute w-full h-full bg-blue-500/40 blur-3xl -z-10 -top-16 -left-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
