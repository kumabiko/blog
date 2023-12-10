import Link from "next/link";

import { NavItem } from "@/config";
import { cn } from "@/lib/utils";

type Props = NavItem & { segment: string | null };

export const NavBarItem = ({ href, icons, label, segment }: Props) => {
  const isActive =
    (segment && href.includes(segment)) ||
    (href === "/" && segment === "(blogs)");

  const Icon = isActive ? icons.active : icons.inactive;

  return (
    <Link
      className={cn(
        "flex w-full flex-col items-center gap-x-4 rounded-md p-1 md:flex-row md:p-2 md:hover:bg-accent",
      )}
      href={href}
    >
      <Icon size={24} />
      <div
        className={cn(
          "text-xs font-medium md:text-lg",
          isActive && "font-bold",
        )}
      >
        {label}
      </div>
    </Link>
  );
};
