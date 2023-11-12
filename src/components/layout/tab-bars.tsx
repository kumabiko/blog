"use client";

import { navItems } from "@/config";

import NavBarItem from "./navbar-item";

const TabBars = () => {
  return (
    <div className="fixed bottom-0 z-10 flex w-full translate-y-px justify-around gap-x-2 border-t p-2 md:hidden">
      {navItems.map((navItem) => (
        <div key={navItem.label}>
          <NavBarItem
            href={navItem.href}
            label={navItem.label}
            icon={navItem.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default TabBars;
