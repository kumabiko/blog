"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";

export const SearchField = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`/blog/search?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
};
