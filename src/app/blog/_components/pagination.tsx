"use client";

import { usePathname, useSearchParams } from "next/navigation";

import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationWrap,
} from "@/components/ui/pagination";
import { LIMIT } from "@/constants";

const MAX_PAGE_DISPLAY = 4;

type Props = {
  totalCount: number;
};

export default function Pagination({ totalCount }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const isEmpty = totalCount === 0;

  if (isEmpty) return null;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const totalPages = Math.ceil(totalCount / LIMIT);

  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  const startPage = Math.max(
    1,
    Math.min(currentPage - 2, totalPages - MAX_PAGE_DISPLAY),
  );
  const endPage = Math.min(totalPages, startPage + MAX_PAGE_DISPLAY);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <PaginationWrap className="my-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(previousPage)} />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href={createPageURL(number)}
              isActive={currentPage === number}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={createPageURL(nextPage)} />
        </PaginationItem>
      </PaginationContent>
    </PaginationWrap>
  );
}
