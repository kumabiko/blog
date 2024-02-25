"use client";

import React, { ReactNode, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";

import { Button } from "../ui/button";

type Props = { children: ReactNode };

export const MobileNav = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <HiBars3 size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">{children}</SheetContent>
    </Sheet>
  );
};
