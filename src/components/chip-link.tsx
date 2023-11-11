"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Toggle } from "./ui/toggle";

type Props = {
  href: string;
  name: string;
};

export default function ChipLink({ href, name }: Props) {
  const pathname = usePathname();

  return (
    <Toggle variant="outline" size="sm" asChild pressed={pathname === href}>
      <Link href={href}>{name}</Link>
    </Toggle>
  );
}
