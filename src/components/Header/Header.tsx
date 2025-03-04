"use client";

import localFont from "next/font/local";
import React from "react";
import { ButtonUpdate } from "../UI/ButtonUpdate";
import { ErrorCard } from "../UI/ErrorCard";
import { useGetAllMatches } from "@/hook/MatchHook";
import { useQueryClient } from "@tanstack/react-query";
import { StatusFilter } from "../UI/StatusFilter";
import { useStatus } from '@/context/StatusContext';

const tacticSans = localFont({
  src: "../../../public/font/TacticSans-BldIt.woff2",
  weight: "500",
  style: "italic",
  variable: "--tactic-sans",
});


export default function Header() {
  const queryClient = useQueryClient();
  const { selectedStatus, setSelectedStatus } = useStatus();

  const handleClick = () => {
    queryClient.invalidateQueries({queryKey:["allMatches"]})
  };

  const { isError, isFetching } = useGetAllMatches();

  return (
    <header className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-stretch sm:items-center gap-4 sm:gap-1">
      <div className="flex items-center gap-4 flex-col sm:flex-row">
        <p className={`text-[24px] sm:text-[28px] md:text-[32px] italic text-white text-center sm:text-left ${tacticSans.className}`}>
          Match Tracker
        </p>
        <StatusFilter selectedStatus={selectedStatus} onStatusChange={setSelectedStatus} />
      </div>
      <div className="flex flex-row flex-wrap justify-center sm:justify-end gap-3">
        {isError && (
          <ErrorCard errorText="Ошибка: не удалось загрузить информацию" />
        )}
        <ButtonUpdate onClick={handleClick} isLoading={isFetching} />
      </div>
    </header>
  );
}
