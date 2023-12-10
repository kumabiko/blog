"use client";

import { ReactNode } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

import { navItems } from "@/config";

import { NavBarItem } from "./navbar-item";

type Props = {
  navItemElement: ReactNode;
};

export const SideBars = ({ navItemElement }: Props) => {
  const segment = useSelectedLayoutSegment();

  return (
    <aside className="sticky hidden w-[260px] border-r md:block">
      <div className="flex h-full w-full flex-col">
        {navItemElement}
        {navItems.map((navItem) => (
          <div
            key={navItem.label}
            className="overflow-hidden rounded-lg px-2 focus:outline-none"
          >
            <NavBarItem
              href={navItem.href}
              icons={navItem.icons}
              label={navItem.label}
              segment={segment}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};
