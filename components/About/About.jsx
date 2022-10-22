/* eslint-disable react/jsx-key */
import React, { useRef, useEffect } from "react";

import Image from "next/image";

import heroMk from "../assets/heromockup.svg";
import heroMk2 from "../assets/Images/superIcon.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    <>
      <section
        ref={heroSection}
        className="hero-section bg-aeroblack pt-[7rem] md:pl-12 md:pr-12 lg:px:12 flex  sm:flex-col-reverse md:flex-row justify-between"
      >
        <div
          ref={heroImage}
          className={`md:flex md:justify-start sm:w-full sm:mt-[2.5rem] md:mt-0 md:w-1/2`}
        >
          <Image src={heroMk} alt="Aeroseed Africa" />
        </div>

        <div
          className={`text-zeddblack sm:mt-5 sm:px-12 md:px-0 md:w-1/2  md:self-center`}
        >
          <h2
            ref={heroTitle}
            className="hero-title font-pops font-bold sm:text-[25px] sm:leading-[32px] md:text-[40px]  mb-5 md:leading-[60px]"
          >
            We’re not just making life easy, we’re solving a problem for the
            Gen-Z
          </h2>

          <p
            ref={heroInfo}
            className="font-pops text-zeddgray md:pr-[10%] sm:text-[14px] sm:leading-[21px] md:text-[16px] md:leading-[24px]"
          >
            We created Zeddpay because we want to solve the problem Gen-Z
            encounter while registering for a banl account, and can’t purchase
            anything online without having a credit card. With Zeddpay you don’t
            need a bank account to send or receive money. Our mission is to make
            sure you enjoy the most convinient, easiest & secure way of paying
            for products and services throughout the unicorn platform.
          </p>
        </div>
      </section>

      {/* Section 2 */}

      <section
        ref={heroSection}
        className="hero-section sm:mt-[-5rem] pt-[7rem] md:pl-12 md:pr-12 lg:px:12 flex  sm:flex-col-reverse md:flex-row-reverse justify-between"
      >
        <div
          ref={heroInfo}
          className={`md:flex md:justify-end sm:w-full sm:mt-[2.5rem] md:mt-0 md:w-1/2`}
        >
          <Image src={heroMk2} alt="Zeddpay" />
        </div>

        <div
          className={`text-zeddblack sm:mt-5 sm:px-12 md:px-0 md:w-1/2  md:self-center`}
        >
          <h2
            ref={heroTitle}
            className="hero-title font-pops font-bold sm:text-[25px] sm:leading-[32px] md:text-[40px]  mb-5 md:leading-[60px]"
          >
            Our Vision
          </h2>

          <p
            ref={heroInfo}
            className="font-pops text-zeddgray md:pr-[10%] sm:text-[14px] sm:leading-[21px] md:text-[16px] md:leading-[24px]"
          >
            Making online purchasing as easy as possible; Zeddpay is a
            distributed company of ever eight individuals, develops mobile and
            web platforms that provides consumes with the most convinient way to
            buy anything online and pay for it through Airtime or Bitcoin. We
            are a technologically driven young team of enterprenuers who believe
            that our offerings will revolutionize the African e-commerce
            industry as we ensure to deliver excellent products, services and
            experiences to everyone on the continent. Purchase anything online
            with our Zeddcoin services; Zeddpay gives you the power to send and
            spend airtime online with a simple, secure and convinient way to buy
            internet services without requiring any deposits or bank accounts.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
