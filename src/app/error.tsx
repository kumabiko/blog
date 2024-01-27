"use client";

import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error("😢", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <p className="text-xl">{error.message}</p>
      <h2 className="text-xl font-semibold">エラーが発生しました。</h2>
      <Button variant="destructive" onClick={() => reset()}>
        もう一度試す
      </Button>
    </div>
  );
};

export default Error;
