import Image from "next/image";
import React from "react";
import { CardStatus } from "../UI/CardStatus";

export const Card = () => {
  return (
    <div className="bg-[#0B0E12] flex flex-row flex-wrap sm:flex-nowrap items-center p-3 sm:px-[16px] sm:py-[23px] gap-3 rounded-[4px]">
      <div className="w-full sm:w-[98%] flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 sm:gap-3.5 items-center">
          <Image
            src="/icon/command-logo.svg"
            alt="command"
            width={36}
            height={36}
            className="w-[28px] h-[28px] sm:w-[48px] sm:h-[48px]"
          />
          <p className="text-white text-[14px] sm:text-[16px] font-semibold text-left">Command №1</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <div className="text-white text-[14px] sm:text-[16px] font-semibold flex flex-row flex-nowrap gap-0.5">
            <span>0</span>:<span>0</span>
          </div>
          <CardStatus cardType="Live" />
        </div>

        <div className="flex flex-row gap-2 sm:gap-3.5 items-center">
          <p className="text-white text-[14px] sm:text-[16px] font-semibold text-right">Command №2</p>
          <Image
            src="/icon/command-logo.svg"
            alt="command"
            width={36}
            height={36}
            className="w-[28px] h-[28px] sm:w-[48px] sm:h-[48px]"
          />
        </div>
      </div>

      <div className="w-full sm:w-[2%] flex justify-center">
        <Image
          src="/icon/down-arrow.svg"
          alt="arrow"
          width={24}
          height={24}
          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
        />
      </div>
    </div>
  );
};
