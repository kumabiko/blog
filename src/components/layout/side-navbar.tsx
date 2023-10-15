import { LucideIcon, Mountain, StickyNote, User } from "lucide-react";

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

const SideNavbar = () => (
  <aside className="hidden md:col-span-2 md:block">
    <div className="fixed flex h-full flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <NavItem href="/">
          <Mountain />
        </NavItem>
        {items.map(({ href, text, icon: Icon }) => (
          <div
            key={text}
            className="overflow-hidden rounded-lg focus:outline-none"
          >
            <NavItem href={href}>
              <Icon />
              <div className="hidden flex-none text-lg font-medium md:inline-flex">
                {text}
              </div>
            </NavItem>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default SideNavbar;
