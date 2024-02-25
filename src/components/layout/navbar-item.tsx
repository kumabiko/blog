import Link from "next/link";

import { NavItem } from "@/config";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const navItemVariants = cva("flex w-full items-center gap-x-4 rounded-md", {
  variants: {
    layout: {
      tab: "flex-col p-1",
      side: "flex-row p-2 hover:bg-accent",
    },
  },
});

type Props = NavItem & { segment: string | null } & VariantProps<
    typeof navItemVariants
  >;

export const NavBarItem = ({ href, icons, label, segment, layout }: Props) => {
  const isActive =
    (segment && href.includes(segment)) ||
    (href === "/" && segment === "(blogs)");

  const Icon = isActive ? icons.active : icons.inactive;

  return (
    <Link className={cn(navItemVariants({ layout }))} href={href}>
      <Icon size={24} />
      <div className={cn("text-lg font-medium", isActive && "font-bold")}>
        {label}
      </div>
    </Link>
  );
};
