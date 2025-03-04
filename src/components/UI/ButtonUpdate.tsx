"use client";

import Image from "next/image";
import React from "react";

interface Props {
  onClick: () => void;
  isPending?: boolean;
}

export const ButtonUpdate = ({ onClick, isPending }: Props) => {
  return (
    <button
      className={`  text-white text-lg font-semibold w-[204px] h-[56px] rounded-[4px] p-4 flex flex-row gap-2.5 items-center justify-center  ${
        isPending
          ? "bg-[#701328] hover:bg-[#A01131] active:bg-[#A01131] cursor-no-drop"
          : "bg-[#EB0237] hover:bg-[#A01131] active:bg-[#A01131] cursor-pointer"
      } `}
      onClick={() => onClick()}
      disabled={isPending}
    >
      <span>Обновить</span>
      <Image
        src="/icon/refresh.svg"
        alt="refresh"
        width={26}
        height={26}
        className={`w-[26px] h-[26px] ${isPending ? "animate-spin" : ""}`}
      />
    </button>
  );
};
