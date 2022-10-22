/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ZeddLogo from "../assets/Images/zeddpay-logo.svg";

import FbIcon from '../assets/Images/Facebook.svg';
import TwIcon from "../assets/Images/Twitter.svg";
import IgIcon from "../assets/Images/Instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="mx-12 my-9 flex sm:flex-col md:flex-row md:justify-between md:gap-[3rem]">
        <div className="about sm:w-3/3 md:w-2/6">
          <Image src={ZeddLogo} alt="Zeddpay logo" />
          <p className="sm:text-[12px] font-pops font-[400] sm:leading-[22px] md:text-[14px]  mb-5 md:leading-[25px]">
            Zeddpay is a paymet platform that allows you pay for services with
            your airtime.
          </p>
        </div>

        <div className="periph sm:w-3/3 md:w-4/6 sm:mt-[3rem] md:mt-0 flex sm:flex-col md:flex-row md:justify-between">
          <div className="sm:w-full sm:flex sm:flex-row">
            <div className="sm:w-1/2 md:w-2/2">
              <p className="font-pops text-zeddblack font-[700] sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[26px]">
                Pages
              </p>
              <ul>
                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/">
                    <a>Create an Account</a>
                  </Link>
                </li>

                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/">
                    <a>Login</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:w-1/2 md:w-2/2">
              <p className="font-pops text-zeddblack font-[700] sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[26px]">
                Legal
              </p>
              <ul>
                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/">
                    <a>Terms of Service</a>
                  </Link>
                </li>

                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/">
                    <a>Privacy Guidelines</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* second sm row */}

          <div className="sm:w-full sm:flex sm:flex-row sm:mt-5 md:mt-0">
            <div className="sm:w-1/2 md:w-2/2">
              <p className="font-pops text-zeddblack font-[700] sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[26px]">
                Company
              </p>
              <ul>
                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>

                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/about">
                    <a>About us</a>
                  </Link>
                </li>

                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/#works">
                    <a>How it Works</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:w-1/2 md:w-2/2 ">
              <p className="font-pops text-zeddblack font-[700] sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[26px]">
                Community
              </p>
              <ul>
                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/#faqs">
                    <a>FAQs</a>
                  </Link>
                </li>

                <li className="font-pops text-zeddblack font-[400] sm:text-[12px] mt-2 sm:leading-[21px] md:text-[14px] md:leading-[20px]">
                  <Link href="/">
                    <a>Blogs</a>
                  </Link>

                  <button className="rounded-full font-pops bg-[#FAFAFA] ml-3 p-1 text-zeddgray">
                    coming soon 🔥
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-social mx-12 md:mt-[-2rem] mb-10">
        <Link href="/">
          <a>
            <Image src={FbIcon} alt="Zeddpay on Facebook" />
          </a>
        </Link>

        <span className="px-4">
          <Link href="/">
            <a>
              <Image src={TwIcon} alt="Zeddpay on Facebook" />
            </a>
          </Link>
        </span>

        <Link href="/">
          <a>
            <Image src={IgIcon} alt="Zeddpay on Facebook" />
          </a>
        </Link>
      </div>

      <hr />

      <p className="text-center uppercase font-pops mt-5 mb-5 text-zeddgray">
        &copy; Zeddpay {new Date().getFullYear()} - All rights reserved
      </p>
    </>
  );
};

export default Footer;
