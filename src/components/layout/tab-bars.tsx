"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { navItems } from "@/config";

import { NavBarItem } from "./navbar-item";

export const TabBars = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="fixed bottom-0 z-10 flex w-full translate-y-px justify-around gap-x-2 border-t bg-background/70 backdrop-blur md:hidden">
      {navItems.map((navItem) => (
        <div key={navItem.label}>
          <NavBarItem
            href={navItem.href}
            label={navItem.label}
            icons={navItem.icons}
            segment={segment}
          />
        </div>
      ))}
    </div>
  );
};
