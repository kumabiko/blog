import { LucideIcon, StickyNote, User } from "lucide-react";

export type NavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export const navItems: NavItem[] = [
  {
    href: "/",
    icon: StickyNote,
    label: "Blog",
  },
  {
    href: "/about",
    icon: User,
    label: "About",
  },
];
