import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: ReactNode;
}

const NavItem = ({ href, children }: Props) => (
  <Link
    className="my-1 flex max-w-fit items-center gap-x-4 rounded-full px-4 py-3 hover:bg-accent"
    href={href}
  >
    {children}
  </Link>
);

export default NavItem;
