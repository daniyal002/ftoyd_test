import Image from "next/image";
import React from "react";

interface Props {
  errorText: string;
}

export const ErrorCard = ({ errorText }: Props) => {
  return (
    <div className="bg-[#0F1318] p-4 gap-2.5 flex flex-row rounded-[4px]">
      <Image
        src="/icon/alert-triangle.svg"
        alt="alert-triangle"
        width={28}
        height={28}
        className="w-[28px] h-[28px]"
      />

      <span className="text-white text-lg font-medium">{errorText}</span>
    </div>
  );
};
