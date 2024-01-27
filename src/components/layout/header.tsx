"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { ModeToggle } from "../mode-toggle";

const DEFAULT_SEGMENT = "__DEFAULT__";

export const Header = () => {
  const segment = useSelectedLayoutSegment();

  const headBigLetter = (letter: string) => {
    const firstLetter = letter.substring(0, 1).toUpperCase();
    const otherLetter = letter.substring(1).toLowerCase();
    return `${firstLetter}${otherLetter}`;
  };

  return (
    <header className="sticky top-0 flex h-14 items-center justify-between">
      <h1 className="text-2xl font-extrabold">
        {headBigLetter(
          segment === null || segment === DEFAULT_SEGMENT ? "" : segment,
        )}
      </h1>
      <ModeToggle />
    </header>
  );
};
