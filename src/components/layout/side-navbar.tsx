import { LucideIcon, StickyNote, User } from "lucide-react";

import AccountNavItem from "../account-nav-item";
import NavItem from "./nav-item";

type NavLinkItem = {
  href: string;
  text: string;
  icon: LucideIcon;
};

const items: NavLinkItem[] = [
  {
    href: "/",
    text: "Blog",
    icon: StickyNote,
  },
  {
    href: "/about",
    text: "About",
    icon: User,
  },
];

const SideNavbar = async () => {
  return (
    <aside className="hidden md:col-span-2 md:block">
      <div className="fixed flex h-full flex-col">
        <AccountNavItem />
        {items.map(({ href, text, icon: Icon }) => (
          <div
            key={text}
            className="overflow-hidden rounded-lg focus:outline-none"
          >
            <NavItem href={href}>
              <Icon />
              <div className="text-lg font-medium">{text}</div>
            </NavItem>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideNavbar;
