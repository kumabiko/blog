"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { navItems } from "@/config";

import AccountNavItem from "../account-nav-item";
import NavBarItem from "./navbar-item";

const SideNavbar = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <aside className="hidden md:col-span-2 md:block">
      <div className="fixed flex h-full flex-col">
        <AccountNavItem />
        {navItems.map((navItem) => (
          <div
            key={navItem.label}
            className="overflow-hidden rounded-lg focus:outline-none"
          >
            <NavBarItem
              href={navItem.href}
              icon={navItem.icon}
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
