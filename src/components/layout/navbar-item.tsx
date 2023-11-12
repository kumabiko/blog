import Link from "next/link";

import { NavItem } from "@/config";
import { cn } from "@/lib/utils";

type Props = NavItem & { segment: string | null };

const NavBarItem = ({ href, icon: Icon, label, segment }: Props) => {
  const isActive =
    (segment && href.includes(segment)) ||
    (href === "/" && segment === "(blogs)");
  return (
    <Link
      className={cn(
        "flex w-full flex-col items-center gap-x-4 rounded-md px-4 py-3 md:flex-row md:hover:bg-accent",
      )}
      href={href}
    >
      <Icon strokeWidth={isActive ? 3 : 2} />
      <div className={cn("text-lg font-medium", isActive && "font-bold")}>
        {label}
      </div>
    </Link>
  );
};

export default NavBarItem;
