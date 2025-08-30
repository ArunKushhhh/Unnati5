import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

function Trusted() {

    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const wrapperWidth = wrapperRef.current.scrollWidth / 3;

        gsap.to(wrapperRef.current, {
            x: `-${wrapperWidth}px`,
            duration: 10,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <div  className="w-full mb-24">
            <div className="flex justify-center items-start mb-10 pt-10">
                <h3>Trusted by millions</h3>
            </div>

            <div className="overflow-hidden w-full mb-20">
                <div
                    ref={wrapperRef}
                    className="companies-wrapper flex gap-20 text-2xl text-gray-300 whitespace-nowrap"
                >
                    <div>INVISIBLE</div>
                    <div>KLAVIYA</div>
                    <div>MERCADI LIBRE</div>
                    <div>NEW RELIC</div>
                    <div>ONE MEDICAL</div>
                    <div>PENDO</div>
                    <div>RETOOL</div>
                    <div>RIPPLING</div>
                    <div>VERCEL</div>
                    <div>AMAZON</div>
                    <div>ANTHROPIC</div>
                    <div>HASHICORP</div>
                    <div>INTERCOM</div>

                    <div>INVISIBLE</div>
                    <div>KLAVIYA</div>
                    <div>MERCADI LIBRE</div>
                    <div>NEW RELIC</div>
                    <div>ONE MEDICAL</div>
                    <div>PENDO</div>
                    <div>RETOOL</div>
                    <div>RIPPLING</div>
                    <div>VERCEL</div>
                    <div>AMAZON</div>
                    <div>ANTHROPIC</div>
                    <div>HASHICORP</div>
                    <div>INTERCOM</div>
                </div>
            </div>

        </div>
    )
}

export default Trusted
