/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";

import icon_1 from "../../assets/Images/icon-1.svg";
import icon_2 from "../../assets/Images/icon-2.svg";
import icon_3 from "../../assets/Images/icon-3.svg";

import Styles from "./Features.module.css";

const Features = () => {
  return (
    <section className="px-12 pt-10" id="works">
      <div className="text-center my-5 ">
        <h2 className="font-pops font-bold sm:text-[19px] sm:leading-[27px] md:text-[32px] md:leading-[35px]">
          The easiest way to shop and make purchase online
        </h2>
        <p className="font-pops md:mx-[20%] mt-4 text-zeddgray sm:text-[12px] sm:leading-[21px] md:text-[16px] md:leading-[24px]">
          Shop online, go premium, get assets, pay for services and most
          importantly purchase that new Call of Duty weapon with airtime.
        </p>
      </div>

      <div className={`${Styles.list} flex sm:flex-col md:flex-row`}>
        <div>
          <Image src={icon_1} alt="Zeddpay Features" />
          <h3 className="hero-title font-pops font-bold sm:text-[14px] sm:leading-[25px]">
            Convert airtime instantly
          </h3>
          <p className="font-pops text-zeddgray sm:text-[12px] sm:leading-[21px] md:text-[14px] md:leading-[24px]">
            Zeddpay converts your airtime to Zedd Coin within minutes.
          </p>
        </div>

        <div className="sm:my-10 md:my-2">
          <Image src={icon_2} alt="Zeddpay Features" />
          <h3 className="hero-title font-pops font-bold sm:text-[14px] sm:leading-[25px] ">
            Make purchase with airtime
          </h3>
          <p className="font-pops text-zeddgray sm:text-[12px] sm:leading-[21px] md:text-[14px] md:leading-[24px]">
            Zeddpay enables users to easily make purchases with airtime.
          </p>
        </div>

        <div>
          <Image src={icon_3} alt="Zeddpay Features" />
          <h3 className="hero-title font-pops font-bold sm:text-[14px] sm:leading-[25px] ">
            Secure and safe transaction
          </h3>
          <p className="font-pops text-zeddgray sm:text-[12px] sm:leading-[21px] md:text-[14px] md:leading-[24px]">
            Zeddpay offers a secure and safe transaction process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
