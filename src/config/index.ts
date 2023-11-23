import { IconType } from "react-icons";
import {
  HiBookOpen,
  HiOutlineBookOpen,
  HiOutlineUser,
  HiUser,
} from "react-icons/hi2";

export type NavItem = {
  href: string;
  icons: { active: IconType; inactive: IconType };
  label: string;
};

export const navItems: NavItem[] = [
  {
    href: "/",
    icons: { active: HiBookOpen, inactive: HiOutlineBookOpen },
    label: "Blog",
  },
  {
    href: "/about",
    icons: { active: HiUser, inactive: HiOutlineUser },
    label: "About",
  },
];
