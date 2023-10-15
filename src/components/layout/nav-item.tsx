import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: ReactNode;
}

const NavItem = ({ href, children }: Props) => (
  <Link
    className="flex w-full items-center gap-x-4 rounded-md px-4 py-3 hover:bg-accent"
    href={href}
  >
    {children}
  </Link>
);

export default NavItem;
