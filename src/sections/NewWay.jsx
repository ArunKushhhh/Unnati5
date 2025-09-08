import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import './NewWay.css'

function NewWay() {

    const newwaypoints = [
        
        {title : 'Think like a CEO'},
        {title : 'Gain practical problem-solving skills'},
        {title : 'Face real startup-style challenges'},
        {title : 'Build confidence on stage'},
        {title : 'Earn recognition, rewards & growth'},
    ]

    const togrowRef = useRef(null);
    const containerRef = useRef(null);
    const iconsRef = useRef(null);
    const textRef = useRef(null);
    const newpointRef = useRef(null);
    
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: containerRef.current,
                start: 'top top',
                end: '+=400%',
                scrub: 1,
                
                anticipatePin: 1,
                pinSpacing: true,
            }
        });

        tl.to(togrowRef.current, {
            width: '100vw',
            height: '100vh',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            duration: 0.3,
            ease: "power2.out"
        })
        
        .to(textRef.current, {
            opacity: 0,
            duration: 0.2
        }, "-=0.1")
        
        .fromTo('.new-content', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        })
        
        .fromTo('.point-item', {
            opacity: 0,
            x: 30,
            scale: 0.9
        }, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.2");

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='h-screen w-full flex items-center justify-center relative overflow-hidden'>
            <div 
                ref={togrowRef} 
                className='relative growbg flex flex-col items-center justify-center border-0 shadow-2xl overflow-hidden w-[300px] md:w-[370px] h-[65vh] md:h-[85vh]'
                style={{
                    borderTopLeftRadius: '350px',
                    borderTopRightRadius: '350px',
                    borderBottomLeftRadius: '40px',
                    borderBottomRightRadius: '40px',
                }}
            >
                <div ref={textRef} className='relative z-10 text-center'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        Escape the clutter
                    </h2>
                </div>
                
                <div className='new-content absolute inset-0 flex flex-col lg:flex-row items-start  sm:justify-center lg:justify-center lg:items-center sm:gap-x-26 sm:items-center justify-center text-center z-10 opacity-0 px-12'>
                    <div className='   flex items-center justify-center'>
                        <h1 className='main-title text-left text-5xl md:text-7xl   font-bold text-white mb-8 md:mb-0'>
                            Life When You <br /> Participate in <br /> <span className="text-white">UNNATI </span>
                        </h1>
                    </div>
                    
                    <div className=' space-y-2'>
                        {
                            newwaypoints.map((point, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className='point-item flex flex-row gap-4 justify-start items-center opacity-0'
                                    >
                                        <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className='w-3 h-3 text-black text-bold' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                            </svg>
                                        </div>
                                        
                                        <p className='text-lg  text-white text-left text-wrap'>
                                            {point.title}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewWay
