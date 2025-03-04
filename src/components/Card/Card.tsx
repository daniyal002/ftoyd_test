'use client'

import Image from "next/image";
import React, { useState } from "react";
import { CardStatus } from "../UI/CardStatus";
import { ITeam } from "@/interface";
import { TeamInfo } from "../Team/TeamInfo";

interface Props{
    homeTeam: ITeam;
  awayTeam: ITeam;
  homeScore: number;
  awayScore: number;
  status: "Live" | "Finished" | "Match preparing";
}

export const Card = ({homeTeam,homeScore,awayTeam,awayScore,status}:Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="bg-[#0B0E12] flex sm:flex-row flex-col items-center p-3 sm:px-[16px] sm:py-[23px] gap-3 rounded-t-[4px]">
        <div className="w-full sm:w-[98%] flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 sm:gap-3.5 items-center">
            <Image
              src="/icon/command-logo.svg"
              alt="command"
              width={36}
              height={36}
              className="w-[20px] h-[20px] sm:w-[48px] sm:h-[48px]"
            />
            <p className="text-white text-[14px] sm:text-[16px] font-semibold text-left">{awayTeam.name}</p>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <div className="text-white text-[14px] sm:text-[16px] font-semibold flex flex-row flex-nowrap gap-0.5">
              <span>{awayScore}</span>:<span>{homeScore}</span>
            </div>
            <CardStatus cardType={status} />
          </div>

          <div className="flex flex-row gap-2 sm:gap-3.5 items-center">
            <p className="text-white text-[14px] sm:text-[16px] font-semibold text-right">{homeTeam.name}</p>
            <Image
              src="/icon/command-logo.svg"
              alt="command"
              width={36}
              height={36}
              className="w-[20px] h-[20px] sm:w-[48px] sm:h-[48px]"
            />
          </div>
        </div>

        <div className="w-full sm:w-[2%] flex justify-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <Image
            src="/icon/down-arrow.svg"
            alt="arrow"
            width={24}
            height={24}
            className={`w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {isExpanded && <TeamInfo homeTeam={homeTeam} awayTeam={awayTeam} />}
    </div>
  );
};
