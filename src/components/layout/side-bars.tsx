"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { navItems } from "@/config";
import { Information } from "@/lib/microcms";

import { AccountItem } from "../account-item";
import { Footer } from "./footer";
import { NavBarItem } from "./navbar-item";

type Props = Pick<Information, "profileName" | "profileImage" | "copyright">;

export const SideBars = ({ profileName, profileImage, copyright }: Props) => {
  const segment = useSelectedLayoutSegment();

  return (
    <aside className="sticky hidden w-[260px] border-r md:block">
      <div className="flex h-full w-full flex-col justify-between">
        <div>
          <Link href="/">
            <AccountItem
              profileName={profileName}
              profileImage={profileImage}
            />
          </Link>
          {navItems.map((navItem) => (
            <div
              key={navItem.label}
              className="overflow-hidden rounded-lg px-2 focus:outline-none"
            >
              <NavBarItem
                href={navItem.href}
                icons={navItem.icons}
                label={navItem.label}
                segment={segment}
              />
            </div>
          ))}
        </div>
        <Footer copyright={copyright} />
      </div>
    </aside>
  );
};
