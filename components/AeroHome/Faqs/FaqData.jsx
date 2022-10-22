/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Image from "next/image";

import plusIcon from "../../assets/Images/plusIcon.svg";
import minusIcon from "../../assets/Images/minusIcon.svg";

const FaqData = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShow = () => setShowAnswer(!showAnswer);

  return (
    <>
      <div className="mt-5 flex md:w-[80%] flex-row justify-between">
        <span>
          <h3
            className="font-pops inline-block text-[#121212] pr-[20%] font-[600] sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[26px] cursor-pointer"
            onClick={handleShow}
          >
            {props.Title}
          </h3>
          <p
            className={showAnswer ? "block font-pops text-zeddblack font-[400] sm:text-[12px] mt-5 sm:leading-[21px] md:text-[14px] md:leading-[20px]" : "hidden" }
          >
            {props.Answer}
          </p>
        </span>

        <span className="cursor-pointer" onClick={handleShow}>
          <span className={showAnswer ? "hidden" : "block"}>
            <Image src={plusIcon} alt="extend FAQ" />
          </span>

          <span className={showAnswer ? "block" : "hidden"}>
            <Image src={minusIcon} alt="extend FAQ" />
          </span>
        </span>
      </div>
    </>
  );
};

export default FaqData;
