import React, { useRef } from 'react'
import image1 from '../assets/image1.svg'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

function IconAnimation() {
  const containerRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const icon4Ref = useRef(null);
  const icon5Ref = useRef(null);
  const icon6Ref = useRef(null);
  const icon7Ref = useRef(null);
  const icon8Ref = useRef(null);
  const icon9Ref = useRef(null);
  const icon10Ref = useRef(null);
  const icon11Ref = useRef(null);
  const icon12Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "+=500vh",
        pin: true,
        scrub: 1,
        // markers:true,
      }
    })
    .to(icon1Ref.current, { bottom: "50%", left: "30%" }, 0)
    .to(icon2Ref.current, { bottom: "60%", left: "5%" }, 0)
    .to(icon3Ref.current, { bottom: "70%", left: "50%" }, 0)
    .to(icon4Ref.current, { bottom: "40%", left: "20%" }, 0)
    .to(icon5Ref.current, { bottom: "80%", left: "40%" }, 0)
    .to(icon6Ref.current, { bottom: "30%", left: "60%" }, 0)
    .to(icon7Ref.current, { bottom: "90%", left: "70%" }, 0)
    .to(icon8Ref.current, { bottom: "20%", left: "80%" }, 0)
    .to(icon9Ref.current, { bottom: "85%", left: "15%" }, 0)
    .to(icon10Ref.current, { bottom: "25%", left: "35%" }, 0)
    .to(icon11Ref.current, { bottom: "95%", left: "55%" }, 0)
    .to(icon12Ref.current, { bottom: "15%", left: "75%" }, 0);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className='relative - h-[200px] w-full'>
      <div ref={icon1Ref} className='bg-white bottom-0 p-1 absolute left-[10%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon2Ref} className='bg-white p-1 bottom-0 absolute left-[20%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon3Ref} className='bg-white p-1 bottom-0 absolute left-[30%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon4Ref} className='bg-white p-1 bottom-0 absolute left-[60%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon5Ref} className='bg-white p-1 bottom-0 absolute left-[70%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon6Ref} className='bg-white p-1 bottom-0 absolute left-[80%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon7Ref} className='bg-white p-1 absolute bottom-38 left-[10%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon8Ref} className='bg-white p-1 absolute bottom-38 left-[20%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon9Ref} className='bg-white p-1 absolute bottom-38 left-[70%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon10Ref} className='bg-white p-1 absolute bottom-38 left-[80%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon11Ref} className='bg-white p-1 absolute bottom-76 left-[10%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
      <div ref={icon12Ref} className='bg-white p-1 absolute bottom-76 left-[80%] rounded-2xl'>
        <img className='w-[130px]' src={image1} alt="" />
      </div>
    </div>
  )
}

export default IconAnimation
