/* eslint-disable react/jsx-key */
import React from "react";
import { WhiteButton } from "../../Buttons";
import Link from "next/link";
import Image from "next/image";

import Styles from "./Easy.module.css";

import Mockup from "../../assets/Images/makepurchase-mk.svg";

const Easy = () => {
  return (
    <section className={`${Styles.easy_section} my-[5rem] mx-12 text-center`}>
      <h3 className="font-pops text-white pt-10 sm:mx-[4rem] md:mx-[18rem] lg:mx-[20rem] font-bold sm:text-[17px] sm:leading-[32px] md:text-[32px] md:leading-[56px]">
        Easily make purchases from your favourite services
      </h3>

      <p className="font-pops text-white sm:mx-[3rem] mb-5 mt-3 md:mx-[17rem] lg:mx-[19rem] sm:text-[12px] sm:leading-[21px] md:text-[18px] md:leading-[35px]">
        Make purchases from your favourite services such as; Amazon, Spotify and
        Bitcoin directly from your virtual wallet.
      </p>

      <WhiteButton>
        <Link href="/">
          <a>Get Started</a>
        </Link>
      </WhiteButton>

         <span className="flex justify-center">
        <Image src={Mockup} alt="Get Started with Zeddpay" className="mb-[-10px]" />
         </span>
    </section>
  );
};

export default Easy;
