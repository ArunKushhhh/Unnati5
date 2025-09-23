import React, { useRef, useState } from 'react'
import CommentCard from '../ui/CommentCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Comments() {
  const [showAllSecretaries, setShowAllSecretaries] = useState(false)
  const [showAllJtSecretaries, setShowAllJtSecretaries] = useState(false)

  const secretariesAndHeads = [
    {
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "Jeff Weinstein",
      instagramHandle: "@jeff_weinstein",
      verifiedIcon: true,
      githubUrl: "https://github.com/jeffweinstein",
      linkedinUrl: "https://linkedin.com/in/jeffweinstein",
      instagramUrl: "https://instagram.com/jeff_weinstein"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Jake Mor",
      instagramHandle: "@jakemor",
      verifiedIcon: true,
      githubUrl: "https://github.com/jakemor",
      linkedinUrl: "https://linkedin.com/in/jakemor",
      instagramUrl: "https://instagram.com/jakemor"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b766?w=100&h=100&fit=crop&crop=face",
      name: "Max Ogles",
      instagramHandle: "@maxogles",
      verifiedIcon: true,
      githubUrl: "https://github.com/maxogles",
      linkedinUrl: "https://linkedin.com/in/maxogles",
      instagramUrl: "https://instagram.com/maxogles"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      name: "Design papa",
      instagramHandle: "@designpapa",
      verifiedIcon: true,
      githubUrl: "https://github.com/designpapa",
      linkedinUrl: "https://linkedin.com/in/designpapa",
      instagramUrl: "https://instagram.com/designpapa"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      name: "Josh Johnson",
      instagramHandle: "@secondfret",
      verifiedIcon: true,
      githubUrl: "https://github.com/secondfret",
      linkedinUrl: "https://linkedin.com/in/joshjohnson",
      instagramUrl: "https://instagram.com/secondfret"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      name: "Mark Johnson CC",
      instagramHandle: "@markjohnsoncc",
      verifiedIcon: true,
      githubUrl: "https://github.com/markjohnsoncc",
      linkedinUrl: "https://linkedin.com/in/markjohnsoncc",
      instagramUrl: "https://instagram.com/markjohnsoncc"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      name: "Shahed Khan",
      instagramHandle: "@_shahedk",
      verifiedIcon: false,
      githubUrl: "https://github.com/shahedk",
      linkedinUrl: "https://linkedin.com/in/shahedkhan",
      instagramUrl: "https://instagram.com/_shahedk"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      name: "Danny Trinh",
      instagramHandle: "@dtrinh",
      verifiedIcon: false,
      githubUrl: "https://github.com/dtrinh",
      linkedinUrl: "https://linkedin.com/in/dannytrinh",
      instagramUrl: "https://instagram.com/dtrinh"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "Sarah Wilson",
      instagramHandle: "@sarahwilson",
      verifiedIcon: true,
      githubUrl: "https://github.com/sarahwilson",
      linkedinUrl: "https://linkedin.com/in/sarahwilson",
      instagramUrl: "https://instagram.com/sarahwilson"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Michael Chen",
      instagramHandle: "@michaelchen",
      verifiedIcon: true,
      githubUrl: "https://github.com/michaelchen",
      linkedinUrl: "https://linkedin.com/in/michaelchen",
      instagramUrl: "https://instagram.com/michaelchen"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b766?w=100&h=100&fit=crop&crop=face",
      name: "Emma Davis",
      instagramHandle: "@emmadavis",
      verifiedIcon: true,
      githubUrl: "https://github.com/emmadavis",
      linkedinUrl: "https://linkedin.com/in/emmadavis",
      instagramUrl: "https://instagram.com/emmadavis"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      name: "David Brown",
      instagramHandle: "@davidbrown",
      verifiedIcon: true,
      githubUrl: "https://github.com/davidbrown",
      linkedinUrl: "https://linkedin.com/in/davidbrown",
      instagramUrl: "https://instagram.com/davidbrown"
    }
  ]

  const jtSecretaries = [
    {
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      name: "Alex Rodriguez",
      instagramHandle: "@alexrodriguez",
      verifiedIcon: false,
      githubUrl: "https://github.com/alexrodriguez",
      linkedinUrl: "https://linkedin.com/in/alexrodriguez",
      instagramUrl: "https://instagram.com/alexrodriguez"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      name: "Jessica Taylor",
      instagramHandle: "@jessicataylor",
      verifiedIcon: false,
      githubUrl: "https://github.com/jessicataylor",
      linkedinUrl: "https://linkedin.com/in/jessicataylor",
      instagramUrl: "https://instagram.com/jessicataylor"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      name: "Ryan Martinez",
      instagramHandle: "@ryanmartinez",
      verifiedIcon: false,
      githubUrl: "https://github.com/ryanmartinez",
      linkedinUrl: "https://linkedin.com/in/ryanmartinez",
      instagramUrl: "https://instagram.com/ryanmartinez"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      name: "Sophie Anderson",
      instagramHandle: "@sophieanderson",
      verifiedIcon: false,
      githubUrl: "https://github.com/sophieanderson",
      linkedinUrl: "https://linkedin.com/in/sophieanderson",
      instagramUrl: "https://instagram.com/sophieanderson"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "Kevin Lee",
      instagramHandle: "@kevinlee",
      verifiedIcon: false,
      githubUrl: "https://github.com/kevinlee",
      linkedinUrl: "https://linkedin.com/in/kevinlee",
      instagramUrl: "https://instagram.com/kevinlee"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Amy Clark",
      instagramHandle: "@amyclark",
      verifiedIcon: false,
      githubUrl: "https://github.com/amyclark",
      linkedinUrl: "https://linkedin.com/in/amyclark",
      instagramUrl: "https://instagram.com/amyclark"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b766?w=100&h=100&fit=crop&crop=face",
      name: "James Wilson",
      instagramHandle: "@jameswilson",
      verifiedIcon: false,
      githubUrl: "https://github.com/jameswilson",
      linkedinUrl: "https://linkedin.com/in/jameswilson",
      instagramUrl: "https://instagram.com/jameswilson"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      name: "Lisa Garcia",
      instagramHandle: "@lisagarcia",
      verifiedIcon: false,
      githubUrl: "https://github.com/lisagarcia",
      linkedinUrl: "https://linkedin.com/in/lisagarcia",
      instagramUrl: "https://instagram.com/lisagarcia"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      name: "Chris Thompson",
      instagramHandle: "@christhompson",
      verifiedIcon: false,
      githubUrl: "https://github.com/christhompson",
      linkedinUrl: "https://linkedin.com/in/christhompson",
      instagramUrl: "https://instagram.com/christhompson"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      name: "Rachel White",
      instagramHandle: "@rachelwhite",
      verifiedIcon: false,
      githubUrl: "https://github.com/rachelwhite",
      linkedinUrl: "https://linkedin.com/in/rachelwhite",
      instagramUrl: "https://instagram.com/rachelwhite"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      name: "Daniel Harris",
      instagramHandle: "@danielharris",
      verifiedIcon: false,
      githubUrl: "https://github.com/danielharris",
      linkedinUrl: "https://linkedin.com/in/danielharris",
      instagramUrl: "https://instagram.com/danielharris"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      name: "Megan Lewis",
      instagramHandle: "@meganlewis",
      verifiedIcon: false,
      githubUrl: "https://github.com/meganlewis",
      linkedinUrl: "https://linkedin.com/in/meganlewis",
      instagramUrl: "https://instagram.com/meganlewis"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "Tom Walker",
      instagramHandle: "@tomwalker",
      verifiedIcon: false,
      githubUrl: "https://github.com/tomwalker",
      linkedinUrl: "https://linkedin.com/in/tomwalker",
      instagramUrl: "https://instagram.com/tomwalker"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Grace Martin",
      instagramHandle: "@gracemartin",
      verifiedIcon: false,
      githubUrl: "https://github.com/gracemartin",
      linkedinUrl: "https://linkedin.com/in/gracemartin",
      instagramUrl: "https://instagram.com/gracemartin"
    }
  ]

  // For mobile: show first 3 cards unless "see more" is clicked
  const displayedSecretaries = showAllSecretaries ? secretariesAndHeads : secretariesAndHeads.slice(0, 3)
  const displayedJtSecretaries = showAllJtSecretaries ? jtSecretaries : jtSecretaries.slice(0, 3)

  // For web view columns
  const secretariesColumn1 = secretariesAndHeads.slice(0, 4)
  const secretariesColumn2 = secretariesAndHeads.slice(4, 8)
  const secretariesColumn3 = secretariesAndHeads.slice(8, 12)

  const jtSecretariesColumn1 = jtSecretaries.slice(0, 5)
  const jtSecretariesColumn2 = jtSecretaries.slice(5, 10)
  const jtSecretariesColumn3 = jtSecretaries.slice(10, 14) 

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const mobileRef1 = useRef(null);
  const mobileRef2 = useRef(null);

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 

    const cards = gsap.utils.toArray('.secretaries-card1');

    cards.forEach(
      (card)=>{
        gsap.from(card, {
          opacity: 0,
          y:100, 
          scrollTrigger: {
            trigger: card,
            scrub: 1, 
            start: 'top 90%', 
            end: 'center 70%', 
          },
        });
      }
    );
  },{
    scope: div1Ref,       
  });

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 

    const cards = gsap.utils.toArray('.secretaries-card2');

    cards.forEach(
      (card)=>{
        gsap.from(card, {
          opacity: 0,
          y: 100, 
          scrollTrigger: {
            trigger: card,
            scrub: 1,
            start: 'top 90%', 
            end: 'center 70%', 
          },
        });
      }
    );
  },{
    scope: div2Ref,       
  });

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 

    const cards = gsap.utils.toArray('.secretaries-card3');

    cards.forEach(
      (card)=>{
        gsap.from(card, {
          opacity: 0,
          y: 100, 
          scrollTrigger: {
            trigger: card,
            scrub: 2, 
            start: 'top 90%', 
            end: 'center 70%', 
          },
        });
      }
    );
  },{
    scope: div3Ref,       
  });

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 

    const cards = gsap.utils.toArray('.jt-secretaries-card1');

    cards.forEach(
      (card)=>{
        gsap.from(card, {
          opacity: 0,
          y:100, 
          scrollTrigger: {
            trigger: card,
            scrub: 1, 
            start: 'top 90%', 
            end: 'center 70%', 
          },
        });
      }
    );
  },{
    scope: div4Ref,       
  });

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 

    const cards = gsap.utils.toArray('.jt-secretaries-card2');

    cards.forEach(
      (card)=>{
        gsap.from(card, {
          opacity: 0,
          y: 100, 
          scrollTrigger: {
            trigger: card,
            scrub: 1,
            start: 'top 90%', 
            end: 'center 70%', 
          },
        });
      }
    );
  },{
    scope: div5Ref,       
  });

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 

    const cards = gsap.utils.toArray('.jt-secretaries-card3');

    cards.forEach(
      (card)=>{
        gsap.from(card, {
          opacity: 0,
          y: 100, 
          scrollTrigger: {
            trigger: card,
            scrub: 2, 
            start: 'top 90%', 
            end: 'center 70%', 
          },
        });
      }
    );
  },{
    scope: div6Ref,       
  });

  // Mobile animations
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 

    const cards = gsap.utils.toArray('.mobile-secretaries-card');

    cards.forEach(
      (card)=>{
        gsap.from(card, {
          opacity: 0,
          y: 50, 
          scrollTrigger: {
            trigger: card,
            scrub: 1,
            start: 'top 90%', 
            end: 'center 70%', 
          },
        });
      }
    );
  },{
    scope: mobileRef1,       
  });

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 

    const cards = gsap.utils.toArray('.mobile-jt-card');

    cards.forEach(
      (card)=>{
        gsap.from(card, {
          opacity: 0,
          y: 50, 
          scrollTrigger: {
            trigger: card,
            scrub: 1,
            start: 'top 90%', 
            end: 'center 70%', 
          },
        });
      }
    );
  },{
    scope: mobileRef2,       
  });

  return (
    <div className='flex flex-col py-16 px-4 md:gap-y-10 max-w-screen'>
      <div className='flex flex-col text-left gap-y-3 w-[90vw] md:px-20 mb-12 lg:mb-0'>
        <p className='font-primary font-bold text-nowrap text-[#250835] text-[clamp(50px,13.5vw,11.25rem)] leading-[95%]'>Our Team</p>
        <p className='font-secondary ml-3 md:ml-24 lg:ml-41 text-[1.5rem] text-[#6a5b72] font-medium'>Meet the<br />Team.</p>  
      </div>
      
      {/* Secretaries and Team Heads Section */}
      <div className='mb-16'>
        <h2 className='font-primary font-bold text-[#250835] text-[clamp(32px,8vw,4rem)] text-center mb-16 md:mb-50'>Secretaries & Team Heads</h2>
        
        {/* Mobile View */}
        <div className='block md:hidden max-w-sm mx-auto space-y-4' ref={mobileRef1}>
          {displayedSecretaries.map((member, index) => (
            <div key={index} className='mobile-secretaries-card'>
              <CommentCard
                profileImage={member.profileImage}
                name={member.name}
                instagramHandle={member.instagramHandle}
                instagramUrl={member.instagramUrl}
                verifiedIcon={member.verifiedIcon}
                githubUrl={member.githubUrl}
                linkedinUrl={member.linkedinUrl}
              />
            </div>
          ))}
          {!showAllSecretaries && secretariesAndHeads.length > 3 && (
            <div
              onClick={() => setShowAllSecretaries(true)}
              className='w-full mt-6 cursor-pointer text-center'
            >
              <p className='text-[#250835] font-medium text-xl mb-2 hover:text-purple-600 transition-colors flex items-center justify-center gap-2'>
                See More
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </p>
            </div>
          )}
          {showAllSecretaries && (
            <div
              onClick={() => setShowAllSecretaries(false)}
              className='w-full mt-6 cursor-pointer text-center'
            >
              <p className='text-[#250835] font-medium text-xl mb-2 hover:text-gray-600 transition-colors flex items-center justify-center gap-2'>
                Show Less
                <svg className="w-5 h-5 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </p>
              <p className='text-[#6a5b72] text-base'>
                Collapse view
              </p>
            </div>
          )}
        </div>

        {/* Desktop/Tablet View */}
        <div className='hidden md:block max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='space-y-4' ref={div1Ref}>
              {secretariesColumn1.map((member, index) => (
                <div key={index} className='secretaries-card1'>
                  <CommentCard
                    profileImage={member.profileImage}
                    name={member.name}
                    instagramHandle={member.instagramHandle}
                    instagramUrl={member.instagramUrl}
                    verifiedIcon={member.verifiedIcon}
                    githubUrl={member.githubUrl}
                    linkedinUrl={member.linkedinUrl}
                  />
                </div>
              ))}
            </div>
            
            <div className='space-y-4 -mt-24 hidden md:block' ref={div2Ref}>
              {secretariesColumn2.map((member, index) => (
                <div key={index} className='secretaries-card2'>
                  <CommentCard
                    profileImage={member.profileImage}
                    name={member.name}
                    instagramHandle={member.instagramHandle}
                    instagramUrl={member.instagramUrl}
                    verifiedIcon={member.verifiedIcon}
                    githubUrl={member.githubUrl}
                    linkedinUrl={member.linkedinUrl}
                  />
                </div>
              ))}
            </div>
            
            <div className='space-y-4 -mt-42 hidden lg:block' ref={div3Ref}>
              {secretariesColumn3.map((member, index) => (
                <div key={index} className='secretaries-card3'>
                  <CommentCard
                    profileImage={member.profileImage}
                    name={member.name}
                    instagramHandle={member.instagramHandle}
                    instagramUrl={member.instagramUrl}
                    verifiedIcon={member.verifiedIcon}
                    githubUrl={member.githubUrl}
                    linkedinUrl={member.linkedinUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Jt. Secretaries Section */}
      <div>
        <h2 className='font-primary font-bold text-[#250835] text-[clamp(32px,8vw,4rem)] text-center mb-16 md:mb-50'>Jt. Secretaries</h2>
        
        {/* Mobile View */}
        <div className='block md:hidden max-w-sm mx-auto space-y-4' ref={mobileRef2}>
          {displayedJtSecretaries.map((member, index) => (
            <div key={index} className='mobile-jt-card'>
              <CommentCard
                profileImage={member.profileImage}
                name={member.name}
                instagramHandle={member.instagramHandle}
                instagramUrl={member.instagramUrl}
                verifiedIcon={member.verifiedIcon}
                githubUrl={member.githubUrl}
                linkedinUrl={member.linkedinUrl}
              />
            </div>
          ))}
          {!showAllJtSecretaries && jtSecretaries.length > 3 && (
            <div
              onClick={() => setShowAllJtSecretaries(true)}
              className='w-full mt-6 cursor-pointer text-center'
            >
              <p className='text-[#250835] font-medium text-xl mb-2 hover:text-purple-600 transition-colors flex items-center justify-center gap-2'>
                See More
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </p>
            </div>
          )}
          {showAllJtSecretaries && (
            <div
              onClick={() => setShowAllJtSecretaries(false)}
              className='w-full mt-6 cursor-pointer text-center'
            >
              <p className='text-[#250835] font-medium text-xl mb-2 hover:text-gray-600 transition-colors flex items-center justify-center gap-2'>
                Show Less
                <svg className="w-5 h-5 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </p>
              <p className='text-[#6a5b72] text-base'>
                Collapse view
              </p>
            </div>
          )}
        </div>

        {/* Desktop/Tablet View */}
        <div className='hidden md:block max-w-6xl mt-16 mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='space-y-4' ref={div4Ref}>
              {jtSecretariesColumn1.map((member, index) => (
                <div key={index} className='jt-secretaries-card1'>
                  <CommentCard
                    profileImage={member.profileImage}
                    name={member.name}
                    instagramHandle={member.instagramHandle}
                    instagramUrl={member.instagramUrl}
                    verifiedIcon={member.verifiedIcon}
                    githubUrl={member.githubUrl}
                    linkedinUrl={member.linkedinUrl}
                  />
                </div>
              ))}
            </div>
            
            <div className='space-y-4 -mt-24 hidden md:block' ref={div5Ref}>
              {jtSecretariesColumn2.map((member, index) => (
                <div key={index} className='jt-secretaries-card2'>
                  <CommentCard
                    profileImage={member.profileImage}
                    name={member.name}
                    instagramHandle={member.instagramHandle}
                    instagramUrl={member.instagramUrl}
                    verifiedIcon={member.verifiedIcon}
                    githubUrl={member.githubUrl}
                    linkedinUrl={member.linkedinUrl}
                  />
                </div>
              ))}
            </div>
            
            <div className='space-y-4 -mt-42 hidden lg:block' ref={div6Ref}>
              {jtSecretariesColumn3.map((member, index) => (
                <div key={index} className='jt-secretaries-card3'>
                  <CommentCard
                    profileImage={member.profileImage}
                    name={member.name}
                    instagramHandle={member.instagramHandle}
                    instagramUrl={member.instagramUrl}
                    verifiedIcon={member.verifiedIcon}
                    githubUrl={member.githubUrl}
                    linkedinUrl={member.linkedinUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
