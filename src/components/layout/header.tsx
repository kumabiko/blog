"use client";

import { ComponentProps } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

import { ModeToggle } from "../mode-toggle";
import { MobileNav } from "./mobile-nav";
import { NavigationMenu } from "./navigation-menu";

const DEFAULT_SEGMENT = "__DEFAULT__";

type Props = ComponentProps<typeof NavigationMenu>;

export const Header = (props: Props) => {
  const segment = useSelectedLayoutSegment();

  const headBigLetter = (letter: string) => {
    const firstLetter = letter.substring(0, 1).toUpperCase();
    const otherLetter = letter.substring(1).toLowerCase();
    return `${firstLetter}${otherLetter}`;
  };

  return (
    <header className="flex h-14 items-center justify-between">
      <MobileNav>
        <NavigationMenu {...props} />
      </MobileNav>
      <h1 className="text-2xl font-extrabold">
        {headBigLetter(
          segment === null || segment === DEFAULT_SEGMENT ? "" : segment,
        )}
      </h1>
      <ModeToggle />
    </header>
  );
};
