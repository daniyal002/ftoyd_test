import React, { useState } from 'react';

type Status = "Live" | "Finished" | "Match preparing";

interface Props {
  selectedStatus: Status | "all";
  onStatusChange: (status: Status | "all") => void;
}

export const StatusFilter = ({ selectedStatus, onStatusChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getStatusText = (status: Status | "all") => {
    switch (status) {
      case "all":
        return "Все статусы";
      case "Live":
        return "Live";
      case "Finished":
        return "Finished";
      case "Match preparing":
        return "Match preparing";
    }
  };

  return (
    <div className="relative w-full sm:w-[204px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-[56px] bg-[#0B0E12] hover:bg-[#1A1F25] text-white px-6 rounded-[4px] flex items-center gap-2 min-w-[204px] w-full sm:w-[204px]"
      >
        <span className="text-lg font-semibold">{getStatusText(selectedStatus)}</span>
        <svg
          className={`w-4 h-4 ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-[#0B0E12] rounded-[4px] shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={() => {
                onStatusChange("all");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-6 py-3 text-lg font-semibold ${
                selectedStatus === "all" ? "text-white bg-[#1A1F25]" : "text-white hover:bg-[#1A1F25]"
              }`}
            >
              Все статусы
            </button>
            <button
              onClick={() => {
                onStatusChange("Live");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-6 py-3 text-lg font-semibold ${
                selectedStatus === "Live" ? "text-white bg-[#1A1F25]" : "text-white hover:bg-[#1A1F25]"
              }`}
            >
              Live
            </button>
            <button
              onClick={() => {
                onStatusChange("Finished");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-6 py-3 text-lg font-semibold ${
                selectedStatus === "Finished" ? "text-white bg-[#1A1F25]" : "text-white hover:bg-[#1A1F25]"
              }`}
            >
              Finished
            </button>
            <button
              onClick={() => {
                onStatusChange("Match preparing");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-6 py-3 text-lg font-semibold ${
                selectedStatus === "Match preparing" ? "text-white bg-[#1A1F25]" : "text-white hover:bg-[#1A1F25]"
              }`}
            >
              Match preparing
            </button>
          </div>
        </div>
      )}
    </div>
  );
};