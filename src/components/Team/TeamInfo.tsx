import { ITeam } from "@/interface";
import React from "react";
import { Team } from "./Team";

interface Props {
  homeTeam: ITeam;
  awayTeam: ITeam;
}


export const TeamInfo = ({ homeTeam, awayTeam }: Props) => {
  return (
    <div className="w-full bg-[#1A1F25] p-4 rounded-b-[4px]">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* Away Team */}
       <Team team={awayTeam}/>

        {/* Divider */}
        <div className="w-px bg-gray-700 hidden sm:block" />
        <p className="text-[#313A47] lg:hidden block text-center text-sm font-semibold h-0" >VS</p>

        {/* Home Team */}
       <Team team={homeTeam}/>
      </div>
    </div>
  );
};