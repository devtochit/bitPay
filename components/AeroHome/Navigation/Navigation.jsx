/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ZeddLogo from "../../assets/Images/zeddpay-logo.svg";

import { Toggler } from "./Toggler/Toggler";

import { GreenButton, BlueButton } from "../../Buttons.js";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => setOpenMenu(!openMenu);

  return (
    <nav
      className={`fixed z-50 bg-zeddfaint sm:py-5 md:py-0 flex justify-between items-center w-full  px-12`}
    >
      <div className="Nav_brand">
        <Link href="/">
          <a>
            <Image src={ZeddLogo} alt="Aeroseed Africa" />
          </a>
        </Link>
      </div>

      {/* Links */}

      <div>
        <div
          onClick={showMenu}
          className={
            openMenu
              ? "mt-[-10px] relative z-10 h-[0.2rem] w-[0.5rem] cursor-pointer transition ease-in-out duration-5000"
              : `mt-[-5px] relative  z-10 h-[0.2rem] w-[0.5rem] cursor-pointer transition ease-in-out duration-5000`
          }
        >
          <Toggler openMenu={openMenu} />
        </div>

        <ul
          className={
            openMenu
              ? `font-pops sm:text-[25px] sm:leading-[30px] md:text-[16px] md:leading-[24px] sm:flex sm:flex-col  sm:justify-center sm:items-center sm:min-h-screen w-[100%] sm:absolute sm:translate-x-[-100%] z-[-10] sm:bg-zeddfaint sm:ml-[3.5rem] md:hidden`
              : `font-pops text-[16px] leading-[24px] sm:hidden md:flex md:items-center`
          }
        >
          <li className="text-zeddblack sm:hover:underline sm:decoration-[7px] sm:underline-offset-[4] md:hover:no-underline md:hover:opacity-[0.8] md:ml-10">
            <Link className="" href="/">
              <a className="">Home</a>
            </Link>
          </li>

          <li
            className="text-zeddblack sm:hover:underline sm:decoration-[7px] sm:underline-offset-[4]
          md:hover:no-underline md:hover:opacity-[0.8] sm:mt-8 sm:mb-8 md:ml-10"
          >
            <Link href="/#about">
              <a>About us</a>
            </Link>
          </li>

          <li
            className="text-zeddblack sm:hover:underline sm:decoration-[7px] sm:underline-offset-[4]
          md:hover:no-underline md:hover:opacity-[0.8] sm:mb-8 md:mb-0 md:ml-10"
          >
            <Link href="#/contact">
              <a>Contact</a>
            </Link>
          </li>

          <li className="buttons sm:block md:hidden">
            <GreenButton>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </GreenButton>
          </li>

          <li className="buttons mt-5 sm:block md:hidden">
            <BlueButton>
              <Link href="#/contact">
                <a>Get Started</a>
              </Link>
            </BlueButton>
          </li>
        </ul>
      </div>

      <div className="buttons sm:hidden md:block">
        <GreenButton>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </GreenButton>

        <span className="ml-6">
          <BlueButton>
            <Link href="/support">
              <a>Get Started</a>
            </Link>
          </BlueButton>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
