import { navItems } from "@/config";

import AccountNavItem from "../account-nav-item";
import NavbarItem from "./navbar-item";

const SideNavbar = () => {
  return (
    <aside className="hidden md:col-span-2 md:block">
      <div className="fixed flex h-full flex-col">
        <AccountNavItem />
        {navItems.map((navItem) => (
          <div
            key={navItem.label}
            className="overflow-hidden rounded-lg focus:outline-none"
          >
            <NavbarItem
              href={navItem.href}
              icon={navItem.icon}
              label={navItem.label}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideNavbar;
