/* eslint-disable react/jsx-key */
import React from "react";
import Styles from "./Works.module.css";

import Image from "next/image";

import Mockup from "../../assets/Images/mockup-phone.svg";

const Works = () => {
  return (
    <section className="mx-5 px-12 text-center">
      <h3 className="font-pops text-zeddblack font-bold  sm:text-[17px] sm:leading-[32px] md:text-[32px] md:leading-[56px]">
        How it works
      </h3>

      <p className="font-pops text-zeddgray sm:text-[12px] sm:leading-[21px] md:text-[18px] md:leading-[35px]">
        Convert your airtime to cash and make purchases with Zeddpay in 4 easy
        steps
      </p>

      <div
        className={`${Styles.work_container} flex sm:flex-col md:flex-row gap-10 md:justify-between mt-[5rem] `}
      >
        <div className="list sm:w-full md:w-1/3">
          <h3 className="font-pops text-zeddblack font-bold  sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[26px]">
            Create a free account
          </h3>
          <p className="font-pops text-zeddgray font-[400] mt-2 sm:text-[12px] sm:leading-[21px] md:text-[14px] md:leading-[22px]">
            Login to the Zeddpay app and create a free account in a few minutes.
          </p>
           <span className="flex">
          <Image src={Mockup} alt="How Zeddpay work" />
          </span>
        </div>

        <div className="list sm:w-full md:w-1/3">
          <h3 className="font-pops text-zeddblack font-bold  sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[26px]">
            Create a free account
          </h3>
          <p className="font-pops text-zeddgray font-[400] mt-2 sm:text-[12px] sm:leading-[21px] md:text-[14px] md:leading-[22px]">
            Login to the Zeddpay app and create a free account in a few minutes.
          </p>
           <span className="flex">
          <Image src={Mockup} alt="How Zeddpay work" />
          </span>
        </div>

        <div className="list sm:w-full md:w-1/3">
          <h3 className="font-pops text-zeddblack font-bold  sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[26px]">
            Create a free account
          </h3>
          <p className="font-pops text-zeddgray font-[400] mt-2 sm:text-[12px] sm:leading-[21px] md:text-[14px] md:leading-[22px]">
            Login to the Zeddpay app and create a free account in a few minutes.
          </p>
           <span className="flex">
          <Image src={Mockup} alt="How Zeddpay work" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Works;
