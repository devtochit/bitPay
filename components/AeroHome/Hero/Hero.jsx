/* eslint-disable react/jsx-key */
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import heroMk from "../../assets/heromockup.svg";



import { BlueButton } from "../../Buttons.js";

// GSAP

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroTitle = useRef(null);
  const heroInfo = useRef(null);
  const heroBtn = useRef(null);
  const heroImage = useRef(null);
  const heroSection = useRef(null);

  useEffect(() => {
    const el_1 = heroTitle.current;

    const el_3 = heroBtn.current;
    const el_4 = heroImage.current;
    const hero = heroSection.current;

    let tl_1 = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
      },
    });

    tl_1.from(el_1, { x: -400, opacity: 0, duration: 1 });
    tl_1.from(el_3, { x: -400, opacity: 0, duration: 1.1 });
    tl_1.from(el_4, { y: -600, opacity: 0.3, duration: 1 });
  }, []);

  return (
    <section
      ref={heroSection}
      className="hero-section bg-aeroblack pt-[7rem] md:pl-12 md:pr-12 lg:px:12 flex  sm:flex-col md:flex-row justify-between"
    >
      <div
        className={`text-zeddblack sm:text-center md:text-left sm:mt-5 sm:px-12 md:px-0 md:w-1/2  md:self-center`}
      >
        <h2
          ref={heroTitle}
          className="hero-title font-pops font-bold sm:text-[25px] sm:leading-[32px] md:text-[40px]  mb-5 md:leading-[60px]"
        >
          Purchase anything online with your airtime
        </h2>

        <p
          ref={heroInfo}
          className="font-pops text-zeddgray md:pr-[10%] sm:text-[14px] sm:leading-[21px] md:text-[16px] md:leading-[24px]"
        >
          Shop online, go premium, get assets, pay for services and most
          importantly purchase that new Call of Duty weapon with airtime.
        </p>

        <div className="mt-5 block" ref={heroBtn}>
          <BlueButton>
            <Link href="/about">
              <a className="flex mt-2">Get Started</a>
            </Link>
          </BlueButton>
        </div>
      </div>

      <div
        ref={heroImage}
        className={`md:flex md:justify-end sm:w-full sm:mt-[2.5rem] md:mt-0 md:w-1/2`}
      >
        <Image src={heroMk} alt="Aeroseed Africa" />
      </div>
    </section>
  );
};

export default Hero;
