import React from 'react'
import './Rule.css'

function Rule() {
  const handleRuleBookClick = () => {
    window.open('https://drive.google.com/drive/folders/1cnk5o6rHvsW_ieuUkV_Wg50rxaT1cCr4?usp=sharing', '_blank');
  };

  return (
    <div id='rules' className='bgpart mt-14 relative w-[87vw] rounded-3xl z-0 flex flex-col justify-center items-center gap-y-12 md:gap-y-8 py-8 md:py-16 '>
        <div className='absolute top-0 w-full h-full bg-black opacity-70 -z-20 rounded-3xl '></div>
        <div className='text-center -pt-4 gapy-y-4 md:gap-y-6 text-white flex flex-col items-center  '>
            <p className='p-4 sm:p-0 text-[2rem] sm:text-[3rem] font-primary font-bold max-w-[550px]   leading-[125%]    text-white'>Every step of Unnati shapes you</p>
            <p className='md:text-[16px] text-[14px]  max-w-[540px] px-4 font-secondary'>From cracking problems to commanding the stage, every challenge makes you quicker, smarter, and more fearless. Unnati goes beyond competition — it's the journey to becoming a changemaker.</p>
        </div>
        <div className='hover:cursor-pointer' onClick={handleRuleBookClick}>
            <div className='border-2 border-white border-solid w-fit rounded-3xl p-2' >
            <div className='md:text-[28px]  text-[20px] px-6 py-4 rounded-3xl font-primary  font-bold md:px-8 md:py-6 bg-white'>View  Rule Book</div>

            </div>
        </div>
      
    </div>
  )
}

export default Rule