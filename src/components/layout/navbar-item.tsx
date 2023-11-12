import Link from "next/link";

import { NavItem } from "@/config";

const NavBarItem = ({ href, icon: Icon, label }: NavItem) => (
  <Link
    className="flex w-full items-center gap-x-4 rounded-md px-4 py-3 hover:bg-accent"
    href={href}
  >
    <Icon />
    <div className="text-lg font-medium">{label}</div>
  </Link>
);

export default NavBarItem;
