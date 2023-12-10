"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { ModeToggle } from "../mode-toggle";

export const Header = () => {
  const segment = useSelectedLayoutSegment();

  const headBigLetter = (letter: string) => {
    const firstLetter = letter.substring(0, 1).toUpperCase();
    const otherLetter = letter.substring(1).toLowerCase();
    return `${firstLetter}${otherLetter}`;
  };

  return (
    <header className="flex h-14 items-center justify-between">
      <h1 className="text-2xl font-extrabold">
        {headBigLetter(segment ?? "")}
      </h1>
      <ModeToggle />
    </header>
  );
};
