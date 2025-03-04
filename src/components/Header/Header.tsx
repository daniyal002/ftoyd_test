"use client";

import localFont from 'next/font/local';
import React, { useState } from "react";
import { ButtonUpdate } from "../UI/ButtonUpdate";
import { ErrorCard } from "../UI/ErrorCard";

const tacticSans = localFont({
  src: '../../../public/font/TacticSans-BldIt.woff2',
  weight: '500',
  style: "italic",
  variable: '--tactic-sans'
});

export default function Header() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Симуляция загрузки
  };

  return (
    <header className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-0">
      <div>
        <p className={`text-[24px] sm:text-[28px] md:text-[32px] italic text-white text-center sm:text-left ${tacticSans.className}`}>Match Tracker</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center sm:justify-end gap-3">
        <ErrorCard errorText="Ошибка: не удалось загрузить информацию" />
        <ButtonUpdate onClick={handleClick} isPending={loading} />
      </div>
    </header>
  );
}
