/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";

import Doodle from "../../assets/Images/avater.svg";

import FaqData from "./FaqData";

const Faqs = () => {
  return (
    <section className="sm:mt-10 md:mt-[5rem] px-12" id="faqs">
      <div className="flex md:flex-rol">
        <div className="sm:w-3/3 md:w-2/3">
          <h3 className="font-pops text-zeddblack font-bold sm:text-[17px] sm:leading-[32px] md:text-[32px] md:leading-[56px]">
            Here are some frequently asked questions
          </h3>

          <p className="font-pops text-zeddgray sm:text-[12px] sm:leading-[21px] md:text-[18px] md:leading-[35px]">
            We answered some questions so you don’t need to ask them.
          </p>

          <FaqData
            Title="Can i use my bonus airtime?"
            Answer="Jesus Christ, No!! 😂"
          />
          <FaqData
            Title="Would the airtime recharged be
the same exact amount in
your wallet?"
            Answer="Yes, It is"
          />
          <FaqData Title="What is ZCN/ Zedd Coin?" Answer="Yes, It is" />
        </div>

        <div className="sm:hidden md:block md:w-1/3">
          <Image src={Doodle} alt="ZeddPay Faqs" />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
