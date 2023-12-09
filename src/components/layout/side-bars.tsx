"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { navItems } from "@/config";

import AccountNavItem from "../account-nav-item";
import NavBarItem from "./navbar-item";

const SideNavbar = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <aside className="sticky hidden w-[260px] border-r md:block">
      <div className="flex h-full w-full flex-col">
        <AccountNavItem />
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

export default SideNavbar;
