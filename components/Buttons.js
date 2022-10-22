import React from 'react'

export const BlueButton = (props) => {
  return (
    <button className="bg-zeddblue font-pops text-[13px] inline-block leading-[17px] font-[500] text-zeddfaint py-4 px-7 rounded-[64px] pointer">
      {props.children}
    </button>
  );
};

export const GreenButton = (props) => {
  return (
    <button className="bg-zeddfaint outline inline-block outline-zeddgreen font-pops text-[13px] leading-[17px] font-[500] text-zeddgreen py-3 px-7 rounded-[64px] pointer">
      {props.children}
    </button>
  );
};

export const WhiteButton = (props) => {
  return (
    <button className="bg-white  inline-block text-zeddblue font-pops text-[13px] leading-[17px] font-[500]  py-3 px-20 rounded-[64px] pointer">
      {props.children}
    </button>
  );
};
