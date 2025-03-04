import { ITeam } from "@/interface";
import Image from "next/image";
import React from "react";

interface Props {
  team: ITeam;
}

export const Team = ({ team }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <div className="mt-4 flex gap-2 min-[378px]:flex-row flex-col">
        {team.players.map((player) => (
          <div
            key={player.username}
            className="w-full min-[378px]:w-1/2 lg:w-1/3 flex px-3 py-2 bg-[#101318] rounded-[4px] items-center justify-around flex-wrap"
          >
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/img/avatar.png"
                alt=""
                width={28}
                height={28}
                className="w-[28px] h-[28px] lg:w-[36px] lg:h-[36px]"
              />
              <span
                className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-semibold max-w-[120px] truncate hover:text-clip hover:overflow-visible active:text-clip active:overflow-visible"
                title={player.username}
              >
                {player.username}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs lg:text-sm text-[#FAFAFA66] font-medium">
                Убийств:
              </span>
              <span className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-semibold">
                {player.kills}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col min-[400px]:flex-row items-center min-[400px]:items-center gap-2 bg-[#101318] p-3 min-[400px]:px-4 rounded-[4px]">

        <div className="flex items-center w-full min-[400px]:w-1/3 justify-center">
          <span className="text-gray-400 text-xs lg:text-sm text-center">Points:</span>
          <span className="text-white ml-2">+{team.points}</span>
        </div>

        <span className="hidden sm:block text-gray-600 mx-2">|</span>

        <div className="flex items-center w-full min-[400px]:w-1/3 justify-center">
          <span className="text-gray-400 text-xs lg:text-sm">Место:</span>
          <span className="text-white ml-2">{team.place}</span>
        </div>

        <span className="hidden sm:block text-gray-600 mx-2">|</span>

        <div className="flex items-center w-full min-[400px]:w-1/3 justify-center">
          <span className="text-gray-400 text-xs lg:text-sm">Всего убийств:</span>
          <span className="text-white ml-2">{team.total_kills}</span>
        </div>
      </div>
    </div>
  );
};
